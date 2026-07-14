import test from "../../fixtures/pageObject";
import { expect } from "@playwright/test";
import { ChaosUtils } from "../../utils/chaosUtils";

test.describe("Business Resilience - Pod Kill", () => {
  test.setTimeout(180000);

  test("Verify user can add product to cart after Pod recovery", async ({
    home,
    product,
    cart,
    page,
  }) => {
    try {
      // Verify application before chaos
      await home.navigateToHomePage();
      await home.verifyHomePageLoaded();

      // Kill the cartservice pod
      ChaosUtils.applyPodKill();

      // Wait for Kubernetes to recreate the pod
      ChaosUtils.waitForCartServiceRecovery();

      // Wait until the application is healthy again
      await expect(async () => {
        await page.reload();
        await home.verifyHomePageLoaded();
      }).toPass({
        timeout: 120000,
        intervals: [3000],
      });

      // Business flow after recovery
      await home.openFirstProduct();

      await product.verifyProductPageLoaded();

      await product.addProductToCart();

      await cart.verifyCartPageLoaded();

      await cart.verifyProductAdded();

    } finally {
      ChaosUtils.removePodKill();
    }
  });
});