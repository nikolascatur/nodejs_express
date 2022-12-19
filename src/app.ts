import express, { Application, NextFunction, Request, Response } from "express";
import router from "./routes";

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.info(`logger info ${req.method} ${req.originalUrl}`);
  next();
};

const addHeader = (req: Request, res: Response, next: NextFunction) => {
  res.set("X-powered-by", "nicolas catur");
  next();
};

const requestTimeMidleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.requestTime = Date.now();
  next();
};

const apikeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.query.apiKey) {
    next();
  } else {
    res.status(401).send("unautorized");
  }
};

const app: Application = express();
app.use(logger);
app.use(apikeyMiddleware);
app.use(addHeader);
app.use(requestTimeMidleware);

app.use(express.json());
app.use("/", router);

export default app;
