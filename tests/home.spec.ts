import { test, expect } from '@playwright/test';

test('should has title', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText(/home/i)).toBeVisible();
});
