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
