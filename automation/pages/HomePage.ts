import { Page, Locator, expect } from "@playwright/test";
import { clickWebElement } from "../utils/commonUtils";

export class HomePage {
  private readonly page: Page;

  // Header
  private readonly logo: Locator;
  private readonly currencyDropdown: Locator;
  private readonly cartIcon: Locator;

  // Home Page
  private readonly hotProductsHeading: Locator;
  private readonly productCards: Locator;
  private readonly productNames: Locator;
  private readonly productPrices: Locator;

  constructor(page: Page) {
    this.page = page;

    // Update these locators
    this.logo = page.locator(".top-left-logo");
    this.currencyDropdown = page.locator("[name='currency_code']");
    this.cartIcon = page.locator("[title='Cart']");

    this.hotProductsHeading = page.locator("h3:has-text('Hot Products')");
    this.productCards = page.locator(".hot-product-card");
    this.productNames = page.locator(".hot-product-card-name");
    this.productPrices = page.locator(".hot-product-card-price");
  }

  async navigateToHomePage() {
    await this.page.goto("/");
  }

  async verifyHomePageLoaded() {
    await expect(this.logo).toBeVisible();
    await expect(this.hotProductsHeading).toBeVisible();
  }

  async verifyLogoDisplayed() {
    await expect(this.logo).toBeVisible();
  }

  async verifyCurrencyDropdownDisplayed() {
    await expect(this.currencyDropdown).toBeVisible();
  }

  async verifyCartIconDisplayed() {
    await expect(this.cartIcon).toBeVisible();
  }

  async verifyProductsDisplayed() {
    await expect(this.productCards.first()).toBeVisible();

    const count = await this.productCards.count();

    expect(count).toBeGreaterThan(0);
  }

  async verifyProductNamesDisplayed() {
    await expect(this.productNames.first()).toBeVisible();
  }

  async verifyProductPricesDisplayed() {
    await expect(this.productPrices.first()).toBeVisible();
  }

  async openProduct(index: number) {
    await clickWebElement(this.productCards.nth(index));
  }

  async openFirstProduct() {
    await clickWebElement(this.productCards.first());
  }
}