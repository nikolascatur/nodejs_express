import express, { Request, Response } from "express";

const router = express.Router();

router.post("/register", (req: Request, res: Response) => {
  if (!req.body.firstName) {
    res.status(400).json("you nedd to pass firstName");
  }
  res.status(201).json({ message: "user has been created" });
});

// to get query from request
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: `${req.query.name}` });
});

export default router;
