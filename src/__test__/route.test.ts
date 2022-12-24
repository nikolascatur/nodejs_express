import app from "../app";
import request from "supertest";

describe("POST /register", () => {
  it("test create user", async () => {
    const res = await request(app)
      .post("/createuser")
      .set("Content-Type", "application/json")
      .send({ username: "nicolas", password: "123456" });

    expect(res.statusCode).toEqual(200);
  });
  // it("return status code 201 if first name is passed", async () => {
  //   const res = await request(app)
  //     .post("/register")
  //     .query({ apiKey: "123" })
  //     .send({ firstName: "John" });

  //   expect(res.statusCode).toEqual(201);
  // });

  // it("returns bad request if firstname is missing", async () => {
  //   const res = await request(app)
  //     .post("/register")
  //     .query({ apiKey: "123" })
  //     .send();
  //   expect(res.statusCode).toEqual(400);
  // });

  // it("get query name test", async () => {
  //   const response = await request(app)
  //     .get("/")
  //     .query({ name: "nikoo", apiKey: "123" });
  //   expect(response.text).toBe('{"message":"nikoo"}');
  // });

  // it("get query two paramter", async () => {
  //   const response = await request(app)
  //     .get("/hello/param")
  //     .query({ firstName: "nikoo", lastName: "catur", apiKey: "123" });
  //   expect(response.text).toBe(`{\"firstname\":"nikoo","lastName":"catur"}`);
  // });

  // it("get url param ", async () => {
  //   const response = await request(app)
  //     .get("/hello/world")
  //     .query({ name: "World", apiKey: "123" });
  //   expect(response.body).toEqual({
  //     path: "/hello/world",
  //     originalUrl: "/hello/world?name=World&apiKey=123",
  //     hostName: "127.0.0.1",
  //     protocol: "http",
  //   });
  // });

  // it("get type header ", async () => {
  //   const response = await request(app)
  //     .get("/header")
  //     .set("Accept", "text/plain")
  //     .query({ apiKey: "123" });

  //   expect(response.text).toBe("Hello text/plain");
  // });

  // it("test change header ", async () => {
  //   const response = await request(app)
  //     .get("/header/change")
  //     .query({ apiKey: "123" });
  //   expect(response.get("x-powered-by")).toBe("Nicolas Catur pandoyo");
  //   expect(response.get("x-author")).toBe("Cetul Warrior");
  // });

  // it("test return set body", async () => {
  //   const response = await request(app)
  //     .get("/change/body")
  //     .query({ apiKey: "123" });
  //   expect(response.get("content-type")).toBe("text/html; charset=utf-8");
  //   expect(response.text).toBe(
  //     "<html><head><title>Hello html</title></head></html>"
  //   );
  // });

  // it("redirect to next page", async () => {
  //   const response = await request(app)
  //     .get("/redirect")
  //     .query({ apiKey: "123" });
  //   expect(response.get("location")).toBe("/redirect/to-next-page");
  // });

  // it("test middleware ", async () => {
  //   const response = await request(app).get("/").query({ apiKey: "123" });
  //   expect(response.get("x-powered-by")).toBe("nicolas catur");
  // });

  // it("Apikey middleware test", async () => {
  //   const response = await request(app).get("/");
  //   expect(response.status).toBe(401);
  // });

  // it("test Inject time in body", async () => {
  //   const response = await request(app)
  //     .get("/timenow")
  //     .query({ apiKey: "123" });
  //   expect(response.text).toContain("Hello, Today is");
  //   console.info(response.text);
  // });

  // it("test routing dynamix regex", async () => {
  //   console.info("teessssttt");
  //   console.info(`${process.env.MY_SQL_DB_HOST}`);
  //   const response = await request(app)
  //     .get("/regex/string/hahaha.json")
  //     .query({ apiKey: "123" });
  //   expect(response.text).toContain("original Url :");
  //   console.info(response.text);
  // });

  // it("test request body json", async () => {
  //   const response = await request(app)
  //     .post("/json")
  //     .set("Content-Type", "application/json")
  //     .send({ name: "World" });

  //   expect(response.body).toEqual({
  //     hello: `Hello World`,
  //   });
  // });
  // it("test request form ", async () => {
  //   const response = await request(app)
  //     .post("/form")
  //     .set("Content-type", "application/x-www-form-urlencoded")
  //     .send("name=World");
  //   expect(response.body).toEqual({
  //     hello: `Hello World`,
  //   });
  // });
});
