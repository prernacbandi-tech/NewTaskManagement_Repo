
import { Page, Locator, expect } from '@playwright/test';

export class userPaymentDetailsPage {
    private readonly page: Page;

    /// Navigation locator
    private readonly paymentDetailsMenu: Locator;

    // Payment method locators
    private readonly upiOption: Locator;
    private readonly bankAccountOption: Locator;

    // UPI locator
    private readonly upiIdInput: Locator;

    // Bank Account locators
    private readonly accountHolderInput: Locator;
    private readonly bankNameInput: Locator;
    private readonly accountNumberInput: Locator;
    private readonly ifscCodeInput: Locator;

    // Common locators
    private readonly confirmationCheckbox: Locator;
    private readonly savePaymentButton: Locator;
    private readonly successMessage: Locator;


    constructor(page: Page) {
        this.page = page;

        this.paymentDetailsMenu = page.locator('a[href="/User/PaymentDetails"]');
        this.upiOption = page.locator('button[data-method="UPI"]');
        //this.bankAccountOption = page.locator('button[data-method="Bank"]');   
        this.bankAccountOption = this.page.locator('#paymentDetailsForm button[data-method="Bank"]');     
        this.upiIdInput = page.locator('#upiId');
        this.accountHolderInput = page.locator('#accountHolderName');
        this.bankNameInput = page.locator('#bankName');
        this.accountNumberInput = page.locator('#accountNumber');
        this.ifscCodeInput = page.locator('#ifscCode');
        this.confirmationCheckbox = page.locator('#confirmOriginalDetails');
        this.savePaymentButton = page.locator('#savePaymentButton');
        this.successMessage = page.getByText(/Details validated and saved successfully/i);
    }

    // Navigate to Payment Details
    
async navigateToPaymentDetails() {
    await this.page.goto('https://codequeue.ciitstudent.com/User/PaymentDetails', {
        waitUntil: 'domcontentloaded',
        timeout: 30000
    });

    await expect(this.page).toHaveURL(/\/User\/PaymentDetails\/?$/);
}

    // Select UPI payment method
    async selectUPIMethod() {
        await expect(this.upiOption).toBeVisible();
        await this.upiOption.click();
    }

    // Enter UPI ID
    async enterUPIId(upiId: string) {
        await expect(this.upiIdInput).toBeVisible();
        await this.upiIdInput.fill(upiId);
    }

    // Select Bank Account method
    async selectBankAccountMethod() {
    await this.page.waitForLoadState('domcontentloaded').catch(() => {});

    console.log('Current URL:', this.page.url());

    const bankButton = this.page.locator(
        '#paymentDetailsForm button[data-method="Bank"]'
    );

    console.log('Bank button count:', await bankButton.count());

    await expect(bankButton).toBeVisible({ timeout: 15000 });
    await bankButton.click();
}
    // Enter account holder name
    async enterAccountHolderName() {
        await expect(this.accountHolderInput).toBeVisible();
        await this.accountHolderInput.fill('Prerna Bandi');
    }

    // Enter bank name
    async enterBankName() {
        await expect(this.bankNameInput).toBeVisible();
        await this.bankNameInput.fill('Test Bank');
    }

    // Enter account number
    async enterAccountNumber() {
        await expect(this.accountNumberInput).toBeVisible();
        await this.accountNumberInput.fill('123456789012');
    }

    // Enter IFSC code
    async enterIFSCCode() {
        await expect(this.ifscCodeInput).toBeVisible();
        await this.ifscCodeInput.fill('SBIN0001234');
    }


    // Check confirmation checkbox
    async checkConfirmationCheckbox() {
        await expect(this.confirmationCheckbox).toBeVisible();

        if (!(await this.confirmationCheckbox.isChecked())) {
            await this.confirmationCheckbox.check();
        }
    }

    // Save payment details
    async clickSavePaymentDetails() {
        await expect(this.savePaymentButton).toBeVisible();
        await expect(this.savePaymentButton).toBeEnabled();
        await this.savePaymentButton.click();
    }

    // Verify success message
    async verifyPaymentDetailsSaved() {
        await expect(this.successMessage).toBeVisible();
    }
}
