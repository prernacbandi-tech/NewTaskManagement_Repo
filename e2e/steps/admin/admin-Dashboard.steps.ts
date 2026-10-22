
import { createBdd } from 'playwright-bdd';
import { AdminDashboardPage } from '../../pages/admin/adminDashboardPage';

const { Given, When, Then } = createBdd();

Given('I open Admin Dashboard', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.openDashboard();
});

Then('I should see Total Projects', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.verifyTotalProjects();
});

Then('I should see Total tasks', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.verifyTotalTasks();
});

Then('I should see In Progress tasks', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.verifyInProgress();
});

Then('I should see overdue tasks', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.verifyOverdue();
});

When('I click on Total Projects', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.clickTotalProjects();
});

When('I click on required project', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.clickRequiredProject();
});

Then('I should see selected project page', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.verifySelectedProjectPage();
});

When('I click on Total Tasks', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.clickTotalTasks();
});

When('I click on required task', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.clickRequiredTask();
});

Then('I should see selected task page', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.verifySelectedTaskPage();
});

When('I click on In Progress Tasks', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.clickInProgress();
});

When('I click on required In Progress task', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.clickRequiredInProgressTask();
});

Then('I should see selected In Progress task page', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.verifySelectedInProgressTaskPage();
});

When('I click on close button', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.clickCloseButton();
});

When('I click on Overdue', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.clickOverdue();
});

When('I click on required overdue task', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.clickRequiredOverdueTask();
});

Then('I should see selected overdue task page', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.verifySelectedOverdueTaskPage();
});

When('I click the close button', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.clickOverdueCloseButton();
});

When('I click on Review Payments', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.clickReviewPayments();
});

Then('I should see Pending Payments section', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.verifyPendingPaymentsSection();
});

When('I click on View All Payments button', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.clickViewAllPayments();
});

Then('I should see All pending payments modal', async ({ page }) => {
    const dashboard = new AdminDashboardPage(page);
    await dashboard.verifyAllPendingPaymentsModal();
});

