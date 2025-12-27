"use client";

import fp from "@fingerprintjs/fingerprintjs";
import { handleVisitorSession } from "@/lib/sessions";

import { useContext, useEffect, useState, createContext } from "react";

type fpID = {
  fpID: string;
};

const fpContext = createContext({} as fpID);

export const useFpContext = () => useContext(fpContext);

const FpContext = ({ children }: { children: React.ReactNode }) => {
  const [fpID, setFpID] = useState("");

  useEffect(() => {
    //get fingerprint
    (async () => {
      const result = await (await fp.load()).get();
      const fpID = result.visitorId;
      setFpID(fpID);
      await handleVisitorSession(fpID);
      console.log("root page executed");
    })();
  }, []);

  return <fpContext.Provider value={{ fpID }}>{children}</fpContext.Provider>;
};

export default FpContext;
