import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { userNotificationPage } from '../../pages/user/userNotificationPage';

const { Given, When, Then } = createBdd();

Given('I am logged in as a User', async ({ page }) => {
    await page.goto('/User/Dashboard');
    await expect(page).toHaveURL(/\/User\/Dashboard/);
});;

When('I click on the Notifications menu', async ({ page }) => {
    //console.log('Before clicking Notifications');

    await new userNotificationPage(page).clickNotifications();

    //console.log('After clicking Notifications');
});

Then('I should see the Notifications page', async ({ page }) => {
    await new userNotificationPage(page).verifyNotifications();
});

When('I click on the new task assignment in the inbox', async ({ page }) => {
    await new userNotificationPage(page).clickTaskAssignment();
});

Then('I should see the New Task Assignment page', async ({ page }) => {
    await new userNotificationPage(page).verifyTaskAssignment();
});

When('I click on the Back to Notification button', async ({ page }) => {
    await new userNotificationPage(page).clickBack();
});

Then('I should return to the Notifications page', async ({ page }) => {
    await new userNotificationPage(page).verifyNotifications();
});

When('I click on the Accept button', async ({ page }) => {
    await new userNotificationPage(page).clickAccept();
});

Then('The task assignment status should be Accepted in the inbox', async ({ page }) => {
    await new userNotificationPage(page).verifyStatus('Accepted');
});

When('I click on the Reject button', async ({ page }) => {
    await new userNotificationPage(page).clickReject();
});

Then('The task assignment status should be Rejected in the inbox', async ({ page }) => {
    await new userNotificationPage(page).verifyRejectedStatus();
});


When('I click on the Back to Notifications button', async ({ page }) => {
    await new userNotificationPage(page).clickBack();
});



When('I click on clear all button', async ({ page }) => {
    await new userNotificationPage(page).clickClearAll();
});

Then('All task notifications should be cleared', async ({ page }) => {
    await new userNotificationPage(page).verifyAllNotificationsCleared();
});
