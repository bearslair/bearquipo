import { CookieOptions } from "express";

import config from "@config/config";

export const cookieOptions = (expires: moment.Moment): CookieOptions => ({
  httpOnly: true,
  path: "/",
  sameSite: "lax",
  domain: config.domain,
  secure: config.env === "production" ? true : false,
  maxAge: expires.valueOf(),
});
