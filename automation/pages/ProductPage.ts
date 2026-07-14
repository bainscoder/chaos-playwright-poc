import { Page, Locator, expect } from "@playwright/test";
import { clickWebElement } from "../utils/commonUtils";

export class ProductPage {
  private readonly page: Page;

  private readonly productTitle: Locator;
  private readonly productPrice: Locator;
  private readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productTitle = page.locator("h2").first();
    this.productPrice = page.locator("p.product-price");
    this.addToCartButton = page.getByRole("button", { name: "Add To Cart" });
  }

  async verifyProductPageLoaded() {
    await expect(this.productTitle).toBeVisible();
    await expect(this.productPrice).toBeVisible();
    await expect(this.addToCartButton).toBeVisible();
  }

  async addProductToCart() {
    await clickWebElement(this.addToCartButton);
  }
}