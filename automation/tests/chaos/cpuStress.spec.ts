import test from "../../fixtures/pageObject";
import { ChaosUtils } from "../../utils/chaosUtils";

test.describe("CPU Stress Chaos Tests", () => {

  test("Verify application under CPU Stress", async ({ home }) => {

    try {

      // Verify application before chaos
      await home.navigateToHomePage();
      await home.verifyHomePageLoaded();

      // Inject chaos
      ChaosUtils.applyChaos("cpu-stress.yaml");

      // Wait for injection
      await ChaosUtils.wait(10);

      // Verify application during chaos
      await home.navigateToHomePage();
      await home.verifyHomePageLoaded();

    } finally {

      // Cleanup
      ChaosUtils.deleteChaos("cpu-stress.yaml");

    }

  });

});