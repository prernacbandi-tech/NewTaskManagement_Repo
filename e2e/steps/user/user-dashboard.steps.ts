
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { UserDashboardPage } from '../../pages/user/userDashboardPage';

const { Given, When, Then } = createBdd();

Given('I am logged in as User', async ({ page }) => {
    await expect(page).not.toHaveURL(/\/Account\/Login/i);
});

When('I open the User Dashboard', async ({ page }) => {
    await new UserDashboardPage(page).openDashboard();
});

Then('I should see the total tasks', async ({ page }) => {
    await new UserDashboardPage(page).verifyTotalTasks();
});

Then('I should see tasks which are in progress', async ({ page }) => {
    await new UserDashboardPage(page).verifyInProgressTasks();
});

Then('I should see completed tasks', async ({ page }) => {
    await new UserDashboardPage(page).verifyCompletedTasks();
});

Then('I should see the on hold tasks', async ({ page }) => {
    await new UserDashboardPage(page).verifyOnHoldTasks();
});

When('I search for assigned task in search bar', async ({ page }) => {
    await new UserDashboardPage(page).searchAssignedTask('Password change');
});

Then('I should see searched task', async ({ page }) => {
    await new UserDashboardPage(page).verifySearchedTask('Password change');
});


Then('I should see the Dashboard link', async ({ page }) => {
    await new UserDashboardPage(page).verifyDashboardLink();
});

Then('I should see the My Tasks link', async ({ page }) => {
    await new UserDashboardPage(page).verifyMyTasksLink();
});

Then('I should see the Notifications link', async ({ page }) => {
    await new UserDashboardPage(page).verifyNotificationsLink();
});

Then('I should see the Payment Details link', async ({ page }) => {
    await new UserDashboardPage(page).verifyPaymentDetailsLink();
});

Then('I should see the Profile link', async ({ page }) => {
    await new UserDashboardPage(page).verifyProfileLink();
});

// Then('I should see the Settings link', async ({ page }) => {
//     await new UserDashboardPage(page).verifySettingsLink();
// });

Then('I should see the Logout button', async ({ page }) => {
    await new UserDashboardPage(page).verifyLogoutButton();
});

Then('I should see the theme button', async ({ page }) => {
    await new UserDashboardPage(page).verifyThemeButton();
});

Then('I should see the notification button', async ({ page }) => {
    await new UserDashboardPage(page).verifyNotificationButton();
});

Then('I should see the chat button', async ({ page }) => {
    await new UserDashboardPage(page).verifyChatButton();
});

Then('I should see the user profile button', async ({ page }) => {
    await new UserDashboardPage(page).verifyUserProfileButton();
});
