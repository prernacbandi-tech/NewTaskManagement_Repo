import { createBdd } from 'playwright-bdd';
import { userProfilePage } from '../../pages/user/userProfilePage';
import { getPasswordChangeOtp } from '../../helpers/gmailOtpHelper';
import { Page, expect } from '@playwright/test';

//import { chromium } from '@playwright/test';
//import * as path from 'node:path';

const { Given, When, Then } = createBdd();
let gmailPage: Page | undefined;
let receivedOtp = '';
// Add your test account credentials here.
const CURRENT_PASSWORD = 'Pass@123';
const NEW_PASSWORD = 'Test@123';

const GMAIL_EMAIL = 'prernacbandi@gmail.com';
const GMAIL_PASSWORD = 'Admin@123#';

// Helper to make sure Gmail page is available.
function getGmailPage(): Page {
    if (!gmailPage || gmailPage.isClosed()) {
        throw new Error('Gmail tab has not been opened.');
    }

    return gmailPage;
}


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


// --------------------------------------------------
// ENTER PASSWORD DETAILS AND REQUEST OTP
// --------------------------------------------------

When('I enter the current password', async ({ page }) => {
    await new userProfilePage(page).enterCurrentPassword(
        CURRENT_PASSWORD
    );
});

When('I enter the new password', async ({ page }) => {
    await new userProfilePage(page).enterNewPassword(
        NEW_PASSWORD
    );
});

When('I confirm the new password', async ({ page }) => {
    await new userProfilePage(page).confirmNewPassword(
        NEW_PASSWORD
    );
});

When('I click on Send OTP to Email', async ({ page }) => {
    await new userProfilePage(page).clickSendOtp();
});

Then('I should see the OTP verification section', async ({ page }) => {
    await new userProfilePage(page).verifyOtpSection();
});

// --------------------------------------------------
// OPEN GMAIL IN A NEW TAB
// --------------------------------------------------

When('I switch to Gmail tab', async ({ context }) => {
    gmailPage = await context.newPage();

    await gmailPage.goto('https://accounts.google.com/');
});

// --------------------------------------------------
// GMAIL LOGIN
// --------------------------------------------------

When('I enter my Gmail email address', async () => {
    const gmail = getGmailPage();

    const emailInput = gmail.getByRole('textbox', {
        name: /email or phone/i
    });

    await expect(emailInput).toBeVisible({
        timeout: 30000
    });

    await emailInput.fill(GMAIL_EMAIL);
});

When('I click on Gmail Next button', async () => {
    const gmail = getGmailPage();

    await gmail.getByRole('button', {
        name: /^next$/i
    }).click();

    await gmail.waitForTimeout(3000);

    if (gmail.isClosed()) {
        throw new Error('Gmail page was closed after clicking Next.');
    }

    console.log('Gmail URL after Next:', gmail.url());

    console.log(
        'Gmail page title:',
        await gmail.title()
    );

    console.log(
        'Gmail page text:',
        (await gmail.locator('body').innerText()).slice(0, 1500)
    );

    const visiblePassword = gmail.locator(
        'input[type="password"]:visible'
    );

    const passwordCount = await visiblePassword.count();

    console.log('Visible password fields:', passwordCount);

    if (passwordCount === 0) {
        throw new Error(
            'Gmail password field is not visible. Check the Gmail page text and URL printed above.'
        );
    }

    await expect(visiblePassword.first()).toBeVisible();
});

When('I enter my Gmail password', async () => {
    const gmail = getGmailPage();

    const passwordInput = gmail.locator(
        'input[type="password"]:visible:not([aria-hidden="true"])'
    );

    await expect(passwordInput).toBeVisible({
        timeout: 30000
    });

    await passwordInput.fill(GMAIL_PASSWORD);
});

When('I click on Gmail Sign in button', async () => {
    const gmail = getGmailPage();

    await gmail.getByRole('button', {
        name: /^(next|sign in)$/i
    }).click();
});

Then('I should see the Gmail inbox', async () => {
    const gmail = getGmailPage();

    await expect(
        gmail.getByRole('combobox', {
            name: /search mail/i
        })
    ).toBeVisible({ timeout: 60000 });
});

// --------------------------------------------------
// SEARCH OTP EMAIL
// --------------------------------------------------

When('I search for the password change OTP email', async () => {
    const gmail = getGmailPage();

    const searchBox = gmail.getByRole('combobox', {
        name: /search mail/i
    });

    await searchBox.fill(
        'subject:"TaskManager Password Change OTP"'
    );

    await searchBox.press('Enter');

    await expect(
        gmail.getByRole('link', {
            name: /TaskManager Password Change OTP/i
        }).first()
    ).toBeVisible({ timeout: 30000 });
});

// --------------------------------------------------
// RETRIEVE OTP FROM EMAIL
// --------------------------------------------------

When('I retrieve the OTP from the email', async () => {
    const gmail = getGmailPage();

    receivedOtp = await getPasswordChangeOtp(gmail);

    if (!/^\d{6}$/.test(receivedOtp)) {
        receivedOtp = '';

        throw new Error(
            'Could not retrieve a valid six-digit OTP from Gmail.'
        );
    }

    console.log('Password change OTP retrieved successfully.');
});

// --------------------------------------------------
// RETURN TO USER PROFILE AND VERIFY OTP
// --------------------------------------------------

When('I switch back to the User Profile tab', async ({ page }) => {
    await page.bringToFront();
});

When('I enter the received OTP', async ({ page }) => {
    if (!receivedOtp) {
        throw new Error(
            'OTP is empty. Retrieve the OTP from Gmail first.'
        );
    }

    await new userProfilePage(page).enterOtp(receivedOtp);
});

When('I click on Verify and Change Password', async ({ page }) => {
    await new userProfilePage(page).clickVerifyAndChangePassword();
});

Then(
    'I should see the password changed successfully message',
    async ({ page }) => {
        await new userProfilePage(page).verifyPasswordChanged();

        receivedOtp = '';

        // Close Gmail after successful password change.
        if (gmailPage && !gmailPage.isClosed()) {
            await gmailPage.close();
        }

        gmailPage = undefined;
    }
);