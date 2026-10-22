import { Page, Locator, expect } from '@playwright/test';

export class adminChatPage {
    private readonly page: Page;
    private readonly chatMenu: Locator;
    private readonly searchUsersInput: Locator;
    private readonly chatsContainer: Locator;

    private readonly unreadTab: Locator;
    private readonly allTab: Locator;
    private readonly openTab: Locator;
    private readonly onHoldTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.chatMenu = this.page.getByRole('link', { name: 'Chat' });
    this.searchUsersInput = this.page.getByPlaceholder('Search users...');
    this.chatsContainer = this.page.locator('.chats-list'); // Chats list locator

    this.unreadTab = this.page.locator('button[data-filter="unread"]');
    this.allTab = this.page.locator('button[data-filter="all"]');
    this.openTab = this.page.locator('button[data-filter="open"]');
    this.onHoldTab = this.page.locator('button[data-filter="hold"]');
   
    }

  async navigateToChat() {
    await this.chatMenu.click();
  }

  async searchUser(userName: string) {
    await this.searchUsersInput.fill(userName);
  }

  async verifyChatListIsVisible() {
    await expect(this.searchUsersInput).toBeVisible();
  }

  async verifyUserIsInChatList(userName: string) {
    const userElement = this.page.getByText(userName, {
        exact: true
    });

    console.log('User name:', userName);
    console.log('Matching elements:', await userElement.count());

    await expect(userElement.first()).toBeVisible();
}

    // Click Unread tab
    async clickUnreadTab() {
        await expect(this.unreadTab).toBeVisible();
        await this.unreadTab.click();
    }

    // Verify Unread tab and chats
    async verifyUnreadChatsDisplayed() {
    await expect(this.unreadTab).toBeVisible();
    await expect(this.unreadTab).toHaveClass(/active/);
}

    // Click All tab
    async clickAllTab() {
        await expect(this.allTab).toBeVisible();
        await this.allTab.click();
    }

    // Verify All chats
    async verifyAllChatsDisplayed() {
    await expect(this.allTab).toBeVisible();
    await expect(this.allTab).toHaveClass(/active/);
}

    // Click Open filter tab
    async clickOpenTab() {
        await expect(this.openTab).toBeVisible();
        await this.openTab.click();
    }

    // Verify Open chats
    
async verifyOpenChatsDisplayed() {
    await expect(this.openTab).toBeVisible();
    await expect(this.openTab).toHaveClass(/active/);
}


    // Click On Hold filter tab
    async clickOnHoldTab() {
        await expect(this.onHoldTab).toBeVisible();
        await this.onHoldTab.click();
    }

    // Verify On Hold chats
   
async verifyOnHoldChatsDisplayed() {
    await expect(this.onHoldTab).toBeVisible();
    await expect(this.onHoldTab).toHaveClass(/active/);
}





}