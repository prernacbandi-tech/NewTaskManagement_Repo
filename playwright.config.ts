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

    // use: {
    //     baseURL: 'https://codequeue.ciitstudent.com',

    //     ...devices['Desktop Chrome'],

    //     trace: 'on-first-retry',

    //     screenshot: 'only-on-failure',

    //     video: 'retain-on-failure',
    // },

    use: {
    baseURL: 'https://codequeue.ciitstudent.com',
    ...devices['Desktop Chrome'],
    headless: false,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
            //args: ['--start-maximized'],

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
            storageState: 'playwright/.auth/admin.json',
        },
        dependencies: ['admin-setup'],
    },

    // User login setup
    {
        name: 'user-setup',
        testDir: './e2e/auth/user',
        testMatch: /user\.setup\.ts/,
    },

    // User tests
    {
        name: 'user-chromium',
        testMatch: /.*\.feature\.spec\.js$/,        
        use: {
            ...devices['Desktop Chrome'],
            storageState: 'playwright/.auth/user.json',
        },
        dependencies: ['user-setup'],
    },
    
    //gmail setup
    {
    name: 'gmail-setup',
    testDir: './e2e/auth',
    testMatch: /gmail\.setup\.ts/,
}
],

});