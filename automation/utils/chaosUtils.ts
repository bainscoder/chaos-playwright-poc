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

    execSync(`kubectl delete -f "${this.getChaosFile(fileName)}"`, {
      stdio: "inherit",
    });
  }

  static async wait(seconds: number): Promise<void> {
    return new Promise((resolve) =>
      setTimeout(resolve, seconds * 1000)
    );
  }
}