import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { AdminReportsPage } from '../../pages/admin/adminReportsPage';

const { Given, When, Then } = createBdd();

Given('I have logged in as admin already', async ({ page }) => {
    await page.goto('/Admin/Dashboard');
});

When('I navigate to the Reports page', async ({ page }) => {
    const reportsPage = new AdminReportsPage(page);
    await reportsPage.openReportsPage();
});

Then('the Reports page heading should be visible', async ({ page }) => {
    await new AdminReportsPage(page).verifyHeading();
});

Then('the Reports page description should be visible', async ({ page }) => {
    await new AdminReportsPage(page).verifyDescription();
});

Then('the task summary cards should be visible', async ({ page }) => {
    await new AdminReportsPage(page).verifySummaryCards();
});

Then('the task status overview should be visible', async ({ page }) => {
    await new AdminReportsPage(page).verifyTaskStatusOverview();
});

Then('the project performance table should be visible', async ({ page }) => {
    await new AdminReportsPage(page).verifyProjectPerformance();
});

Then('the student workload table should be visible', async ({ page }) => {
    await new AdminReportsPage(page).verifyStudentWorkload();
});

Then('the period filter should be visible', async ({ page }) => {
    await new AdminReportsPage(page).verifyPeriodFilter();
});

Then('I select a different report period', async ({ page }) => {
    await new AdminReportsPage(page).selectDifferentPeriod();
});

Then('the selected report period should be displayed', async ({ page }) => {
    const reportsPage = new AdminReportsPage(page);
    await reportsPage.verifyPeriodFilter();
});

Then('the Export Report button should be visible', async ({ page }) => {
    await new AdminReportsPage(page).verifyExportButton();
});

When('I click the Export Report button', async ({ page }) => {
    const reportsPage = new AdminReportsPage(page);
    const download = await reportsPage.exportReport();

    expect(download.suggestedFilename()).toBeTruthy();
});

Then('the report should be downloaded', async () => {
    // The download is asserted in the previous step.
});
