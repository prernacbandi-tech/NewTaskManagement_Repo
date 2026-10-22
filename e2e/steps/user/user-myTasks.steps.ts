import { createBdd } from 'playwright-bdd';
import { UserMyTasksPage } from '../../pages/user/userMyTasksPage';

const { Given, When, Then } = createBdd();

When('I open the My Tasks page', async ({ page }) => {
    await new UserMyTasksPage(page).openMyTasksPage();
});

Then('I should see the total tasks summary', async ({ page }) => {
    await new UserMyTasksPage(page).verifyTotalTasksSummary();
});

Then('I should see the in progress tasks summary', async ({ page }) => {
    await new UserMyTasksPage(page).verifyInProgressTasksSummary();
});

Then('I should see the on hold tasks summary', async ({ page }) => {
    await new UserMyTasksPage(page).verifyOnHoldTasksSummary();
});

Then('I should see the completed tasks summary', async ({ page }) => {
    await new UserMyTasksPage(page).verifyCompletedTasksSummary();
});


Then('I should see the status filter and select the filter I want', async ({ page }) => {
    await new UserMyTasksPage(page).selectStatusFilter('To Do');
});

Then('I should see selected filter task', async ({ page }) => {
    await new UserMyTasksPage(page).verifySelectedStatusTask('Sign up');
});

Then('I should see the priority filter and select the priority', async ({ page }) => {
    await new UserMyTasksPage(page).selectPriorityFilter('High');
});

Then('I should see selected priority task', async ({ page }) => {
    await new UserMyTasksPage(page).verifySelectedPriorityTask('Password change');
});

Then('I should see the Reset button', async ({ page }) => {
    await new UserMyTasksPage(page).verifyResetButton();
});

When('I click on View Details button', async ({ page }) => {
    await new UserMyTasksPage(page).clickViewDetailsButton();
});

Then('task details modal should open', async ({ page }) => {
    await new UserMyTasksPage(page).verifyTaskDetailsModal();
});

When('I click on the Chat with Admin button', async ({ page }) => {
    await new UserMyTasksPage(page).clickChatWithAdmin();
});

Then('the chat window should open', async ({ page }) => {
    await new UserMyTasksPage(page).verifyChatWindow();
});

Then('I should see the Conversations section', async ({ page }) => {
    await new UserMyTasksPage(page).verifyConversationsSection();
});

Then('I should see the task name in the chat header', async ({ page }) => {
    await new UserMyTasksPage(page).verifyChatTaskName('Password change');
});

Then('I should see the Start Chat button', async ({ page }) => {
    await new UserMyTasksPage(page).verifyStartChatButton();
});

Then('I click on start chat button', async ({ page }) => {
    await new UserMyTasksPage(page).clickStartChatButton();
});