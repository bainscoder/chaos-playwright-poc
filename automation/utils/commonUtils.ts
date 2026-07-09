import { Locator, expect } from "@playwright/test";

export async function clickWebElement(locator: Locator) {
  await expect(locator).toBeVisible();
  await locator.click();
}

export async function inputField(locator: Locator, value: string) {
  await expect(locator).toBeVisible();
  await locator.fill(value);
}

export async function verifyElement(locator: Locator) {
  await expect(locator).toBeVisible();
}

export async function verifyText(locator: Locator, text: string) {
  await expect(locator).toContainText(text);
}