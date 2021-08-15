import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const Auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1] || "";
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken;
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};

export default Auth;
