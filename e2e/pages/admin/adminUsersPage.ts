import { Page, Locator, expect } from '@playwright/test';


export class AdminUsersPage {

    private readonly page: Page;
    private readonly usersMenu: Locator;
    private readonly usersHeading: Locator;

    private readonly totalUsers: Locator;
    private readonly activeUsers: Locator;
    private readonly inactiveUsers: Locator;
    private readonly administrators: Locator;

    private readonly userManagementTable: Locator;
    
    //Actions(3 dots)
    private readonly userActionsButton: Locator;
    private readonly userActionOptions: Locator;
    private readonly manageUserOption: Locator;
    private readonly activateUserOption: Locator;
    
    //Manage User
    private readonly roleDropdown: Locator;
    private readonly backToUsersButton: Locator;
    private readonly saveChangesButton: Locator;
    private readonly paymentDetailsHeading: Locator;
    private readonly deleteUserButton: Locator;
//-----------------------------------------------------------------------------------------------------------------
    constructor(page: Page) {
        this.page = page;

        this.usersMenu = this.page.locator('nav.sidebar-nav a.sidebar-link[href="/Admin/Users"]');

        this.usersHeading = page.getByRole('heading', {name: 'Users',exact: true});
    
        this.totalUsers = this.page.getByText('Total Users', { exact: true });
        this.activeUsers = this.page.getByText('Active Users', { exact: true });
        this.inactiveUsers = this.page.getByText('Inactive Users', { exact: true });
        this.administrators = this.page.getByText('Administrators', { exact: true });
        
        this.userManagementTable = this.page.getByText('User Management',{ exact: true });
        
        //Actions(3 dots)
        this.userActionsButton = this.page.getByRole('button', {name: /Open actions for/ });
        this.userActionOptions = this.page.getByRole('menu');

        this.manageUserOption = this.page.getByRole('menuitem', {name: 'Manage User',exact: true});
        this.activateUserOption = this.page.getByRole('menuitem', {name: 'Activate User',exact: true});

        this.roleDropdown = this.page.locator('select');

        this.backToUsersButton = this.page.getByRole('link', {name: 'Back to Users'});

        this.saveChangesButton = this.page.getByRole('button', {name: 'Save Changes'});

        this.paymentDetailsHeading = this.page.getByRole('heading', {name: 'Payment Details',exact: true});

        this.deleteUserButton = this.page.getByRole('button', {name: 'Delete User'});

    }
    
    
//---------------------------------------------------------------------------------------------------------
    async clickUsers() {
        await this.page.goto('/Admin/Users');
    }

    async verifyUsersPage() {
        await expect(this.usersHeading).toBeVisible();
    }

    async verifyTotalUsers() {
        await expect(this.totalUsers).toBeVisible();
    }

    async verifyActiveUsers() {
        await expect(this.activeUsers).toBeVisible();
    }

    async verifyInactiveUsers() {
        await expect(this.inactiveUsers).toBeVisible();
    }

    async verifyAdministrators() {
        await expect(this.administrators).toBeVisible();
    }

    async clickUserActions() {
        await this.userActionsButton.first().click();
    }

    async verifyUserActionOptions() {
        await expect(this.userActionOptions).toBeVisible();
    }

    async verifyManageUserOption() {
        await expect(this.manageUserOption).toBeVisible();
    }

    async verifyActivateUserOption() {
        await expect(this.activateUserOption).toBeVisible();
    }

    async verifyRoleDropdown() {
        await expect(this.roleDropdown).toBeVisible();
    }

    async verifySaveChangesButton() {
        await expect(this.saveChangesButton).toBeVisible();
    }

    async verifyBackToUsersButton() {
        await expect(this.backToUsersButton).toBeVisible();
    }

    async verifyPaymentDetails() {
        await expect(this.paymentDetailsHeading).toBeVisible();
    }

    async verifyDeleteUserButton() {
        await expect(this.deleteUserButton).toBeVisible();
    }
}