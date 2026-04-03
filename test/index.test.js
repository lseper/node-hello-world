import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../index.js";

describe("GET /ping", () => {
  it("returns { message: 'pong' }", async () => {
    const res = await request(app).get("/ping");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "pong" });
  });
});

describe("POST /increment", () => {
  it("returns { counter: 1 } on first call with status 200", async () => {
    const res = await request(app).post("/increment");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ counter: 1 });
  });

  it("returns incrementing values on successive calls", async () => {
    const res2 = await request(app).post("/increment");
    expect(res2.body).toEqual({ counter: 2 });

    const res3 = await request(app).post("/increment");
    expect(res3.body).toEqual({ counter: 3 });
  });
});
