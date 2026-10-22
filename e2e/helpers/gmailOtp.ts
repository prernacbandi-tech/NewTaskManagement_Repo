import { Page, expect } from '@playwright/test';

export async function getPasswordChangeOtp(gmail: Page): Promise<string> {
    await gmail.goto('https://mail.google.com/mail/u/0/#inbox');

    const email = gmail.getByRole('link', {
        name: /TaskManager Password Change OTP/i
    }).first();

    await expect(email).toBeVisible({ timeout: 30000 });
    await email.click();

    const body = await gmail.locator('body').innerText();
    const otp = body.match(/\b\d{6}\b/);

    if (!otp) {
        throw new Error('Password change OTP not found in Gmail.');
    }

    return otp[0];
}