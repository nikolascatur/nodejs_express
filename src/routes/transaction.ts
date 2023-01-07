import express, { Request, Response } from "express";
import { addBalance } from "../data/respository";

const transactionRoutes = express.Router();

transactionRoutes.post("/addbalance", async (req: Request, res: Response) => {
  const balance = req.body.balance;
  const username = req.body.username;

  if (!req.body.balance || !req.body.username) {
    res.status(500).json("Input body kosong");
  }
  const result = await addBalance(username, balance);
  if (result) {
    res.status(200).json("balance has added");
  } else {
    res.status(501).json("adding balance failed");
  }
});

export default transactionRoutes;
