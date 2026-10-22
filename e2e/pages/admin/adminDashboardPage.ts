import { Page, Locator, expect } from '@playwright/test';

export class AdminDashboardPage {
    private readonly page: Page;

    // Dashboard cards
    private readonly totalProjects: Locator;
    private readonly totalTasks: Locator;
    private readonly inProgress: Locator;
    private readonly overdue: Locator;

    // Total Projects
    private readonly projectModal: Locator;
    private readonly requiredProject: Locator;

    // Total Tasks
    private readonly totalTasksModal: Locator;
    private readonly requiredTask: Locator;

    // In Progress / task details
    private readonly inProgressModal: Locator;
    private readonly requiredInProgressTask: Locator;
    private readonly taskDetailsModal: Locator;
    private readonly closeTaskDetailsButton: Locator;

    // Overdue
    private readonly overdueModal: Locator;
    private readonly requiredOverdueTask: Locator;

    // Pending payments section
    private readonly reviewPaymentsButton: Locator;
    private readonly pendingPaymentsSection: Locator;
    private readonly viewAllPaymentsButton: Locator;

    // All pending payments modal
    private readonly allPaymentsModal: Locator;
    private readonly pendingTaskSearch: Locator;
    private readonly pendingPaymentTask: Locator;
    private readonly payNowButton: Locator;

    // Payment settlement modal
    private readonly paymentSettlementModal: Locator;
    private readonly laterButton: Locator;

    // Recent Task Submissions
    private readonly taskReviewsLink: Locator;
    private readonly recentSubmissionsHeading: Locator;
    private readonly recentTask: Locator;
    private readonly approveButton: Locator;
    private readonly rejectButton: Locator;

    // All Task Reviews modal
    private readonly viewAllTasksButton: Locator;
    private readonly allTasksReviewsModal: Locator;
    private readonly taskSearchBox: Locator;
    private readonly requiredReviewTask: Locator;
    private readonly scenarioButton: Locator;
    private readonly scenarioModal: Locator;
    private readonly scenarioCloseButton: Locator;
    private readonly openRepositoryButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // Dashboard cards
        this.totalProjects = page.locator('[data-admin-stat="projects"]');
        this.totalTasks = page.locator('[data-admin-stat="tasks"]');
        this.inProgress = page.locator('[data-admin-stat="progress"]');
        this.overdue = page.locator('[data-admin-stat="overdue"]');

        // Total Projects
        this.projectModal = page.locator('#adminStatModal');
        this.requiredProject = this.projectModal.getByText(
            'Playwright Automation Project',
            { exact: true }
        );

        // Total Tasks
        this.totalTasksModal = page.getByRole('dialog');
        this.requiredTask = this.totalTasksModal.getByRole('link', {
            name: /Full Stack Development Updated/
        });

        // In Progress / task details
        this.inProgressModal = page.getByRole('dialog');
        this.requiredInProgressTask = this.inProgressModal.getByRole('link', {name: /Profile update/});
        this.taskDetailsModal = page.locator('#taskDetailsModal');
        this.closeTaskDetailsButton = this.taskDetailsModal.getByRole('button', {name: 'Close',exact: true});

        // Overdue
        this.overdueModal = page.getByRole('dialog');
        this.requiredOverdueTask = this.overdueModal.getByRole('link');

        // Pending payments section
        this.reviewPaymentsButton = page.locator(
            '.admin-pending-payment-card .admin-pending-payment-action'
        );
        this.pendingPaymentsSection = page.locator('#pendingPayments');
        this.viewAllPaymentsButton = page.locator(
            '#pendingPayments .review-view-all-btn'
        );

        // All pending payments modal
        this.allPaymentsModal = page.locator('#allPaymentsModal');
        this.pendingTaskSearch = this.allPaymentsModal.getByRole('searchbox', {
            name: 'Search payments...'
        });
        this.pendingPaymentTask = this.allPaymentsModal
            .locator('article')
            .filter({ hasText: 'Reset Password' });
        this.payNowButton = this.pendingPaymentTask.getByRole('button', {
            name: 'Pay Now',
            exact: true
        });

        // Payment settlement modal
        this.paymentSettlementModal = page
            .locator('.modal.show')
            .filter({ hasText: 'PAYMENT SETTLEMENT' });
        this.laterButton = this.paymentSettlementModal.getByRole('button', {
            name: 'Later',
            exact: true
        });

        // Recent Task Submissions
        this.taskReviewsLink = page.getByRole('link', { name: /Task Reviews/ });
        this.recentSubmissionsHeading = page.getByRole('heading', {
            name: 'Recent Task Submissions',
            exact: true
        });
        this.recentTask = page.locator('article.review-card').filter({ hasText: 'TASK-49' });
        this.approveButton = this.recentTask.getByRole('button', {
            name: /Approve/
        });
        this.rejectButton = this.recentTask.getByRole('button', {
            name: /Reject/
        });

        // All Task Reviews modal
        this.viewAllTasksButton = page.getByRole('button', {
            name: /View All Tasks/
        });
        this.allTasksReviewsModal = page.locator('#allReviewsModal');
        this.taskSearchBox = this.allTasksReviewsModal.locator('#allReviewsSearch');
        this.requiredReviewTask = this.allTasksReviewsModal
            .locator('.all-review-item')
            .filter({ hasText: 'Profile Page' });
        this.scenarioButton = this.requiredReviewTask.getByRole('button', {
            name: /Scenario/
        });

        // Scenario modal (separate from All Task Reviews modal)
        this.scenarioModal = page.getByRole('dialog').filter({
            hasText: 'TASK SCENARIO'
        });
        this.scenarioCloseButton = this.scenarioModal.getByRole('button', {
            name: 'Close',
            exact: true
        });

        this.openRepositoryButton = this.requiredReviewTask.getByRole('link', {
            name: /Open Repository/
        });
    }

    // Dashboard
    async openDashboard() {
        await this.page.goto('/Admin');
    }

    async verifyTotalProjects() {
        await expect(this.totalProjects).toBeVisible();
    }

    async verifyTotalTasks() {
        await expect(this.totalTasks).toBeVisible();
    }

    async verifyInProgress() {
        await expect(this.inProgress).toBeVisible();
    }

    async verifyOverdue() {
        await expect(this.overdue).toBeVisible();
    }

    async clickTotalProjects() {
        await this.totalProjects.click();
    }

    async clickTotalTasks() {
        await this.totalTasks.click();
    }

    async clickInProgress() {
        await this.inProgress.click();
    }

    async clickOverdue() {
        await this.overdue.click();
    }

    // Total Projects
    async clickRequiredProject() {
        await expect(this.projectModal).toBeVisible();
        await expect(this.requiredProject).toBeVisible();
        await this.requiredProject.click();
    }

    async verifySelectedProjectPage() {
        await expect(this.page).toHaveURL('https://codequeue.ciitstudent.com/Admin/Tasks/Project/15');
    }

    // Total Tasks
    async clickRequiredTask() {
        await expect(this.totalTasksModal).toBeVisible();
        await expect(this.requiredTask).toBeVisible();
        await this.requiredTask.click();
    }

    async verifySelectedTaskPage() {
        await expect(this.page).toHaveURL('https://codequeue.ciitstudent.com/Admin/Tasks/Project/26');
    }

    // In Progress
    async clickRequiredInProgressTask() {
        await expect(this.inProgressModal).toBeVisible();
        await expect(this.requiredInProgressTask).toBeVisible();
        await this.requiredInProgressTask.click();
    }

    async verifySelectedInProgressTaskPage() {
        await expect(this.taskDetailsModal).toBeVisible();
        await expect(this.taskDetailsModal).toContainText('Profile update');
        await expect(this.taskDetailsModal).toContainText('In Progress');
        await expect(this.taskDetailsModal).toContainText('Prerna Bandi');
        await expect(this.taskDetailsModal).toContainText('₹ 400.00');
    }
    

    async clickCloseButton() {
        await expect(this.closeTaskDetailsButton).toBeVisible();
        await this.closeTaskDetailsButton.click();
        await expect(this.taskDetailsModal).toBeHidden();
    }

    // Overdue
    async clickRequiredOverdueTask() {
        await expect(this.overdueModal).toBeVisible();
        await expect(this.requiredOverdueTask.first()).toBeVisible();
        await this.requiredOverdueTask.first().click();
    }

    async verifySelectedOverdueTaskPage() {
        await expect(this.taskDetailsModal).toBeVisible();
    }

    async clickOverdueCloseButton() {
        await expect(this.closeTaskDetailsButton).toBeVisible();
        await this.closeTaskDetailsButton.click();
        await expect(this.taskDetailsModal).toBeHidden();
    }

    // Pending Payments
    async clickReviewPayments() {
        await this.reviewPaymentsButton.click();
    }

    async verifyPendingPaymentsSection() {
        await expect(this.pendingPaymentsSection).toBeVisible();
    }

    async clickViewAllPayments() {
        await this.viewAllPaymentsButton.click();
    }

    async verifyAllPendingPaymentsModal() {
        await expect(this.allPaymentsModal).toBeVisible();
    }

    async searchPendingTask() {
        await expect(this.allPaymentsModal).toBeVisible();
        await this.pendingTaskSearch.fill('Reset Password');
        await expect(this.pendingPaymentTask).toBeVisible();
    }

    async clickPayNow() {
        await expect(this.pendingPaymentTask).toBeVisible();
        await this.payNowButton.click();
    }

    // Payment Settlement
    async verifyPaymentSettlementModal() {
        await expect(this.paymentSettlementModal).toBeVisible();
    }

    async verifyPaymentUserAndAmount() {
        await expect(this.paymentSettlementModal).toBeVisible();
        await expect(
            this.paymentSettlementModal.getByText('Prerna Bandi', { exact: true })
        ).toBeVisible();
        await expect(
            this.paymentSettlementModal.getByText('₹ 100.00', { exact: true })
        ).toBeVisible();
    }

    async clickLaterButton() {
        await expect(this.laterButton).toBeVisible();
        await this.laterButton.click();
    }

    async verifyPaymentSettlementModalClosed() {
        await expect(this.paymentSettlementModal).toBeHidden();
    }

    // Recent Task Submissions
    async clickTaskReviews() {
        await this.taskReviewsLink.click();
    }

    async verifyRecentTaskSubmissions() {
        await expect(this.recentSubmissionsHeading).toBeVisible();
    }

    async verifySubmittedTaskDetails() {
        await expect(this.recentSubmissionsHeading).toBeVisible();
        await expect(this.recentTask).toBeVisible();
        await expect(this.recentTask).toContainText('Profile edit 1');
        await expect(this.recentTask).toContainText('Prerna Bandi');
        await expect(this.recentTask).toContainText('₹ 100.00');
    }

    async clickApproveButton() {
        await expect(this.approveButton).toBeVisible();
        await this.approveButton.click();
    }

    async verifyApproveButton() {
        await expect(this.approveButton).toBeVisible();
    }

    async verifyRejectButton() {
        await expect(this.rejectButton).toBeVisible();
    }

    // All Task Reviews
    async clickViewAllTasks() {
        await this.viewAllTasksButton.click();
    }

    async verifyAllTasksReviewsModal() {
        await expect(this.allTasksReviewsModal).toBeVisible();
    }

    async searchRequiredTask() {
        await expect(this.allTasksReviewsModal).toBeVisible();
        await this.taskSearchBox.fill('Profile Page');
        await expect(this.requiredReviewTask).toBeVisible();
    }

    async clickScenarioButton() {
        await expect(this.requiredReviewTask).toBeVisible();
        await this.scenarioButton.click();
        await expect(this.scenarioModal).toBeVisible();
    }

    async clickCloseOption() {
        await expect(this.scenarioModal).toBeVisible();
        await this.scenarioCloseButton.click();
        await expect(this.scenarioModal).toBeHidden();
    }

    // Verify the repository link without leaving the Task Reviews page
    async clickOpenRepository() {
        await expect(this.openRepositoryButton).toBeVisible();
        await expect(this.openRepositoryButton).toHaveAttribute('href','https://github.com/prernacbandi-tech/TaskManagementRepo.git');
    }
}
