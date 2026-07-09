import test from "../fixtures/pageObject";

test.describe("Home Page Test Cases", () => {

  test("HP_001 - Verify Home Page loads successfully", async ({ home }) => {
    await home.navigateToHomePage();
    await home.verifyHomePageLoaded();
  });

  test("HP_002 - Verify Logo is displayed", async ({ home }) => {
    await home.navigateToHomePage();
    await home.verifyLogoDisplayed();
  });

  test("HP_003 - Verify Currency dropdown is displayed", async ({ home }) => {
    await home.navigateToHomePage();
    await home.verifyCurrencyDropdownDisplayed();
  });

  test("HP_004 - Verify Cart icon is displayed", async ({ home }) => {
    await home.navigateToHomePage();
    await home.verifyCartIconDisplayed();
  });

  test("HP_005 - Verify products are displayed", async ({ home }) => {
    await home.navigateToHomePage();
    await home.verifyProductsDisplayed();
  });

  test("HP_006 - Verify product names are displayed", async ({ home }) => {
    await home.navigateToHomePage();
    await home.verifyProductNamesDisplayed();
  });

  test("HP_007 - Verify product prices are displayed", async ({ home }) => {
    await home.navigateToHomePage();
    await home.verifyProductPricesDisplayed();
  });

  test("HP_008 - Verify user can open the first product", async ({ home }) => {
    await home.navigateToHomePage();
    await home.openFirstProduct();
  });

});