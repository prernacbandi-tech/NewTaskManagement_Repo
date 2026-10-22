
import { createBdd } from 'playwright-bdd';
import { AdminTaskReviewsPage } from '../../pages/admin/adminTaskReviewsPage';
import { AdminDashboardPage } from '../../pages/admin/adminDashboardPage';


const { Given, When, Then } = createBdd();

Given('I am on the Admin Dashboard', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.openAdminDashboard();
});

When('I click on Task Reviews', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.clickTaskReviews();
});

Then('I should see Task Reviews heading', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.verifyTaskReviewsHeading();
});

Then('I should see pending reviews count', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.verifyPendingReviewsCount();
});

// Task Reviews
Then('I should see Recent Task Submissions', async ({ page }) => {
    const adminDashboardPage = new AdminDashboardPage(page);
    await adminDashboardPage.verifyRecentTaskSubmissions();
});

Then('I should see submitted task details', async ({ page }) => {
    const adminDashboardPage = new AdminDashboardPage(page);
    await adminDashboardPage.verifySubmittedTaskDetails();
});

//View All Tasks
When('I click on View All Tasks button', async ({ page }) => {
    const adminTaskReviewsPage = new AdminTaskReviewsPage(page);
    await adminTaskReviewsPage.clickViewAllTasks();
});

Then('All Tasks Reviews modal opens', async ({ page }) => {
    const adminTaskReviewsPage = new AdminTaskReviewsPage(page);
    await adminTaskReviewsPage.verifyAllTasksReviewsModal();
});

When('I search for required task', async ({ page }) => {
    const adminTaskReviewsPage = new AdminTaskReviewsPage(page);
    await adminTaskReviewsPage.searchRequiredTask();
});

Then('I should see the searched task', async ({ page }) => {
    const adminTaskReviewsPage = new AdminTaskReviewsPage(page);
    await adminTaskReviewsPage.verifySearchedTask();
});

//Task Scenario modal
When('I click on Scenario button', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.clickScenarioButton();
});

Then('Task Scenario modal should open', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.verifyTaskScenarioModalOpens();
});

When('I click on close option', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.closeTaskScenarioModal();
});

Then('Task Scenario modal should close', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.verifyTaskScenarioModalCloses();
});

//Verfiy Repo link
Then('I should see Open Repository link', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.verifyOpenRepositoryLink();
});

When('I click on repo link then repo should open', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.clickRepositoryLinkAndVerifyOpens();
});

//Approve and Reject button
Then('I should see Approve button', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.verifyApproveButton();
});

Then('I should see Reject button', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.verifyRejectButton();
});


Then('I should see Payment Remaining section', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.verifyPaymentRemainingSection();
});

Then('I should click on View All Payments button', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.clickViewAllPayments();
});

Then('All pending payments modal should open', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.verifyAllPendingPaymentsModal();
});

Then('I search for task', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.searchPaymentTask();
});

Then('click on pay now button', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.clickPayNowForTask();
});

Then('Payment settlement modal should open', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.verifyPaymentSettlementModal();
});

Then('I should click on Pay Now button', async ({ page }) => {
    // Payment Settlement modal madhil confirmation action
});



Then('I click on Later Button', async ({ page }) => {
    const taskReviewsPage = new AdminTaskReviewsPage(page);
    await taskReviewsPage.clickLaterButton();
});