import { createBdd } from 'playwright-bdd';

import { AdminLoginPage } from '../../pages/admin/adminLoginPage';

const { Given, When, Then } = createBdd();

Given('I am on the Admin login page', async ({ page }) => {

    const loginPage = new AdminLoginPage(page);

    await loginPage.openLoginPage();
});

When('I enter valid Admin credentials', async ({ page }) => {

    const loginPage = new AdminLoginPage(page);

    await loginPage.enterEmail('admin@taskmanagement.com');

    await loginPage.enterPassword('Admin@123');
});

When('I click on Login', async ({ page }) => {

    const loginPage = new AdminLoginPage(page);

    await loginPage.clickLogin();
});

Then('I should be logged in successfully', async ({ page }) => {

    await page.waitForURL('**/Admin/**');
});