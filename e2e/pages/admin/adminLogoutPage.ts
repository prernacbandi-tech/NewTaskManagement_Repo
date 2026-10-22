import { Page, Locator, expect } from '@playwright/test';

export class AdminLogoutPage {
    private readonly page: Page;
    private readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.logoutButton = page.locator(
            'form.sidebar-logout-form button.sidebar-logout-button'
        );
    }

    async openDashboard() {
        await this.page.goto('/Admin/Dashboard');
    }

    async verifyLogoutButton() {
        await expect(this.logoutButton).toBeVisible();
        await expect(this.logoutButton).toBeEnabled();
    }

    async clickLogout() {
        await this.logoutButton.click();
    }

    async verifyLoginPage() {
        await expect(this.page).toHaveURL(/\/Account\/Login/i);
    }
}