import app from "../app.js";
import request from "supertest";
import { describe, test, expect } from "@jest/globals";

// get all by id
describe(`get diary entry by week number`, () => {
  test(`returns status code 200`, async () => {
    const res = await request(app).get("/diary/1");
    expect(res.statusCode).toBe(200);
  });
  test(`checks if response returns as {
    success: true,
    payload: await getDiaryEntry(Number(req.params.id)),
  }`, async () => {
    const res = await request(app).get("/diary/1");
    expect(res.body).toEqual({
      success: true,
      payload: expect.any(Array),
    });
  });
});

// post by week number

// delete diary entry by week
