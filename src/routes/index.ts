import express, { NextFunction, Request, Response } from "express";
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

//path using regex
router.get("/regex/string/*.json", (req: Request, res: Response) => {
  res.send(`original Url : ${req.originalUrl}`);
});

//path using regex with number param
router.get("/regex/number/*(\\d+).json", (req: Request, res: Response) => {
  res.send(`url number : ${req.originalUrl}`);
});

//router parameter testing
router.get("/product/:id", (req: Request, res: Response) => {
  res.send(`param id ${req.params.id}`);
});

//router parameter with regex
router.get("/product/number/:id(\\d+)", (req: Request, res: Response) => {
  res.send(`param with number ${req.params.id}`);
});

//router function
router
  .route("/user")
  .get((req: Request, res: Response) => {
    res.send("Get User");
  })
  .post((req: Request, res: Response) => {
    res.send("Create user");
  })
  .put((req: Request, res: Response) => {
    res.send("update user");
  });

// midleware di dalam router
const midlewwareTest = (req: Request, res: Response, next: NextFunction) => {
  res.send("From midleware test");
  next();
};
router.use(midlewwareTest);

//request body in json form
router.use(express.json());
router.post("/json", (req: Request, res: Response) => {
  const name = req.body.name;
  res.json({
    hello: `Hello ${name}`,
  });
});
router.use(express.urlencoded({ extended: false }));
router.post("/form", (req: Request, res: Response) => {
  const name = req.body.name;
  res.json({
    hello: `Hello ${name}`,
  });
});

export default router;
