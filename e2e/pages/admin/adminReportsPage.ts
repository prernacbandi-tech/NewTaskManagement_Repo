import { Page, Locator, expect, Download } from '@playwright/test';

export class AdminReportsPage {
    private readonly page: Page;
    private readonly heading: Locator;
    private readonly description: Locator;
    private readonly periodFilter: Locator;
    private readonly exportButton: Locator;
    private readonly taskStatusOverview: Locator;
    private readonly projectPerformance: Locator;
    private readonly studentWorkload: Locator;

    constructor(page: Page) {
        this.page = page;

        this.heading = page.getByRole('heading', {
            name: 'Reports',
            exact: true
        });

        this.description = page.getByText(
            'Insights and analytics for your projects and team performance.',
            { exact: true }
        );

        this.periodFilter = page.locator('select').filter({
            has: page.locator('option', { hasText: 'All Time' })
        });

        this.exportButton = page.getByRole('button', {
            name: /Export Report/i
        });

        this.taskStatusOverview = page.getByRole('heading', {
            name: 'Task status overview',
            exact: true
        });

        this.projectPerformance = page.getByRole('heading', {
            name: 'Project performance',
            exact: true
        });

        this.studentWorkload = page.getByRole('heading', {
            name: 'Student workload',
            exact: true
        });
    }

    async openReportsPage() {
        await this.page.goto('/Admin/Reports');
    }

    async verifyHeading() {
        await expect(this.heading).toBeVisible();
    }

    async verifyDescription() {
        await expect(this.description).toBeVisible();
    }

    async verifySummaryCards() {
        await expect(
            this.page.getByText('Total Tasks', { exact: true }).first()
        ).toBeVisible();

        await expect(
            this.page.getByText('In Progress', { exact: true }).first()
        ).toBeVisible();

        await expect(
            this.page.getByText('Completed', { exact: true }).first()
        ).toBeVisible();

        await expect(
            this.page.getByText('On Hold', { exact: true }).first()
        ).toBeVisible();
    }

    async verifyTaskStatusOverview() {
        await expect(this.taskStatusOverview).toBeVisible();
    }

    async verifyProjectPerformance() {
        await expect(this.projectPerformance).toBeVisible();
    }

    async verifyStudentWorkload() {
        await expect(this.studentWorkload).toBeVisible();
    }

    async verifyPeriodFilter() {
        await expect(this.periodFilter).toBeVisible();
    }

    async selectDifferentPeriod() {
        await this.periodFilter.selectOption({ label: 'This Month' });
    }

    async verifySelectedPeriod() {
        await expect(this.periodFilter).toHaveValue(
            await this.periodFilter.inputValue()
        );
    }

    async verifyExportButton() {
        await expect(this.exportButton).toBeVisible();
        await expect(this.exportButton).toBeEnabled();
    }

    async exportReport(): Promise<Download> {
    await this.exportButton.click();

    const csvButton = this.page.getByRole('button', {
        name: /Export as CSV/i
    });

    await expect(csvButton).toBeVisible();

    const downloadPromise = this.page.waitForEvent('download');
    await csvButton.click();

    return await downloadPromise;
}
}
