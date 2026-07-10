import test from "../../fixtures/pageObject";
import { ChaosUtils } from "../../utils/chaosUtils";

test.describe("CPU Stress Chaos Tests", () => {
  test("Verify home page under CPU stress", async ({ home }) => {
    await home.navigateToHomePage();
    await home.verifyHomePageLoaded();

    ChaosUtils.applyChaos("cpu-stress.yaml");

    await ChaosUtils.wait(10);

    await home.navigateToHomePage();
    await home.verifyHomePageLoaded();

    ChaosUtils.deleteChaos("cpu-stress.yaml");
  });
});