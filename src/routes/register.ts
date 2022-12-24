import express, { Request, Response } from "express";
import { createUser } from "../data/respository";

const registerRouter = express.Router();

registerRouter.post("/createuser", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  console.info(`username ${req.body.username} password ${req.body.password}`);
  if (!req.body.username || !req.body.password) {
    res
      .status(401)
      .json(
        `username or password empty ${req.body.username}  password ${req.body.password}`
      );
  }

  const result = await createUser(username, password);
  if (result) {
    res.status(200).json("USER has been created");
  } else {
    res.status(402).json("create user failed");
  }
});

export default registerRouter;
