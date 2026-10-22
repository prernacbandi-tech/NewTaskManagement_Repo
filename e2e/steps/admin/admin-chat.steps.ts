import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';
import { adminChatPage } from '../../pages/admin/adminChatPage';

const { Given, When, Then } = createBdd();

Given('I have logged in as admin', async ({ page }) => {
  await page.goto('/Admin/Dashboard');
});

Given('I navigate to the Chat page', async ({ page }) => {
  const chatPage = new adminChatPage(page);
  await chatPage.navigateToChat();
});

Then('the chats list should be visible', async ({ page }) => {
  const chatPage = new adminChatPage(page);
  await chatPage.verifyChatListIsVisible();
});

When('I type particular user name into the search users input', async ({ page }) => {
  const chatPage = new adminChatPage(page);
  await chatPage.searchUser('Prerna');
});

Then('the user should be displayed in the chat list', async ({ page }) => {
  const chatPage = new adminChatPage(page);
  await chatPage.verifyUserIsInChatList('PrernaBandi');
});

When('I click on the Unread chat filter tab', async ({ page }) => {
    const chatPage = new adminChatPage(page);
    await chatPage.clickUnreadTab();
});

Then('the unread chats should be displayed', async ({ page }) => {
    const chatPage = new adminChatPage(page);
    await chatPage.verifyUnreadChatsDisplayed();
});

When('I click on the All chat filter tab', async ({ page }) => {
    const chatPage = new adminChatPage(page);
    await chatPage.clickAllTab();
});

Then('all chats should be displayed', async ({ page }) => {
    const chatPage = new adminChatPage(page);
    await chatPage.verifyAllChatsDisplayed();
});


When('I click on open chat filter tab', async ({ page }) => {
    const chatPage = new adminChatPage(page);
    await chatPage.clickOpenTab();
});

Then('open chats should be displayed', async ({ page }) => {
    const chatPage = new adminChatPage(page);
    await chatPage.verifyOpenChatsDisplayed();
});

When('I click on hold chat filter tab', async ({ page }) => {
    const chatPage = new adminChatPage(page);
    await chatPage.clickOnHoldTab();
});

Then('on hold chats should be displayed', async ({ page }) => {
    const chatPage = new adminChatPage(page);
    await chatPage.verifyOnHoldChatsDisplayed();
});
