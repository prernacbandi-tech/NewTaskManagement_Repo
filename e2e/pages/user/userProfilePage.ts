import { Page, Locator, expect } from '@playwright/test';

export class userProfilePage {
    private readonly page: Page;

    //Profile Edit
    private readonly profileMenu: Locator;
    private readonly personalDetails: Locator;
    private readonly editButton: Locator;
    private readonly fullNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly phoneInput: Locator;
    private readonly saveChangesButton: Locator;
    private readonly successMessage: Locator;

    //Password Change
    private readonly currentPassword: Locator;
    private readonly newPassword: Locator;
    private readonly confirmPassword: Locator;
    private readonly sendOtpButton: Locator;
    private readonly otpInput: Locator;
    private readonly verifyButton: Locator;

//--------------------------------------------------------------------------------------------------
    constructor(page: Page) {
        this.page = page;

        this.profileMenu = this.page.locator('a[href="/User/Profile"]');
        this.personalDetails = this.page.getByRole('heading', {name: 'Personal Details',exact: true});
        this.editButton = this.page.getByRole('button', {name: 'Edit',exact: true});
        this.fullNameInput = this.page.getByLabel('Full Name');
        this.emailInput = this.page.getByLabel('Email');
        this.phoneInput = this.page.getByLabel('Phone');
        this.saveChangesButton = this.page.getByRole('button', {name: /save changes/i});
        this.successMessage = this.page.getByText('Profile details updated successfully.',{ exact: true });
    
        this.currentPassword = this.page.locator('#currentPassword');
        this.newPassword = this.page.locator('#newPassword');
        this.confirmPassword = this.page.locator('#confirmPassword');

        this.sendOtpButton = this.page.locator('#sendOtpButton');

        // OTP input चा locator actual HTML नुसार adjust करावा.
        this.otpInput = this.page.locator('#otpInput');

        this.verifyButton = this.page.locator('#verifyOtpButton');
    }
    

//-----------------------------------------------------------------------------------------------
    async clickProfileMenu() {
        await this.profileMenu.click();
    }

    async verifyProfilePage() {
        await expect(this.page).toHaveURL(/\/User\/Profile$/);
    }

    async verifyPersonalDetails() {
        await expect(this.personalDetails).toBeVisible();
    }

    async clickEditButton() {
    await this.editButton.click();

    await expect(this.fullNameInput).toBeEnabled();
    await expect(this.emailInput).toBeEnabled();
    await expect(this.phoneInput).toBeEnabled();
}

    async editFullName(fullName: string) {
        await this.fullNameInput.fill(fullName);
    }

    async editEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async editPhoneNumber(phone: string) {
        await this.phoneInput.fill(phone);
    }

    async clickSaveChanges() {
        await this.saveChangesButton.click();
    }

    async verifyProfileUpdateSuccess() {
        await expect(this.successMessage).toBeVisible();
    }

    async verifyUpdatedProfile() {
        await expect(this.fullNameInput).toHaveValue('PrernaBandii');
        await expect(this.emailInput).toHaveValue('prerna.updated@example.com');
        await expect(this.phoneInput).toHaveValue('9552313391');
    }

    //Password Change
    async openProfilePage() {
        await this.page.goto('/User/Profile');
    }

    async enterCurrentPassword(currPwd: string) {
        await this.currentPassword.fill(currPwd);
    }

    async enterNewPassword(newPwd: string) {
        await this.newPassword.fill(newPwd);
    }

    async confirmNewPassword(confirmPwd: string) {
        await this.confirmPassword.fill(confirmPwd);
    }

    async clickSendOtp() {
    await this.sendOtpButton.click();
}
    async verifyOtpSection() {
    const otpHeading = this.page.getByRole('heading', {
        name: 'Enter your 6-digit OTP',
        exact: true
    });

    const resendLimitMessage = this.page.getByText(
        /maximum OTP resend limit reached/i
    );

    await expect(
        otpHeading.or(resendLimitMessage)
    ).toBeVisible({ timeout: 10000 });

    if (await resendLimitMessage.isVisible()) {
        throw new Error(
            'OTP resend limit reached. Check the backend OTP limit.'
        );
    }
}

    async enterOtp(otp: string) {
        await this.otpInput.fill(otp);
    }

    async clickVerifyAndChangePassword() {
        await this.verifyButton.click();
    }

    async verifyPasswordChanged() {
        await expect(
            this.page.getByText(/password changed successfully/i)
        ).toBeVisible();
    }
}