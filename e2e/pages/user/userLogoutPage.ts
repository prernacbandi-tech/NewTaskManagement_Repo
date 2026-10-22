
import { Page, Locator, expect } from '@playwright/test';

export class userLogoutPage {
    private readonly page: Page;
    private readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.logoutButton = this.page.locator('#logoutButton');
    }

    async verifyLogoutButton() {
        await expect(this.logoutButton).toBeVisible();
    }

    async clickLogout() {
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
    }

    async verifyRedirectToLoginPage() {
        await expect(this.page).toHaveURL(/\/Account\/Login/i);
    }
}
