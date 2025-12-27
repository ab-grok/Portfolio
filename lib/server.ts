"use server";

import { encodeBase32LowerCaseNoPadding } from "@oslojs/encoding";
import postgres from "postgres";

if (!process.env.DB) throw new Error("env.DB variable is not found");

const db = postgres(process.env.DB, {
  ssl: true,
  debug: (conn, query, params) => {
    console.log("SQL:", query);
  },
});

//get tb for both visits: visitorID, timestamp. and uniqueVisitors: fpHex, timestamp

export const logVisit = async (sessID: string, fpHex: string) => {
  try {
    if (!sessID || !fpHex) throw { message: "missing parameters" };

    const q1 =
      await db`insert into "private"."visitors" (sessionId) values (${sessID})`;
    const fp =
      await db`select 1 from private."uniqueVisitors" where "fingerprintId" = ${fpHex}`;
    if (!fp[0])
      await db`insert into private."uniqueVisitors" ("fingerprintId", "sessionId") values (${fpHex}, ${sessID})`;

    return { error: null };
  } catch (e: any) {
    const header = "error in logVisitor";
    console.error(header, ": ", e);
    return { error: { header, message: e.message || e } };
  }
};

export const storeMessageData = async (
  name: string,
  email: string,
  message: string,
  fpID: string,
) => {
  try {
    if (!name || !email || !message) throw { message: "missing parameters" };

    await db`insert into private."messages" (name, email, message, "fingerprintId") values (${name}, ${email}, ${message}, ${fpID})`;

    return { error: null };
  } catch (e: any) {
    const header = "error in storeMessage";
    console.error(header, ": ", e);
    return { error: { header, message: e.message || e } };
  }
};
