
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
    features: './e2e/features/**/*.feature',
    steps: './e2e/steps/**/*.ts',
});

export default defineConfig({
    timeout: 60000,

    expect: {
        timeout: 10000,
    },

    testDir,
    fullyParallel: false,
    reporter: 'html',

    use: {
        baseURL: 'https://codequeue.ciitstudent.com',
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        headless: false,
        trace: 'off',
        screenshot: 'only-on-failure',
        video: 'off',
        launchOptions: {
            slowMo: 0,
        },
    },

    projects: [
        // Admin login setup
        {
            name: 'admin-setup',
            testDir: './e2e/auth/admin',
            testMatch: /admin\.setup\.ts/,
        },

        // Admin tests
        {
            name: 'admin-chromium',
            testMatch: /.*\.feature\.spec\.js$/,
            use: {
                ...devices['Desktop Chrome'],
                channel: 'chrome',
                video: 'off',
                storageState: 'playwright/.auth/admin.json',
            },
            dependencies: ['admin-setup'],
        },

        // User login setup
        {
            name: 'user-setup',
            testDir: './e2e/auth/user',
            testMatch: /user\.setup\.ts/,
            use: {
                ...devices['Desktop Chrome'],
                channel: 'chrome',
                headless: false,
                video: 'off',
            },
        },

        // User tests
        {
            name: 'user-chromium',
            testMatch: /.*\.feature\.spec\.js$/,
            use: {
                ...devices['Desktop Chrome'],
                channel: 'chrome',
                headless: false,
                video: 'off',
                storageState: 'playwright/.auth/user.json',
            },
            dependencies: ['user-setup'],
        },

        // Gmail setup
        {
            name: 'gmail-setup',
            testDir: './e2e/auth',
            testMatch: /gmail\.setup\.ts/,
        },
    ],
});
