import test from "../../fixtures/pageObject";
import { ChaosUtils } from "../../utils/chaosUtils";

test.describe("Memory Stress Chaos Tests", () => {

  test("Verify application under Memory Stress", async ({ home }) => {

    try {

      // Verify application before chaos
      await home.navigateToHomePage();
      await home.verifyHomePageLoaded();

      // Apply Memory Stress
      ChaosUtils.applyMemoryStress();

      await ChaosUtils.wait(10);

      // Verify application during chaos
      await home.navigateToHomePage();
      await home.verifyHomePageLoaded();

    } finally {

      // Cleanup
      ChaosUtils.removeMemoryStress();

    }

  });

});