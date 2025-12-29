"use client";

type cookie = {
  expires?: Date
  path:string;
  domain:string;
  sameSite: "lax"|"strict"|"none"
}

export default function setCookie(cookie:cookie) {
  document. 
}

document.cookie = "name=session; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

//   const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
//   const [key, value] = cookie.split("=");
//   acc[key] = value;
//   return acc;
// }, {});
// console.log(cookies.session); // "abc123"
