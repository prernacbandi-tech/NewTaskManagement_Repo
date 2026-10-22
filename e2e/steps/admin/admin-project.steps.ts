
import { createBdd } from 'playwright-bdd';
import { AdminProjectPage } from '../../pages/admin/adminProjectPage';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

// ==================== COMMON ====================

Given('I am on Admin Dashboard', async ({ page }) => {
    await page.goto('/Admin/Dashboard');
});

Given('I click on Projects', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.clickProjects();
});
// ==================== CREATE PROJECT ====================

When('I click on Add Project', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.clickAddProject();
});

When('I enter project title', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.enterProjectTitle('Full Stack Development Project');
});

When('I enter project description', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.enterDescription('Project created using Full Stack');
});

When('I enter project tech stack', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.enterTechStack('ASP.NET Core, SQL Server');
});

When('I enter project start date', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.enterStartDate('2026-10-17');
});

When('I enter project end date', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.enterEndDate('2026-10-30');
});

When('I select project status', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.selectStatus('Active');
});

When('I click on Create Project', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.clickCreateProject();
});

Then('I should see the created project', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.verifyCreatedProject('Full Stack Development Project');
});

// ==================== SEARCH PROJECT ====================

When('I search for project', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.searchProject('Full Stack Development Project');
});

Then('I should see the searched project', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.verifySearchedProject('Full Stack Development Project');
});

// ==================== EDIT PROJECT ====================

When('I click on More options', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.clickMoreOptions();
});

When('I click on Edit Project', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.clickEditProject();
});

When('I edit project title', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.editProjectTitle('Full Stack Development Updated');
});

When('I edit project description', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.editProjectDescription('Updated project description');
});

When('I edit project tech stack', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.editProjectTechStack('ASP.NET Core');
});

When('I click on Save Changes', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.clickSaveChanges();
});

When('I click on Cancel', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.clickCancel();
});

// ==================== PROJECT DETAILS ====================

When('I click on View Details', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.clickViewDetails();
});

When('I click on Hide', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.clickHide();
});

// ==================== PROJECT STATUS FILTER ====================

When('I select project status filter', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.selectStatusFilter('Active');
});

When('I click on Reset', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.clickReset();
});

// ==================== MANAGE PROJECT TASKS ====================

When('I click on Manage Tasks', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.clickManageTasks();
});

When('I click on Add Task', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.clickAddTask();
});


When('I enter task title', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.enterTaskTitle('Test Task');
});


When('I enter task scenario', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.enterTaskScenario('Verify the given task');
});

When('I select task assignee', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.selectAssignedTo('Prerna Bandi');
});

When('I select task priority', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.selectTaskPriority('Medium');
});

When('I enter task amount', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.enterTaskAmount('100');
});

When('I enter task start date', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.enterTaskStartDate('2026-10-17');
});

When('I enter task end date', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.enterTaskEndDate('2026-10-19');
});

When('I click on Save Task', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.clickSaveTask();
});

Then('I should see the created task', async ({ page }) => {
    await page.getByRole('heading', { name: 'Test Task New' }).waitFor({
        state: 'visible'
    });
});

When('I click on Cancel Task', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.clickCancelTask();
});

Then('the Add Task modal should close', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);

    await taskPage.verifyTaskModalClosed();
});

// ==================== VIEW TASK DETAILS ====================

When('I click on Task Details', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.clickTaskDetails();
});

// ==================== EDIT TASK ====================

When('I click on Task Edit', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.clickTaskEdit();
});

When('I edit task title', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.editTaskTitleField('Test Task Updated');
});

When('I edit task scenario', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.editTaskScenarioField('Verify updated admin Test functionality');
});

When('I edit task amount', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.editTaskAmountField('200');
});

When('I edit task priority', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.editTaskPriorityField('High');
});

When('I edit task start date', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.editTaskStartDateField('2026-10-17');
});

When('I edit task end date', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.editTaskEndDateField('2026-10-18');
});

When('I click on Save Task Changes', async ({ page }) => {
    const taskPage = new AdminProjectPage(page);
    await taskPage.clickSaveTaskChanges();
});


When('I click on Task Delete', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);

    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await projectPage.clickTaskDelete();
});

Then('the task should be deleted', async ({ page }) => {
    await page.getByRole('heading', {
        name: 'Project Tasks'
    }).waitFor({ state: 'visible' });
});


When('I select task status filter', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.selectTaskStatus();
});

When('I select task priority filter', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.selectTasksPriority();
});

When('I select task assignee filter', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.selectTaskAssignee();
});

When('I click on Task Reset', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.clickTaskReset();
});

Then('task filters should be reset', async ({ page }) => {
    await expect(page.locator('#taskStatusFilter')).toHaveValue('');
    await expect(page.locator('#taskPriorityFilter')).toHaveValue('');
    await expect(page.locator('#taskAssigneeFilter')).toHaveValue('');
});

When('I click on Back to Projects', async ({ page }) => {
    const projectPage = new AdminProjectPage(page);
    await projectPage.clickBackToProjects();
});

Then('I should be on Projects page', async ({ page }) => {
    await expect(page).toHaveURL('https://codequeue.ciitstudent.com/Admin/Projects');
});