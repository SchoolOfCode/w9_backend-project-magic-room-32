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
describe(`post diary entry with week number`, () => {
  test(`returns status code 200`, async () => {
    const res = await request(app)
      .post("/diary/3")
      .send({ diaryText: "I love the backend" });

    expect(res.statusCode).toBe(200);
  });
  test(`checks if response returns as { success: true, payload: await submitDiary(req.body) }`, async () => {
    const res = await request(app)
      .post("/diary/3")
      .send({ diaryText: "I love the backend" });

    expect(res.body).toEqual({ success: true, payload: expect.any(Object) });
  });
  test(`checks if response is of type json`, async () => {
    const res = await request(app)
      .post("/diary/3")
      .send({ diaryText: "I love the backend" });

    expect(res.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  // delete diary entry by week
  describe(`find diary entry with id and delete entry`, () => {
    test(`checks if status code is 200`, async () => {
      const res = await request(app).delete("/diary/2");
      expect(res.statusCode).toBe(200);
    });
    test(`checks if response returns as { success: true, payload: await deleteDiaryEntry(id) }`, async () => {
      const res = await request(app).delete("/diary/2");
      expect(res.body).toEqual({ success: true, payload: expect.any(Object) });
    });
  });
});
