import test from "../../fixtures/pageObject";
import { ChaosUtils } from "../../utils/chaosUtils";

test.describe("Business Resilience - CPU Stress", () => {

  test("Verify user can add product to cart during CPU stress", async ({
    home,
    product,
    cart,
  }) => {

    try {
      await home.navigateToHomePage();
      await home.verifyHomePageLoaded();

      ChaosUtils.applyNetworkDelay();

      await home.openFirstProduct();

      await product.verifyProductPageLoaded();

      await product.addProductToCart();

      await cart.verifyCartPageLoaded();

      await cart.verifyProductAdded();

    } finally {
      ChaosUtils.removeNetworkDelay();
    }

  });

});