import { describe, expect, it } from "vitest";
import { toPictogramRow } from "./emoji-pictogram";

describe("toPictogramRow", () => {
  it("repeats the emoji once per unit of value", () => {
    expect(toPictogramRow(250, 100, "🙂")).toBe("🙂🙂🙂");
  });

  it("rounds to the nearest whole unit", () => {
    expect(toPictogramRow(140, 100, "🙂")).toBe("🙂");
    expect(toPictogramRow(160, 100, "🙂")).toBe("🙂🙂");
  });

  it("clamps negative values to zero units", () => {
    expect(toPictogramRow(-50, 100, "🙂")).toBe("");
  });

  it("caps the row at maxUnits so a page can't be flooded with glyphs", () => {
    expect(toPictogramRow(10_000, 1, "🙂", 5)).toBe("🙂🙂🙂🙂🙂");
  });

  it("rejects a non-positive unitValue", () => {
    expect(() => toPictogramRow(10, 0, "🙂")).toThrow(RangeError);
  });

  it("rejects a non-positive maxUnits", () => {
    expect(() => toPictogramRow(10, 1, "🙂", 0)).toThrow(RangeError);
  });
});
