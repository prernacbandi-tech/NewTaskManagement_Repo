
import { Page, expect, Locator } from '@playwright/test';

export class UserDashboardPage {

    private readonly page: Page;
    private readonly totalTasks: Locator;
    private readonly inProgressTasks: Locator;
    private readonly completedTasks: Locator;
    private readonly onHoldTasks: Locator;
    private readonly searchBar: Locator;
    private readonly searchedTask: Locator;

    private readonly themeButton: Locator;
    private readonly notificationButton: Locator;
    private readonly chatButton: Locator;
    private readonly userProfileButton: Locator;
    private readonly dashboardLink: Locator;
    private readonly myTasksLink: Locator;
    private readonly notificationsLink: Locator;
    private readonly paymentDetailsLink: Locator;
    private readonly profileLink: Locator;
    private readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.totalTasks = this.page.locator('button.stat[data-stat="all"]');
        this.inProgressTasks = this.page.locator('button.stat[data-stat="progress"]');
        this.completedTasks = this.page.locator('button.stat[data-stat="completed"]');
        this.onHoldTasks = this.page.locator('button.stat[data-stat="hold"]');
        this.searchBar = this.page.locator('#globalSearch');
        this.searchedTask = this.page.getByText('Password change', { exact: true });

        this.themeButton = page.locator('#themeButton');
        this.notificationButton = page.locator('#notificationButton');
        this.chatButton = page.locator('#chatButton');
        this.userProfileButton = page.locator('button.user-button');

        this.dashboardLink = this.page.locator('a[href="/User"]');
        this.myTasksLink = this.page.locator('a[href="/User/MyTasks"]');
        this.notificationsLink = this.page.locator('a[href="/User/Notifications"]');
        this.paymentDetailsLink = this.page.locator('a[href="/User/PaymentDetails"]');
        this.profileLink = this.page.locator('a[href="/User/Profile"]');
        this.logoutButton = this.page.locator('#logoutButton');
    }

    async openDashboard() {
        await this.page.goto('/User/Dashboard');
    }

    async verifyTotalTasks() {
        await expect(this.totalTasks).toBeVisible();
    }

    async verifyInProgressTasks() {
        await expect(this.inProgressTasks).toBeVisible();
    }

    async verifyCompletedTasks() {
        await expect(this.completedTasks).toBeVisible();
    }

    async verifyOnHoldTasks() {
        await expect(this.onHoldTasks).toBeVisible();
    }

    async searchAssignedTask(taskName: string) {
        await this.searchBar.fill(taskName);
    }
    // async verifySearchedTask(taskName: string) {
    //     await expect(
    //         this.page.getByText(taskName, { exact: true })
    //     ).toBeVisible();
    // }

    async verifySearchedTask(taskName: string) {
    await expect(
        this.page.locator('#globalSearch')
    ).toHaveValue(taskName);

    await expect(
        this.page.locator('article')
            .filter({ has: this.page.getByRole('heading', { name: 'My Focus Tasks' }) })
            .getByText(taskName, { exact: true })
    ).toBeVisible();
}


    async verifyDashboardLink() {
        await expect(this.dashboardLink).toBeVisible();
    }

    async verifyMyTasksLink() {
        await expect(this.myTasksLink).toBeVisible();
    }

    async verifyNotificationsLink() {
        await expect(this.notificationsLink).toBeVisible();
    }

    async verifyPaymentDetailsLink() {
        await expect(this.paymentDetailsLink).toBeVisible();
    }

    async verifyProfileLink() {
        await expect(this.profileLink).toBeVisible();
    }

    async verifyLogoutButton() {
        await expect(this.logoutButton).toBeVisible();
    }

    async verifyThemeButton() {
        await expect(this.themeButton).toBeVisible();
    }

    async verifyNotificationButton() {
        await expect(this.notificationButton).toBeVisible();
    }

    async verifyChatButton() {
        await expect(this.chatButton).toBeVisible();
    }

    async verifyUserProfileButton() {
        await expect(this.userProfileButton).toBeVisible();
    }

}
