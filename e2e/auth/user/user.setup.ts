
import { test as setup } from '@playwright/test';

import { UserLoginPage } from '../../pages/user/userLoginPage';

const authFile = 'playwright/.auth/user.json';

setup('User Login', async ({ page }) => {

    const loginPage = new UserLoginPage(page);

    await loginPage.openUserLoginPage();

    await loginPage.enterUserEmail('prernacbandi@gmail.com');

    await loginPage.enterUserPassword('Pass@123');

    await loginPage.clickSignIn();

    await page.waitForURL(url => !url.pathname.match(/\/Account\/Login/i));

    console.log('User URL:', page.url());

    await page.context().storageState({
        path: authFile
    });
});
