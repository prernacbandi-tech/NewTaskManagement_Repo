import { createBdd } from 'playwright-bdd';
import { AdminLogoutPage } from '../../pages/admin/adminLogoutPage';

const { Given, When, Then } = createBdd();

When('I navigate to the Admin Dashboard', async ({ page }) => {
    const logoutPage = new AdminLogoutPage(page);
    await logoutPage.openDashboard();
});

Then('the admin logout button should be visible', async ({ page }) => {
    const logoutPage = new AdminLogoutPage(page);
    await logoutPage.verifyLogoutButton();
});

When('I click the admin logout button', async ({ page }) => {
    const logoutPage = new AdminLogoutPage(page);
    await logoutPage.clickLogout();
});

Then('I should be redirected to login page', async ({ page }) => {
    const logoutPage = new AdminLogoutPage(page);
    await logoutPage.verifyLoginPage();
});