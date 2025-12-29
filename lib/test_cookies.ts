"use client";

type cookie = {
  name: string;
  expires?: Date;
  path: string;
  domain: string;
  sameSite: "lax" | "strict" | "none";
};

export default function setCookie(cookie: cookie) {
  const { name, expires: e, path, domain, sameSite } = cookie;
  const expires = e || new Date(Date.now() + 1000 * 3600 * 24 * 28);
  document.cookie = `name=${name}; expires=`;
}

document.cookie = "name=session; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

//   const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
//   const [key, value] = cookie.split("=");
//   acc[key] = value;
//   return acc;
// }, {});
// console.log(cookies.session); // "abc123"
