import { describe, expect, it } from "vitest";
import { renderRvmInfrastructure } from "./rvm-infrastructure";

describe("renderRvmInfrastructure", () => {
  it("renders one robot per 200 machines", () => {
    const html = renderRvmInfrastructure();
    expect(html).toContain("🤖".repeat(32)); // 6,400 / 200 = 32
  });

  it("states the share returned via machine", () => {
    const html = renderRvmInfrastructure();
    expect(html).toContain("98%");
  });

  it("links its caption back to the cited source", () => {
    const html = renderRvmInfrastructure();
    expect(html).toContain('href="#source-recycling-pfand-year-one"');
  });
});
