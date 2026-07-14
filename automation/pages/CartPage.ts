import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
  private readonly page: Page;

  private readonly cartHeading: Locator;
  private readonly cartItems: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartHeading = page.getByRole("heading", { name: /Cart/i });
    this.cartItems = page.locator(".cart-summary-item-row").first();
  }

  async verifyCartPageLoaded() {
    await expect(this.cartHeading).toBeVisible();
  }

  async verifyProductAdded() {
    await expect(this.cartItems.first()).toBeVisible();
  }
}