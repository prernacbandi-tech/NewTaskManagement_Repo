
import { expect, Locator, Page } from '@playwright/test';

export class AdminTaskReviewsPage {
   
    private readonly page: Page;
    private readonly taskReviewsHeading: Locator;
    private readonly pendingReviewsCount: Locator;
        
    // Task Reviews
    private readonly taskReviewsLink: Locator;
    private readonly recentSubmissionsHeading: Locator;
    private readonly recentTask: Locator;
    
    //View All Tasks
    private readonly viewAllTasksButton: Locator;
    private readonly allTasksReviewsModal: Locator;
    private readonly taskSearchBox: Locator;
    private readonly requiredReviewTask: Locator;

    // Task Scenario Modal
    private readonly scenarioButton: Locator;
    private readonly taskScenarioModal: Locator;
    private readonly closeScenarioButton: Locator;

    //verify repo link
    private readonly repositoryLink: Locator;

    //Approve and Reject button
    private readonly approveButton: Locator;
    private readonly rejectButton: Locator;

    // Payment Queue
    private readonly paymentRemainingHeading: Locator;
    private readonly viewAllPaymentsButton: Locator;
    private readonly allPendingPaymentsModal: Locator;
    private readonly paymentSearchBox: Locator;
    // private readonly requiredPaymentTask: Locator;
    // private readonly payNowButton: Locator;

    // Payment Settlement
    private readonly paymentSettlementModal: Locator;
    private readonly cancelButton: Locator;
    private readonly laterButton: Locator;
//---------------------------------------------------------------------------------------------------------
    constructor(page: Page) {
        this.page = page;
        this.taskReviewsHeading = page.getByRole('heading', {name: 'Task Reviews',exact: true});
        this.pendingReviewsCount = page.locator('body').getByText('Pending reviews',{ exact: true });

        // Task Reviews
        this.taskReviewsLink = page.getByRole('link', {name: /Task Reviews/});
        this.recentSubmissionsHeading = page.getByRole('heading', {name: 'Recent Task Submissions',exact: true});
        this.recentTask = page.locator('article').filter({ hasText: 'REVIEW PENDING' }).first();

        // View All Tasks
        this.viewAllTasksButton = this.page.getByRole('button', {name: 'View All Tasks →',exact: true});        this.allTasksReviewsModal = page.locator('#allReviewsModal');
        this.taskSearchBox = this.allTasksReviewsModal.locator('#allReviewsSearch');
        this.requiredReviewTask = this.allTasksReviewsModal.locator('.all-review-item').filter({ hasText: 'Test Task' });
        
        // Task Scenario Modal
        this.scenarioButton = this.requiredReviewTask.locator('button.scenario-open-btn');
        this.taskScenarioModal = this.page.locator('#scenarioModal');
        this.closeScenarioButton = this.taskScenarioModal.locator('button.btn-close[aria-label="Close"]');

        //Verify Repo Link
        this.repositoryLink = this.requiredReviewTask.locator('a.all-review-repo');

        //Approve and Reject button
        this.approveButton = this.requiredReviewTask.locator('button.btn-review-approve');
        this.rejectButton = this.requiredReviewTask.locator('button.btn-review-reject');

        // Payment Queue
        this.paymentRemainingHeading = this.page.getByRole('heading', {name: 'Payment Remaining', exact: true});
        this.viewAllPaymentsButton = this.page.getByRole('button', {name: /View All Payments/i});

        this.allPendingPaymentsModal = this.page.locator('#allPaymentsModal');
        this.paymentSearchBox = this.allPendingPaymentsModal.getByRole('searchbox');

        // Payment Settlement  
        this.paymentSettlementModal = this.page.getByRole('dialog').filter({ hasText: 'PAYMENT SETTLEMENT' });
        this.cancelButton = this.paymentSettlementModal.getByRole('button', {name: 'Cancel',exact: true});
        this.laterButton = this.paymentSettlementModal.getByRole('button', {name: 'Later',exact: true});
    }

//------------------------------------------------------------------------------------------------
    async openAdminDashboard() {
        await this.page.goto('/Admin');
    }


    async verifyTaskReviewsHeading() {
        await expect(this.taskReviewsHeading).toBeVisible();
    }

    async verifyPendingReviewsCount() {
        await expect(this.pendingReviewsCount).toBeVisible();
    }
    
    // Task Reviews
    async clickTaskReviews() {
        await this.taskReviewsLink.click();
    }

    async verifyRecentTaskSubmissions() {
        await expect(this.recentSubmissionsHeading).toBeVisible();
    }

    async verifySubmittedTaskDetails() {
        await expect(this.recentTask).toBeVisible();
    }

    //View All Tasks
    async clickViewAllTasks() {
        await expect(this.taskReviewsHeading).toBeVisible();
        await expect(this.viewAllTasksButton).toBeVisible();
        await this.viewAllTasksButton.click();
    }

    async verifyAllTasksReviewsModal() {
        await expect(this.allTasksReviewsModal).toBeVisible();
    }

    async searchRequiredTask() {
        await expect(this.taskSearchBox).toBeVisible();

        await this.taskSearchBox.fill('Test Task');

        await expect(this.allTasksReviewsModal).toContainText('Test Task');
    }

    async verifySearchedTask() {
        await expect(this.requiredReviewTask).toBeVisible();

    }

    // Task Scenario Modal
    async clickScenarioButton() {
        await expect(this.allTasksReviewsModal).toBeVisible();
        await expect(this.requiredReviewTask).toBeVisible();

        await this.requiredReviewTask
            .getByRole('button', { name: /Scenario/i })
            .click();
    }

    async verifyTaskScenarioModalOpens() {
        await expect(this.taskScenarioModal).toBeVisible();
        await expect(this.taskScenarioModal).toContainText(
            'TASK SCENARIO'
        );
    }

    async closeTaskScenarioModal() {
        await this.closeScenarioButton.click();
    }

    async verifyTaskScenarioModalCloses() {
        await expect(this.taskScenarioModal).not.toBeVisible();
    }

    //Verify Repo link
    async verifyOpenRepositoryLink() {
        await expect(this.allTasksReviewsModal).toBeVisible();
        await expect(this.requiredReviewTask).toBeVisible();
        await expect(this.repositoryLink).toBeVisible();
        await expect(this.repositoryLink).toContainText('Open Repo');
        await expect(this.repositoryLink).toHaveAttribute('href','https://github.com/prernacbandi-tech/TaskManagementRepo.git'
        );
    }

    async clickRepositoryLinkAndVerifyOpens() {
        await expect(this.allTasksReviewsModal).toBeVisible();
        await expect(this.repositoryLink).toBeVisible();

        const expectedRepoUrl = await this.repositoryLink.getAttribute('href');
        const newPagePromise = this.page.context().waitForEvent('page');
        await this.repositoryLink.click();

        const newPage = await newPagePromise;
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://github.com/prernacbandi-tech/TaskManagementRepo');
    }

    //Approve and Reject button
    async verifyApproveButton() {
        await expect(this.allTasksReviewsModal).toBeVisible();
        await expect(this.requiredReviewTask).toBeVisible();
        await expect(this.approveButton).toBeVisible();
        await expect(this.approveButton).toBeEnabled();
    }

    async verifyRejectButton() {
        await expect(this.allTasksReviewsModal).toBeVisible();
        await expect(this.requiredReviewTask).toBeVisible();
        await expect(this.rejectButton).toBeVisible();
        await expect(this.rejectButton).toBeEnabled();
    }

    async verifyPaymentRemainingSection() {
            await expect(this.paymentRemainingHeading).toBeVisible();
        }

        async clickViewAllPayments() {
            await this.viewAllPaymentsButton.click();
        }

        async verifyAllPendingPaymentsModal() {
            await expect(this.allPendingPaymentsModal).toBeVisible();
        }

        async searchPaymentTask() {
            await expect(this.paymentSearchBox).toBeVisible();
            await this.paymentSearchBox.fill('Payments');

            const paymentTask = this.allPendingPaymentsModal.locator('article').filter({ hasText: 'TASK-52' });

            await expect(paymentTask).toBeVisible();
        }
        async clickPayNowForTask() {
            const paymentTask = this.allPendingPaymentsModal.locator('article').filter({ hasText: 'TASK-52' });
            await expect(paymentTask).toBeVisible();
            await paymentTask.getByRole('button', {name: 'Pay Now',exact: true}).click();

            await this.verifyPaymentSettlementModal();
        }

        async verifyPaymentSettlementModal() {
            const settlementModal = this.page.getByRole('dialog').filter({ hasText: 'PAYMENT SETTLEMENT' });

            await expect(settlementModal).toBeVisible();
        }

        
        async clickLaterButton() {
            await this.laterButton.click();
        }
}
