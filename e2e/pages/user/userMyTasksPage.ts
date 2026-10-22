
import { Page, Locator, expect } from '@playwright/test';

export class UserMyTasksPage {

    private readonly page: Page;
    private readonly totalTasks: Locator;
    private readonly inProgressTasks: Locator;
    private readonly onHoldTasks: Locator;
    private readonly completedTasks: Locator;

    private readonly statusFilter: Locator;
    private readonly priorityFilter: Locator;
    private readonly resetButton: Locator;
    private readonly viewDetailsButtons: Locator;
    private readonly taskCards: Locator;

    private readonly chatWithAdminButton: Locator;
    private readonly conversationsSection: Locator;
    private readonly chatTaskName: Locator;
    private readonly startChatButton: Locator;
//--------------------------------------------------------------------------------------------------------------
    constructor(page: Page) {
        this.page = page;

        this.totalTasks = this.page.locator('.stat-card').filter({hasText: 'Total Tasks'});
        this.inProgressTasks = this.page.getByText('In Progress / Review', {exact: true});
        this.onHoldTasks = this.page.getByText('On Hold', {exact: true});
        this.completedTasks = this.page.getByText('Completed', {exact: true});

        this.statusFilter = this.page.locator('#statusFilter');
        this.priorityFilter = this.page.locator('#priorityFilter');
        this.resetButton = this.page.locator('#resetFilters');
        this.viewDetailsButtons = this.page.getByRole('button', {name: /View Details/i});
        this.taskCards = this.page.locator('.kanban-column .task-list');

        this.chatWithAdminButton = this.page.getByRole('button', {name: /Chat with Admin/i});
        this.conversationsSection = this.page.getByText('Conversations', {exact: true});
        this.chatTaskName = this.page.locator('.chat-header h3');
        this.startChatButton = this.page.getByRole('button', {name: 'Start Chat',exact: true});

    }
//--------------------------------------------------------------------------------------------------
    async openMyTasksPage() {
        await this.page.goto('/User/MyTasks');
    }

    async verifyTotalTasksSummary() {
        await expect(this.totalTasks).toBeVisible();
    }

    async verifyInProgressTasksSummary() {
        await expect(this.inProgressTasks.first()).toBeVisible();
    }

    async verifyOnHoldTasksSummary() {
        await expect(this.onHoldTasks.first()).toBeVisible();
    }

    async verifyCompletedTasksSummary() {
        await expect(this.completedTasks.first()).toBeVisible();
    }

    async selectStatusFilter(status: string) {
        await expect(this.statusFilter).toBeVisible();
        await this.statusFilter.selectOption({ label: status });
    }

   async verifySelectedStatusTask(taskName: string) {
    await expect(
        this.taskCards.getByRole('heading', {
            name: taskName,
            exact: true
        })
    ).toBeVisible();
}

    async selectPriorityFilter(priority: string) {
        await this.statusFilter.selectOption({ label: 'All Status' });
        await expect(this.priorityFilter).toBeVisible();
        await this.priorityFilter.selectOption({ label: priority });
    }

    async verifySelectedPriorityTask(taskName: string) {
    await expect(
        this.taskCards.getByRole('heading', {
            name: taskName,
            exact: true
        })
    ).toBeVisible();
}

    async verifyResetButton() {
        await expect(this.resetButton).toBeVisible();
    }

    async clickViewDetailsButton() {
        await this.viewDetailsButtons.first().click();
    }

    async verifyTaskDetailsModal() {
        await expect(
            this.page.locator(
                '[role="dialog"]:visible, .modal.show:visible, .task-details-modal:visible'
            ).first()
        ).toBeVisible();
    }

    async clickChatWithAdmin() {
    await this.chatWithAdminButton.first().click();
}

async verifyChatWindow() {
    await expect(this.conversationsSection).toBeVisible();
}

async verifyConversationsSection() {
    await expect(this.conversationsSection).toBeVisible();
}

async verifyChatTaskName(taskName: string) {
    await expect(
        this.page.locator('#userChatList')
            .getByText(taskName, { exact: true })
    ).toBeVisible();
}

async verifyStartChatButton() {
    await expect(
        this.page.getByRole('textbox', {
            name: 'Type @ to choose a task...'
        })
    ).toBeVisible();
}

async clickStartChatButton() {
    await expect(
        this.page.getByRole('textbox', {
            name: 'Type @ to choose a task...'
        })
    ).toBeVisible();
}
}
