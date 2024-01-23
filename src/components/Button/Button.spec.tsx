import { test, expect } from "@playwright/experimental-ct-react";
import { Button } from ".";

test.use({ viewport: { width: 500, height: 500 } });

test("should work", async ({ mount }) => {
  const component = await mount(<Button text="Hello" />);
  await expect(component).toHaveScreenshot();
});
