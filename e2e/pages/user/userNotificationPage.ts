
import { Page, Locator, expect } from '@playwright/test';

export class userNotificationPage {
    private readonly page: Page;

    private readonly notificationsMenu: Locator;
    private readonly taskAssignment: Locator;
    private readonly backButton: Locator;
    private readonly acceptButton: Locator;
    private readonly rejectButton: Locator;
    private readonly clearAllButton: Locator;
//----------------------------------------------------------------------------------------------------------
    constructor(page: Page) {
        this.page = page;

        this.notificationsMenu = this.page.locator('nav.navigation a[href="/User/Notifications"]');      
        this.taskAssignment = this.page.getByText('New Task Assignment', { exact: true }).first();
        this.backButton = this.page.locator('a.task-back-link');
        this.acceptButton = page.locator('#acceptButton');
        this.rejectButton = page.locator('#rejectButton');
        this.clearAllButton = page.locator('#clearAllNotifications');

        
    }

// -----------------------------------------------------------------------------------------------------
     async clickNotifications() {
    await this.notificationsMenu.click();
}

    async verifyNotifications() {
        await expect(this.page).toHaveURL('https://codequeue.ciitstudent.com/User/Notifications');
    }

    async clickTaskAssignment() {
        await this.taskAssignment.click();
    }

    async verifyTaskAssignment() {
        await expect(this.page.getByText('New Task Assignment', { exact: true })).toBeVisible();
    }

    async clickBack() {
        await this.backButton.click();
    }

    async verifyNotificationsPage() {
        await expect(this.page).toHaveURL(/\/User\/Notifications$/);
    }

    async clickClearAll() {
        await this.clearAllButton.click();
    }

    async verifyAllNotificationsCleared() {
        await expect(
            this.page.locator('#notificationsList')
                .getByText("You're all caught up", { exact: true })
        ).toBeVisible();

        await expect(
            this.page.locator('#notificationsList')
                .getByText('No new notifications.', { exact: true })
        ).toBeVisible();
    }
    async clickAccept() {
        await this.acceptButton.scrollIntoViewIfNeeded();
        await this.acceptButton.click();
    }

    async clickReject() {
        await this.rejectButton.scrollIntoViewIfNeeded();
        await this.rejectButton.click();
    }

    async verifyStatus(status: string) {
        await expect(this.page.locator('body')).toContainText(status);
    }

    async verifyRejectedStatus() {
    await expect(this.page).toHaveURL(/\/User\/Notifications$/);
    await expect(this.page.locator('body')).toContainText('Rejected');
}
}
