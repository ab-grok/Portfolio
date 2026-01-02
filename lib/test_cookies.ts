// "use client";

// type cookie = {
//   name: string;
//   expires?: Date;
//   path: string;
//   domain: string;
//   sameSite: "lax" | "strict" | "none";
// };

// export default function setCookie(cookie: cookie) {
//   const { name, expires: e, path, domain, sameSite } = cookie;
//   const expires = new Date();

//   document.cookie = "name=session; expires="+expires+"; path=/; "+
//   "domain=thissite.com; secure=true; samesite=strict;";

//   const cookies = document.cookie.split("; ");
//   const cookieObject = cookies.reduce<Record<string, string>>(
//     (acc, cookie, i) => {
//       const [key, value] = cookie.split("=");
//       acc[key] = value;
//       return acc;
//     },
//     {},
//   );
// }

// //   const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
// //   const [key, value] = cookie.split("=");
// //   acc[key] = value;
// //   return acc;
// // }, {});
// // console.log(cookies.session); // "abc123"
