import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
require("dotenv").config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "";

const Auth = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization;
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    const token = authorization.split(" ")[1];
    jwt.verify(token, ACCESS_TOKEN_SECRET, (error) => {
      if (error) {
        res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export default Auth;
