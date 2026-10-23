
import { chromium, test as setup } from '@playwright/test';

setup.setTimeout(0);

setup('Open Gmail and save session', async () => {
    const context = await chromium.launchPersistentContext(
        'playwright/.auth/gmail-profile',
        {
            headless: false
        }
    );

    const page = context.pages()[0] || await context.newPage();

    await page.goto('https://mail.google.com/mail/u/0/#inbox');

    console.log('Gmail browser open aahe.');
    console.log('Ata manually Gmail login kar ani Inbox open kar.');
    console.log('Inbox ughadlyavar terminal madhye Enter press kar.');

    // Inbox open zalyavar terminal madhye Enter daba.
    await new Promise<void>((resolve) => {
        process.stdin.resume();
        process.stdin.once('data', () => resolve());
    });

    await context.storageState({
        path: 'playwright/.auth/gmail.json'
    });

    console.log('Gmail session saved.');
    await context.close();
});
