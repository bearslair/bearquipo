import HTTPStatus from "http-status";
import { Request, Response } from "express";
import { Details } from "express-useragent";

import { catcher } from "@utils/catch";
import TokenService from "@modules/v1/tokens/token.service";

import AuthService from "./auth.service";
import { cookieOptions } from "@utils/cookieOptions";

const AuthController = {
  /**
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  signup: catcher(async function (req: Request, res: Response): Promise<void> {
    const remoteAddress = req.socket.remoteAddress || "";
    const userAgent = req.useragent || ({} as Details);

    console.log(req.body);
    await AuthService.createUser(req.body, remoteAddress, userAgent);

    res.status(HTTPStatus.CREATED).json({ message: "Account was successfuly created." });
  }),

  /**
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  signin: catcher(async function (req: Request, res: Response): Promise<void> {
    const user = await AuthService.verifyUser(req.body);
    const userAgent = req.useragent || ({} as Details);
    const token = await TokenService.createAuthToken(user, userAgent);

    res.cookie("bq_cookie_dev", token.token, cookieOptions(token.expires));
    res.status(HTTPStatus.OK).json({ message: "You are signed in." });
  }),
};

export default AuthController;
