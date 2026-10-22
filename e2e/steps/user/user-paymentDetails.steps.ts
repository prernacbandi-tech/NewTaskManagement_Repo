import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { userPaymentDetailsPage } from '../../pages/user/userPaymentDetailsPage';

const { Given, When, Then } = createBdd();

Given('user has already logged in', async ({ page }) => {
    console.log('Before navigation:', page.url());

    await page.goto('https://codequeue.ciitstudent.com/User/Dashboard', {
        waitUntil: 'domcontentloaded',
        timeout: 30000
    });

    console.log('After navigation:', page.url());
});

Given('the user navigates to the Payment Details page', async ({ page }) => {
    const paymentPage = new userPaymentDetailsPage(page);
    await paymentPage.navigateToPaymentDetails();
});

When('the user selects the UPI payment method',async ({ page }) => {
        await new userPaymentDetailsPage(page).selectUPIMethod();
    }
);

When('the user enters the UPI ID',async ({ page }) => {
        await new userPaymentDetailsPage(page).enterUPIId('prerna@okaxis');
    }
);

When('the user checks the confirmation checkbox',async ({ page }) => {
        await new userPaymentDetailsPage(page).checkConfirmationCheckbox();
    }
);

When('clicks on the Save Payment Details button',async ({ page }) => {
        await new userPaymentDetailsPage(page).clickSavePaymentDetails();
    }
);

Then('the payment details should be saved successfully',async ({ page }) => {
        await new userPaymentDetailsPage(page).verifyPaymentDetailsSaved();
    }
);

When('the user selects the Bank Account payment method', async ({ page }) => {
    await new userPaymentDetailsPage(page).selectBankAccountMethod();
});

When('the user enters the account holder name', async ({ page }) => {
    await new userPaymentDetailsPage(page).enterAccountHolderName();
});

When('the user enters the bank name', async ({ page }) => {
    await new userPaymentDetailsPage(page).enterBankName();
});

When('the user enters the account number', async ({ page }) => {
    await new userPaymentDetailsPage(page).enterAccountNumber();
});

When('the user enters the IFSC code', async ({ page }) => {
    await new userPaymentDetailsPage(page).enterIFSCCode();
});