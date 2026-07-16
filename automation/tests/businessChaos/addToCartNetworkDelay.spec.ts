import test from "../../fixtures/pageObject";
import { ChaosUtils } from "../../utils/chaosUtils";

test.describe("Business Resilience - CPU Stress", () => {

  test("Verify user can add product to cart during CPU stress", async ({
    home,
    product,
    cart,
  }) => {

    // try {
    //   await home.navigateToHomePage();
    //   await home.verifyHomePageLoaded();

    //   ChaosUtils.applyNetworkDelay();
    //   // Allow Chaos Mesh to inject the network delay
    //   await ChaosUtils.wait(5);

    //   await home.openFirstProduct();

    //   await product.verifyProductPageLoaded();

    //   await product.addProductToCart();

    //   await cart.verifyCartPageLoaded();

    //   await cart.verifyProductAdded();

    // } finally {
    //   ChaosUtils.removeNetworkDelay();
    // }

try {
console.log("Step 1 - Navigate Home");
await home.navigateToHomePage();

console.log("Step 2 - Verify Home");
await home.verifyHomePageLoaded();

console.log("Step 3 - Apply Network Delay");
ChaosUtils.applyNetworkDelay();

console.log("Step 4 - Wait for Chaos Injection");
await ChaosUtils.wait(5);

console.log("Step 5 - Open Product");
await home.openFirstProduct();

console.log("Step 6 - Product Page Loaded");
await product.verifyProductPageLoaded();

console.log("Step 7 - Add to Cart");
await product.addProductToCart();

console.log("Step 8 - Cart Loaded");
await cart.verifyCartPageLoaded();

// console.log("Step 9 - Cleanup");
// ChaosUtils.removeNetworkDelay();
await cart.verifyProductAdded();

} finally {
console.log("Step 9 - Cleanup");  
ChaosUtils.removeNetworkDelay();
console.log("Step 10 - Cleanup Finished");
}

  });

});