import express, { Request, Response } from "express";

const router = express.Router();

router.post("/register", (req: Request, res: Response) => {
  if (!req.body.firstName) {
    res.status(400).json("you nedd to pass firstName");
  }
  res.status(201).json({ message: "user has been created" });
});

// to get query from request
// exp: http://localhost:8000/?name=nikoo
// { message: "nikoo"}
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: `${req.query.name}` });
});

// send request url data
router.get("/hello/world", (req: Request, res: Response) => {
  res.status(200).json({
    path: req.path,
    originalUrl: req.originalUrl,
    hostName: req.hostname,
    protocol: req.protocol,
  });
});

export default router;
