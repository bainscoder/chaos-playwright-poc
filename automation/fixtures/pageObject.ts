import { test as base } from "@playwright/test";

import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";

type Fixtures = {
  home: HomePage;
  product: ProductPage;
  cart: CartPage; 
};

const test = base.extend<Fixtures>({
  home: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  product: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },
  cart: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
});

export default test;
export { expect } from "@playwright/test";