import { Page, Locator } from '@playwright/test';

export class AdminLoginPage {

    private readonly page: Page;

    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.emailInput = page.locator('#Email');

        this.passwordInput = page.locator('#Password');

        this.loginButton=this.page.locator("button[type='submit']");

    }

    async openLoginPage() {
        await this.page.goto('/Account/Login');
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }
}