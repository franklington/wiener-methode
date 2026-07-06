import { expect, test } from "@playwright/test";

test.describe("pfandsystem-austria topic page", () => {
  test("shows the title, all 8 infographics, and every cited source", async ({ page }) => {
    await page.goto("/?topic=pfandsystem-austria");

    await expect(page.locator("h1")).toHaveText(
      "Austria brought back the bottle deposit - but not the reuse it replaced",
    );
    await expect(page.locator(".infographic")).toHaveCount(8);
    await expect(page.locator(".sources li")).toHaveCount(10);
  });

  test("every infographic caption's footnote link resolves to a listed source", async ({ page }) => {
    await page.goto("/?topic=pfandsystem-austria");

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
});
