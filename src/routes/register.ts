import express, { Request, Response } from "express";
import { createUser, findUser } from "../data/respository";

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

registerRouter.get("/user", async (req: Request, res: Response) => {
  if (!req.query.username) {
    res.status(400).json(`Username not found`);
  }

  const username = req.query.username;
  const result = await findUser(`${username}`);
  console.info(`username ${username}  resulttt ${result}`);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(401).json("Error calling user");
  }
});

export default registerRouter;
