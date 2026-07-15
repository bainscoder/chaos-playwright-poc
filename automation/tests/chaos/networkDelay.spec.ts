import test from "../../fixtures/pageObject";
import { ChaosUtils } from "../../utils/chaosUtils";

test.describe("Network Delay Chaos Tests", () => {
  test.skip("Verify application under Network Delay", async ({ home }) => {
    try {
      await home.navigateToHomePage();
      await home.verifyHomePageLoaded();

      ChaosUtils.applyNetworkDelay();

      await ChaosUtils.wait(10);

      await home.navigateToHomePage();
      await home.verifyHomePageLoaded();
    } finally {
      ChaosUtils.removeNetworkDelay();
    }
  });
});