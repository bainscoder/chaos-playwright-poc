import { test as base } from "@playwright/test";

import { HomePage } from "../pages/HomePage";

type Fixtures = {
  home: HomePage;
};

const test = base.extend<Fixtures>({
  home: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});

export default test;
export { expect } from "@playwright/test";