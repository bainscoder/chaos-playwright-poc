import { execSync } from "child_process";
import path from "path";

export class ChaosUtils {
  private static getChaosFile(fileName: string): string {
    return path.resolve(__dirname, "../../chaos", fileName);
  }

  static applyChaos(fileName: string): void {
    console.log(`Applying Chaos: ${fileName}`);

    execSync(`kubectl apply -f "${this.getChaosFile(fileName)}"`, {
      stdio: "inherit",
    });
  }

static deleteChaos(fileName: string): void {
  console.log(`Deleting Chaos: ${fileName}`);

  try {
    execSync(
      `kubectl delete -f "${ChaosUtils.getChaosFile(fileName)}" --ignore-not-found`,
      {
        stdio: "inherit",
      }
    );
  } catch (error) {
    console.warn(`Cleanup skipped for ${fileName}`);
  }
}

  // ================= CPU Stress =================

  static applyCpuStress(): void {
    this.applyChaos("cpu-stress.yaml");
  }

  static removeCpuStress(): void {
    this.deleteChaos("cpu-stress.yaml");
  }

  // ================= Memory Stress =================

  static applyMemoryStress(): void {
    this.applyChaos("memory-stress.yaml");
  }

  static removeMemoryStress(): void {
    this.deleteChaos("memory-stress.yaml");
  }

  // ================= Network Delay =================

  static applyNetworkDelay(): void {
    this.applyChaos("network-delay.yaml");
  }

  static removeNetworkDelay(): void {
    this.deleteChaos("network-delay.yaml");
  }

  // ================= Pod Kill =================

  static applyPodKill(): void {
    this.applyChaos("pod-kill.yaml");
  }

  static removePodKill(): void {
    this.deleteChaos("pod-kill.yaml");
  }

  // ================= Wait for Cart Service Recovery =================

static waitForCartServiceRecovery(): void {
  console.log("Waiting for Cart Service to recover...");

  const timeout = 120000;
  const interval = 5000;
  const start = Date.now();

  while (Date.now() - start < timeout) {
    try {
      const output = execSync(
        "kubectl get pods -l app=cartservice --no-headers",
        { encoding: "utf8" }
      ).trim();

      if (output.length > 0 && output.includes("Running")) {
        console.log("Cart Service recovered successfully.");
        return;
      }
    } catch {
      // No pod exists yet
    }

    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, interval);
  }

  throw new Error("Cart Service did not recover.");
}

  // ================= Common Wait =================

  static async wait(seconds: number): Promise<void> {
    return new Promise((resolve) =>
      setTimeout(resolve, seconds * 1000)
    );
  }
}