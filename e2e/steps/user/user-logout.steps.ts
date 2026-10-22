import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { userLogoutPage } from '../../pages/user/userLogoutPage';

const { Given, When, Then } = createBdd();

Given('I have logged in as User', async ({ page }) => {
    await page.goto('/User/Dashboard', {
        waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveURL(/\/User\/Dashboard\/?$/);
});

When('I click on the Logout button', async ({ page }) => {
    const dashboardPage = new userLogoutPage(page);
    await dashboardPage.clickLogout();
});

Then('I should be redirected to the login page', async ({ page }) => {
    await expect(page).toHaveURL(/\/Account\/Login/i);
});