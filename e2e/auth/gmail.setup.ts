import { test as setup, expect } from '@playwright/test';

setup('Login to Gmail and save session', async ({ page }) => {
    await page.goto('https://mail.google.com/');

    // Gmail मध्ये login कर
    // Email आणि password manually enter कर
    // Google verification मागितल्यास ती पूर्ण कर

    await expect(page.getByRole('button', {
        name: /Compose/i
    })).toBeVisible({ timeout: 120000 });

    await page.context().storageState({
        path: 'playwright/.auth/gmail.json'
    });
});