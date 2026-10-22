import { test as setup } from '@playwright/test';

import { AdminLoginPage } from '../../pages/admin/adminLoginPage';

const authFile = 'playwright/.auth/admin.json';

setup('Admin Login', async ({ page }) => {

    const loginPage = new AdminLoginPage(page);
    await loginPage.openLoginPage();

    await loginPage.enterEmail('admin@taskmanagement.com');

    await loginPage.enterPassword('Admin@123');

    await loginPage.clickLogin();

    await page.waitForURL('**/Admin/**');

    console.log('Admin URL:', page.url());

    await page.context().storageState({
        path: authFile
    
    });
});