
import { Page, expect } from '@playwright/test';

export async function getPasswordChangeOtp(
    gmail: Page
): Promise<string> {

    // Step 1: Open Gmail inbox
    await gmail.goto(
        'https://mail.google.com/mail/u/0/#inbox'
    );

    // Step 2: Wait until Gmail inbox is loaded
    await expect(
        gmail.getByRole('main')
    ).toBeVisible({ timeout: 30000 });

    // Step 3: Find the password change OTP email
    const otpEmail = gmail.getByRole('link', {
        name: /TaskManager Password Change OTP/i
    }).first();

    await expect(otpEmail).toBeVisible({
        timeout: 30000
    });

    // Step 4: Open the OTP email
    await otpEmail.click();

    // Step 5: Read the opened email content
    const emailBody = await gmail.locator('body').innerText();

    // Step 6: Extract the 6-digit OTP
    const otpMatch = emailBody.match(
        /(?:OTP|verification code|one[- ]time password)[^\d]{0,40}(\d{6})/i
    );

    // Step 7: Validate whether OTP was found
    if (!otpMatch) {
        throw new Error(
            'Password change OTP not found. Please check the email subject and message content.'
        );
    }

    // Step 8: Return the extracted OTP
    return otpMatch[1];
}
