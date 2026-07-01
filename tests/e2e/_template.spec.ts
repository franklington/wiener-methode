import { expect, test } from "@playwright/test";

// REPLACE: copy this spec alongside every new topic page and adapt the
// assertions to that topic's own sections and sources. Every topic page
// must have a passing spec like this before it's considered done.
test.describe("_template topic page", () => {
  test("shows a title, at least one infographic, and a numbered source list", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator(".infographic")).toHaveCount(1);
    await expect(page.locator(".sources li")).toHaveCount(1);
  });

  test("every infographic caption's footnote link resolves to a listed source", async ({ page }) => {
    await page.goto("/");

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
