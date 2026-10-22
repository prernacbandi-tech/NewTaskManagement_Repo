import { createBdd } from 'playwright-bdd';
import { userProfilePage } from '../../pages/user/userProfilePage';
import { getPasswordChangeOtp } from '../../helpers/gmailOtp';

import { chromium } from '@playwright/test';
import path from 'path';

const { Given, When, Then } = createBdd();
let receivedOtp: string = '';


Given('I am already logged in as User', async ({ page }) => {
    await page.goto('/User/Dashboard');
});

When('I click on the Profile menu', async ({ page }) => {
    await new userProfilePage(page).clickProfileMenu();
});

Then('I should see the Profile page', async ({ page }) => {
    await new userProfilePage(page).verifyProfilePage();
});

Then('I should see the Personal Details section', async ({ page }) => {
    await new userProfilePage(page).verifyPersonalDetails();
});

When('I click on the Edit button', async ({ page }) => {
    await new userProfilePage(page).clickEditButton();
});

When('I edit the full name', async ({ page }) => {
    const updatedFullName = 'PrernaBandii';
    await new userProfilePage(page).editFullName(updatedFullName);

});

When('I edit the email address', async ({ page }) => {
    const updatedEmail = 'prerna.updated@example.com';
    await new userProfilePage(page).editEmail(updatedEmail);
});

When('I edit the phone number', async ({ page }) => {
    const updatedPhone = '9552313391';
    await new userProfilePage(page).editPhoneNumber(updatedPhone);
});

When('I click on the Save Changes button', async ({ page }) => {
    await new userProfilePage(page).clickSaveChanges();
});

Then('I should see the success message {string}', async ({ page }, message: string) => {
    await new userProfilePage(page).verifyProfileUpdateSuccess();
});

Then('The profile changes should be updated successfully', async ({ page }) => {
    await new userProfilePage(page).verifyUpdatedProfile();
});

//---------------------------------------------------------------------------


When('I enter the current password', async ({ page }) => {
    const password = 'Pass@123';
    await new userProfilePage(page).enterCurrentPassword(password);
});

When('I enter the new password', async ({ page }) => {
    const password = 'Test@123';
    await new userProfilePage(page).enterNewPassword(password);
});

When('I confirm the new password', async ({ page }) => {
    const password = 'Test@123';
    await new userProfilePage(page).confirmNewPassword(password);
});

When('I click on Send OTP to Email', async ({ page }) => {
    await new userProfilePage(page).clickSendOtp();
});

Then('I should see the OTP verification section', async ({ page }) => {
    await new userProfilePage(page).verifyOtpSection();
});

When('I open Gmail and get the password change OTP', async () => {
    const gmailContext = await chromium.launchPersistentContext(
        path.resolve('gmail-profile'),
        {
            headless: false,
            channel: 'chrome'
        }
    );

    try {
        const gmail = gmailContext.pages()[0]
            ?? await gmailContext.newPage();

        await gmail.goto('https://mail.google.com/mail/u/0/#inbox');

        receivedOtp = await getPasswordChangeOtp(gmail);
    } finally {
        await gmailContext.close();
    }
});

When('I enter the received OTP', async ({ page }) => {
    if (!receivedOtp) {
        throw new Error('OTP was not received from Gmail.');
    }

    await new userProfilePage(page).enterOtp(receivedOtp);
});

When('I click on Verify and Change Password', async ({ page }) => {
    await new userProfilePage(page).clickVerifyAndChangePassword();
});

Then('I should see the password changed successfully message', async ({ page }) => {
    await new userProfilePage(page).verifyPasswordChanged();
});