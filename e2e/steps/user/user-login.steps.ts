import { createBdd } from 'playwright-bdd';
import { UserLoginPage } from '../../pages/user/userLoginPage';

const { Given, When, Then } = createBdd();

Given('I am on the user login page', async ({ page }) => {
    const loginPage = new UserLoginPage(page);
    await loginPage.openUserLoginPage();
});

When('I enter valid user email address', async ({ page }) => {
    const loginPage = new UserLoginPage(page);
    await loginPage.enterUserEmail('prernacbandi@gmail.com');
});

When('I enter valid user password', async ({ page }) => {
    const loginPage = new UserLoginPage(page);
    await loginPage.enterUserPassword('Pass@123');
});

When('I click on Sign in button', async ({ page }) => {
    const loginPage = new UserLoginPage(page);
    await loginPage.clickSignIn();
});

Then('I should be logged in', async ({ page }) => {
    const loginPage = new UserLoginPage(page);
    await loginPage.verifyLoginSuccessful();
});