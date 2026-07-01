import { expect, test } from "@playwright/test";

test.describe("chinese-cars-in-europe topic page", () => {
  test("shows the title, all 12 infographics, and every cited source", async ({ page }) => {
    await page.goto("/?topic=chinese-cars-in-europe");

    await expect(page.locator("h1")).toHaveText(
      "How did Chinese carmakers go from nowhere to 1 in every 10 cars sold in Europe?",
    );
    await expect(page.locator(".infographic")).toHaveCount(12);
    await expect(page.locator(".sources li")).toHaveCount(23);
  });

  test("every infographic caption's footnote link resolves to a listed source", async ({ page }) => {
    await page.goto("/?topic=chinese-cars-in-europe");

    const footnoteLinks = page.locator(".infographic sup a");
    const count = await footnoteLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i += 1) {
      const href = await footnoteLinks.nth(i).getAttribute("href");
      expect(href).toMatch(/^#source-/);
      const sourceId = href!.slice(1);
      await expect(page.locator(`#${sourceId}`)).toHaveCount(1);
    }
  });

  test("is reachable as the default topic when no slug is given", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toHaveText(
      "How did Chinese carmakers go from nowhere to 1 in every 10 cars sold in Europe?",
    );
  });
});
