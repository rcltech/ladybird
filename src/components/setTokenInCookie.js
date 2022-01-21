import Cookies from "universal-cookie";

export function setTokenInCookie(token) {
  const cookies = new Cookies();

  const cookieDomain = process.env.REACT_APP_COOKIE_DOMAIN;

  cookies.set("RCTC_USER", token, {
    path: "/",
    domain: cookieDomain,
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 14, // 2 weeks
  });
}
