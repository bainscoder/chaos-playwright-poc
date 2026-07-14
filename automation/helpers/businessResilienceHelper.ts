import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";

type ChaosScenario = {
  applyChaos: () => void;
  removeChaos: () => void;
};

export async function runAddToCartScenario(
  home: HomePage,
  product: ProductPage,
  cart: CartPage,
  chaos: ChaosScenario
) {
  try {
    await home.navigateToHomePage();
    await home.verifyHomePageLoaded();

    chaos.applyChaos();

    await home.openFirstProduct();

    await product.verifyProductPageLoaded();

    await product.addProductToCart();

    await cart.verifyCartPageLoaded();

    await cart.verifyProductAdded();

  } finally {
    chaos.removeChaos();
  }
}