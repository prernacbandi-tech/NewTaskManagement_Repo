import { createBdd } from 'playwright-bdd';
import { AdminUsersPage } from '../../pages/admin/adminUsersPage';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

let adminUsersPage: AdminUsersPage;

When('I click on Users', async ({ page }) => {
    const usersPage = new AdminUsersPage(page);
    await usersPage.clickUsers();
});

Then('I should see Users page', async ({ page }) => {
    const usersPage = new AdminUsersPage(page);
    await usersPage.verifyUsersPage();
});

Then('I should see Total Users', async ({ page }) => {
    const usersPage = new AdminUsersPage(page);
    await usersPage.verifyTotalUsers();
});

Then('I should see Active Users', async ({ page }) => {
    const usersPage = new AdminUsersPage(page);
    await usersPage.verifyActiveUsers();
});

Then('I should see Inactive Users', async ({ page }) => {
    const usersPage = new AdminUsersPage(page);
    await usersPage.verifyInactiveUsers();
});

Then('I should see Administrators', async ({ page }) => {
    const usersPage = new AdminUsersPage(page);
    await usersPage.verifyAdministrators();
});

When('I click on User Actions', async ({ page }) => {
    const usersPage = new AdminUsersPage(page);
    await usersPage.clickUserActions();
});

Then('I should see user action options', async ({ page }) => {
    const usersPage = new AdminUsersPage(page);
    await usersPage.verifyUserActionOptions();
});

Then('I should see Manage User option', async ({ page }) => {
    const usersPage = new AdminUsersPage(page);
    await usersPage.verifyManageUserOption();
});

Then('I should see Activate User option', async ({ page }) => {
    const usersPage = new AdminUsersPage(page);
    await usersPage.verifyActivateUserOption();
});

When('I click on Manage User option', async ({ page }) => {
    await page.goto('/Admin/Users');

    const userRow = page.getByRole('row').filter({
        hasText: 'HatimSethiya'
    });

    await userRow.getByRole('button', {
        name: 'Open actions for HatimSethiya'
    }).click();

    await userRow.getByRole('menuitem', {
        name: 'Manage User',
        exact: true
    }).click();
});

Then('I should see Role dropdown', async ({ page }) => {
    adminUsersPage = new AdminUsersPage(page);
    await adminUsersPage.verifyRoleDropdown();
});

Then('I should see Save Changes button', async ({ page }) => {
    adminUsersPage = new AdminUsersPage(page);
    await adminUsersPage.verifySaveChangesButton();
});

Then('I should see Back to Users button', async ({ page }) => {
    adminUsersPage = new AdminUsersPage(page);
    await adminUsersPage.verifyBackToUsersButton();
});

Then('I should see Payment Details', async ({ page }) => {
    adminUsersPage = new AdminUsersPage(page);
    await adminUsersPage.verifyPaymentDetails();
});

Then('I should see Delete User button', async ({ page }) => {
    adminUsersPage = new AdminUsersPage(page);
    await adminUsersPage.verifyDeleteUserButton();
});