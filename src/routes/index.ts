import express, { Request, Response } from "express";
import { request } from "http";

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

// to get query with two paramater
// exp: http://localhost:8000/?firstname=nikoo&lastname=catur
// {firstname: nikoo, lastname: catur}
router.get("/hello/param", (req: Request, res: Response) => {
  res.status(200).json({
    firstname: `${req.query.firstName}`,
    lastName: `${req.query.lastName}`,
  });
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

//router get header
router.get("/header", (req: Request, res: Response) => {
  const type = req.get("Accept");
  res.send(`Hello ${type}`);
});

//change header value
router.get("/header/change", (req: Request, res: Response) => {
  res
    .set({
      "X-Powered-By": "Nicolas Catur pandoyo",
      "X-Author": "Cetul Warrior",
    })
    .end();
});

//send response body html
router.get("/change/body", (req: Request, res: Response) => {
  res.set("Content-type", "text/html");
  res.send("<html><head><title>Hello html</title></head></html>");
});

// redirect to next page
router.get("/redirect", (req: Request, res: Response) => {
  res.redirect("/redirect/to-next-page");
});

//middleware to inject time now
router.get("/timenow", (req: Request, res: Response) => {
  res.send(`Hello, Today is ${req.requestTime}`);
});

export default router;
