import app from "../app.js";
import request from "supertest";
import { describe, test, expect } from "@jest/globals";

// get weekly score and send back percentage
describe(`get weekly score and sends back percentage`, () => {
  test(`returns status code 200 and checks if response returns {
    sucess: true,
    payload: { percentage: total }`, async () => {
    const res = await request(app).get("/week/1");
    expect(res.statusCode).toBe(200);
  });
  test(`checks if response returns as { success: true, payload: result }`, async () => {
    const res = await request(app).get("/week/1");
    expect(res.body).toEqual({
      success: true,
      payload: { percentage: expect.any(Number) },
    });
  });
});

// post result by id

describe(`post score by week`, () => {
  test(`returns status code 200`, async () => {
    const res = await request(app)
      .post("/week/2")
      .send({ quizNumber: 3, correctAnswers: 4, weekNumber: 2 });
    expect(res.statusCode).toBe(200);
  });
  test(`checks if response returns as { quizNumber: 3, correctAnswers: 4, weekNumber: 2 }`, async () => {
    const res = await request(app).get("/week/2");
    expect(res.body).toEqual({ success: true, payload: expect.any(Object) });
  });
});
