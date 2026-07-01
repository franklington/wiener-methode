import { describe, expect, it } from "vitest";
import { toShareRow } from "./emoji-share-row";

describe("toShareRow", () => {
  it("splits a row proportionally between the yes and no emoji", () => {
    expect(toShareRow(10, 10, "🚗", "🚙")).toBe("🚗" + "🚙".repeat(9));
  });

  it("rounds to the nearest icon", () => {
    expect(toShareRow(17, 50, "🚗", "🚙")).toBe("🚗".repeat(9) + "🚙".repeat(41)); // 0.17*50=8.5 -> 9
  });

  it("clamps 0% to all no-emoji", () => {
    expect(toShareRow(0, 5, "🚗", "🚙")).toBe("🚙".repeat(5));
  });

  it("clamps 100% to all yes-emoji", () => {
    expect(toShareRow(100, 5, "🚗", "🚙")).toBe("🚗".repeat(5));
  });

  it("rejects a non-positive totalIcons", () => {
    expect(() => toShareRow(50, 0, "🚗", "🚙")).toThrow(RangeError);
  });
});
