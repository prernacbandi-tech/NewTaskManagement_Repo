import { expect, Locator, Page } from '@playwright/test';

export class UserLoginPage {
    private readonly page: Page;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.signInButton=this.page.locator('#loginButton');
    }

    async openUserLoginPage() {
        await this.page.goto('/Account/Login');
    }

    async enterUserEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterUserPassword(pwd: string) {
        await this.passwordInput.fill(pwd);
    }

    async clickSignIn() {
        await this.signInButton.click();
    }

    async verifyLoginSuccessful() {
        await expect(this.page).not.toHaveURL(/\/Account\/Login/i);
    }
}