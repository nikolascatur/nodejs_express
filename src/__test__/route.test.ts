import app from "../app";
import request from "supertest";

describe("POST /register", () => {
  it("return status code 201 if first name is passed", async () => {
    const res = await request(app)
      .post("/register")
      .send({ firstName: "John" });

    expect(res.statusCode).toEqual(201);
  });

  it("returns bad request if firstname is missing", async () => {
    const res = await request(app).post("/register").send();
    expect(res.statusCode).toEqual(400);
  });

  it("get query name test", async () => {
    const response = await request(app).get("/").query({ name: "nikoo" });
    expect(response.text).toBe('{"message":"nikoo"}');
  });

  it("get url param ", async () => {
    const response = await request(app)
      .get("/hello/world")
      .query({ name: "World" });
    expect(response.body).toEqual({
      path: "/hello/world",
      originalUrl: "/hello/world?name=World",
      hostName: "127.0.0.1",
      protocol: "http",
    });
  });
});
