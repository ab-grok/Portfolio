"use server";
import { cookies } from "next/headers";
import crypto from "crypto";
import { decodeBase32, encodeBase32LowerCaseNoPadding } from "@oslojs/encoding";
import { logVisit, storeMessageData } from "./server";

// ------> session tokens

const generateCookie = () => {
  const bytes = new Uint8Array(20);
  crypto.getRandomValues(bytes);
  const token = encodeBase32LowerCaseNoPadding(bytes);
  return token;
};

const setCookie = async (
  name: "analytics" | "session",
  value: string,
  expires?: Date,
) => {
  try {
    (await cookies()).set(name, value, {
      expires: expires || new Date(Date.now() + 24 * 3600 * 1000), //valid for a day
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV == "production",
      sameSite: "lax",
    });

    return { error: null };
  } catch (e: any) {
    console.error("error in setCookie", e);
    return { error: e.message ?? "Error in setCookie" };
  }
};

const getCookie = async (name: "session" | "analytics") => {
  try {
    const token = (await cookies()).get(name)?.value;
    return token;
  } catch (e) {
    console.error("error in getCookie", e);
    return undefined;
  }
};

const getTokenHex = (token: string) => {
  const hex = crypto.createHash("sha256").update(token).digest("hex");
  return hex;
};

// ---------> session actions
//going to call a logVisit -- need to do that once and not every page load -- if you get cookies dont log

export const handleVisitorSession = async (fpID: string) => {
  try {
    const fpHex = getTokenHex(fpID);

    let cookie = await getCookie("session");

    console.log("handleVisitorSession ran", { cookie, fpHex });
    if (cookie) return;
    console.log("handleVisitorSession ran after cookie return");

    cookie = generateCookie();
    const sessID = getTokenHex(cookie);
    const { error } = await logVisit(sessID, fpHex);
    if (error) throw { message: error };

    const { error: e1 } = await setCookie("session", cookie);
    if (e1) throw { message: e1 };
  } catch (e: any) {
    const message = "Error in handleVisitorSession";
    console.error(message, ": ", e.message || e);
  }
};

export const handleMessageSubmitted = async (formData: {
  email: string;
  name: string;
  message: string;
  fpID: string;
}) => {
  try {
    let { name: n, email: e, message: m, fpID } = formData;
    n = n.trim();
    e = e.trim();
    m = m.trim();
    if (!n || !e || !m || !fpID) throw { message: "Invalid parameters" };

    const emailPass = /^[a-z]+[^\s@]+@[a-z0-9\-]+\.[a-z\-]+$/i.test(e);
    const namePass = /^[a-z0-9\.@#_ -]+$/i.test(n);

    const { error } = await storeMessageData(n, e, m, fpID);
    if (error) throw { message: error };
    return { error: null };
  } catch (e: any) {
    const header = "Error in handleMessageSubmitted";
    console.error(header, ": ", e.message || e);
    return { error: "Could't submit message, but the error has been logged!" };
  }
};
