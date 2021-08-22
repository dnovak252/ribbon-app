import { Request, Response } from "express";
import UserService from "../../service/UserService";
import { stringify, v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { exists } from "fs";
import { UserAttributes } from "../../models/UserModel";

require("dotenv").config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "";

export class UserController {
  private service: UserService = new UserService();

  GetAllUsers = async (req: Request, res: Response) => {
    const result = await this.service.GetAllUsers();
    if (result) return res.status(200).json(result);

    return res.status(404);
  };

  GetSingleUser = async (req: Request, res: Response) => {
    const result = await this.service.GetUserById(req.params.id);
    if (result) return res.status(200).json(result);

    return res.status(404);
  };

  GetSingleUserByUsername = async (req: Request, res: Response) => {
    const result = await this.service.GetUserByUsername(req.params.id);
    if (result) return res.status(200).json(result);

    return res.status(404);
  };

  UserSignUp = async (req: Request, res: Response) => {
    const userId = uuidv4();
    const saltRounds = 10;
    console.log(req.body);
    const hashPassword = await bcrypt.hash(req.body.Password, saltRounds);

    const usernameExists = await this.service.GetUserByUsername(
      req.body.Username
    );
    const emailExists = await this.service.GetUserByEmail(req.body.Email);

    const user = {
      Id: userId,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Email: req.body.Email,
      Username: req.body.Username,
      Password: hashPassword,
      Admin: req.body.Admin,
    };

    if (usernameExists || emailExists) {
      res.status(409).json({
        message: "Username or email already exists.",
      });
    } else {
      try {
        const result = await this.service.CreateUser(user);
        res.status(200).json({
          message: "User ${user.Username} created succesfully",
          user: {
            id: result.Id,
            username: result.Username,
            email: result.Email,
          },
        });
      } catch (error) {
        res.sendStatus(500);
      }
    }
  };

  UserLogin = async (req: Request, res: Response) => {
    const body = req.body;

    const userLogin = await this.service.GetUserByUsername(body.Username);
    console.log(userLogin);
    if (userLogin) {
      const correctPassword = await bcrypt.compare(
        body.Password,
        userLogin.Password
      );
      if (!correctPassword) {
        res.status(401).json({ error: "Invalid password" });
      } else {
        const userToken = {
          id: userLogin.Id,
          username: userLogin.Username,
        };
        const accessToken = jwt.sign(userToken, ACCESS_TOKEN_SECRET, {
          expiresIn: "2h",
        });
        res.status(200).send({
          message: "${userLogin.Username} succesfully logged in",
          user: {
            id: userLogin.Id,
            username: userLogin.Username,
          },
          accessToken,
        });
      }
    } else {
      res.status(401).json({ error: "Invalid username." });
    }
  };
}
