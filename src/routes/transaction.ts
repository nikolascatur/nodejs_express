import express, { Request, Response } from "express";
import { addBalance, transferBalance } from "../data/respository";

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

transactionRoutes.post("/transfer", async (req: Request, res: Response) => {
  const src = req.body.source;
  const dest = req.body.destination;
  const nominal = req.body.nominal;
  if (!req.body.source || !req.body.destination || !req.body.nominal) {
    res.status(500).json("Input body kosong");
  }
  const result = await transferBalance(src, dest, nominal);
  if (result) {
    res.status(200).json("Transfer berhasil");
  } else {
    res.status(501).json("transfer gagal");
  }
});

export default transactionRoutes;
