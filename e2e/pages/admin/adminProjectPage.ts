import { Page, Locator } from '@playwright/test';

export class AdminProjectPage {

    private readonly page: Page;

    private readonly projectsMenu: Locator;

    // Add Project
    private readonly addProjectButton: Locator;
    private readonly projectTitle: Locator;
    private readonly description: Locator;
    private readonly techStack: Locator;
    private readonly startDate: Locator;
    private readonly endDate: Locator;
    private readonly status: Locator;
    private readonly createProjectButton: Locator;

    // Search Project
    private readonly projectSearch: Locator;

    // More Options
    private readonly projectMoreButton: Locator;
    private readonly editProjectButton: Locator;

    // Edit Project
    private readonly editTitleInput: Locator;
    private readonly editDescriptionInput: Locator;
    private readonly editTechStackInput: Locator;
    private readonly cancelButton: Locator;
    private readonly saveChangesButton: Locator;

    // View Details and Hide
    private readonly viewDetailsButton: Locator;
    private readonly hideButton: Locator;

    // Delete Project
    private readonly deleteProjectButton: Locator;

    // Status Filter
    private readonly statusFilter: Locator;

    // Reset
    private readonly resetButton: Locator;

    // Manage Tasks
    private readonly manageTasksButton: Locator;

    // Task Management
    private readonly addTaskButton: Locator;
    private readonly taskTitle: Locator;
    private readonly taskScenario: Locator;
    private readonly taskAssignee: Locator;
    private readonly taskPriority: Locator;
    private readonly taskAmount: Locator;
    private readonly taskStartDate: Locator;
    private readonly taskEndDate: Locator;
    private readonly saveTaskButton: Locator;
    private readonly cancelTaskButton: Locator;

    // Task Details and Edit
    private readonly taskDetailsButton: Locator;
    private readonly taskEditButton: Locator;

    // Edit Task Fields
    private readonly editTaskTitle: Locator;
    private readonly editTaskScenario: Locator;
    private readonly editTaskAssignee: Locator;
    private readonly editTaskPriority: Locator;
    private readonly editTaskAmount: Locator;
    private readonly editTaskStartDate: Locator;
    private readonly editTaskEndDate: Locator;
    private readonly saveTaskChangesButton: Locator;

    //Delete Task 
    private readonly taskDeleteButton: Locator;

    private readonly taskStatusFilter: Locator;
    private readonly taskPriorityFilter: Locator;
    private readonly taskAssigneeFilter: Locator;
    private readonly taskResetButton: Locator;
    
    //Back to Project button
    private readonly backToProjectsButton: Locator;


//-----------------------------------------------------------------------------------------------------------------------
    constructor(page: Page) {

        this.page = page;

        this.projectsMenu = this.page.locator('a[href="/Admin/Projects"]');        
        // Add Project
        this.addProjectButton = this.page.locator('.add-project-btn');
        this.projectTitle = this.page.locator('#ProjectTitle');
        this.description = this.page.locator('#Description');
        this.techStack = this.page.locator('#TechStack');
        this.startDate = this.page.locator('#StartDate');
        this.endDate = this.page.locator('#EndDate');
        this.status = this.page.locator('#Status');
        this.createProjectButton = this.page.getByRole('button', {
            name: 'Create Project'
        });

        // Search Project
        this.projectSearch = this.page.locator('#projectSearch');

        // More Options
        this.projectMoreButton = this.page.locator('.project-more-btn');
        this.editProjectButton = this.page.locator('.project-action-edit');

        // Edit Project
        this.editTitleInput = this.page.getByRole('dialog').getByLabel('Project Title *');
        this.editDescriptionInput = this.page.getByRole('dialog').getByLabel('Description');
        this.editTechStackInput = this.page.getByRole('dialog').getByLabel('Tech Stack');
        this.cancelButton = this.page.locator('#createProjectForm button.btn-secondary[data-bs-dismiss="modal"]');    
        this.saveChangesButton = this.page.locator('#editProjectForm button[type="submit"]');

        // View Details and Hide
        this.viewDetailsButton = this.page.getByRole('button', {name: 'View Details'}).first();

        this.hideButton = this.page.getByRole('button', {name: 'Hide'});

        // Delete Project
        this.deleteProjectButton = this.page.locator('.project-action-delete');

        // Status Filter
        this.statusFilter = this.page.locator('#statusFilter');

        // Reset
        this.resetButton = this.page.getByRole('button', {name: 'Reset'});

        // Manage Tasks
        this.manageTasksButton = this.page.getByRole('button', {name: 'Manage Tasks'}).first();


        // Task Management
        this.addTaskButton = this.page.getByRole('button', { name: 'Add Task' });

        this.addTaskButton = this.page.locator('button:has-text("Add Task")');

        this.taskTitle = this.page.locator('#addTaskForm input[name="Title"]');   
        this.taskScenario = this.page.locator('#addTaskForm textarea[name="Scenario"]');
        this.taskAssignee = this.page.locator('#addAssignedToSearch');
        this.taskPriority = this.page.locator('#addTaskForm select[name="Priority"]');
        this.taskAmount = this.page.locator('#addTaskForm input[name="Amount"]');
        this.taskStartDate = this.page.locator('#addTaskForm input[name="StartDate"]');
        this.taskEndDate = this.page.locator('#addTaskForm input[name="ExpectedEndDate"]');

        this.saveTaskButton = this.page.locator('#addTaskForm button[type="submit"]');
        this.cancelTaskButton = this.page.locator('#addTaskForm button.btn-light[data-bs-dismiss="modal"]');    
        
        // Task Details and Edit
        this.taskDetailsButton = this.page.locator('article').first().locator('button:has-text("Details")');
        this.taskEditButton = this.page.locator('article').first().locator('button:has-text("Edit")');
    
        // Edit Task Fields
        this.editTaskTitle = this.page.locator('#editTaskForm input[name="Title"]');
        this.editTaskScenario = this.page.locator('#editTaskForm textarea[name="Scenario"]');
        this.editTaskAssignee = this.page.locator('#editTaskForm select[name="AssignedTo"]');
        this.editTaskPriority = this.page.locator('#editTaskForm select[name="Priority"]');
        this.editTaskAmount = this.page.locator('#editTaskForm input[name="Amount"]');
        this.editTaskStartDate = this.page.locator('#editTaskForm input[name="StartDate"]');
        this.editTaskEndDate = this.page.locator('#editTaskForm input[name="ExpectedEndDate"]');
        this.saveTaskChangesButton = this.page.locator('#editTaskForm button[type="submit"]');

        //Delete Task
        this.taskDeleteButton = this.page.locator('article').first().getByRole('button', { name: 'Delete', exact: true });
                //this.taskDeleteButton = this.page.locator('.task-action-delete-btn');
        
        this.taskStatusFilter = this.page.locator('#taskStatusFilter');
        this.taskPriorityFilter = this.page.locator('#taskPriorityFilter');
        this.taskAssigneeFilter = this.page.locator('#taskAssigneeFilter');
        this.taskResetButton = this.page.locator('#resetTaskFilters');

        //Back to Project button
        this.backToProjectsButton = this.page.locator('.back-project-btn');
     
    }

//-------------------------------------------------------------------------------------------------------------------
        // Open Projects Page

        async openProjectsPage() {
            await this.page.goto('/Admin/Projects');
        }

        async clickProjects() {
            await this.page.goto('/Admin/Projects');
        }

        // Add Project

        async clickAddProject() {
            await this.addProjectButton.click();
        }

        async enterProjectTitle(title: string) {
            await this.projectTitle.fill(title);
        }

        async enterDescription(description: string) {
            await this.description.fill(description);
        }

        async enterTechStack(techStack: string) {
            await this.techStack.fill(techStack);
        }

        async enterStartDate(startDate: string) {
            await this.startDate.fill(startDate);
        }

        async enterEndDate(endDate: string) {
            await this.endDate.fill(endDate);
        }

        async selectStatus(status: string) {
            await this.status.selectOption({ label: status });
        }

        async clickCreateProject() {
            await this.createProjectButton.click();
        }


        // Search Project

        async searchProject(projectName: string) {
            await this.projectSearch.fill(projectName);
        }

        async verifyCreatedProject(projectName: string) {
            await this.page.getByText(projectName, { exact: true }).first().waitFor({
                state: 'visible'
            });
        }

        async verifySearchedProject(projectName: string) {
            await this.page.getByText(projectName, { exact: true }).first().waitFor({
                state: 'visible'
            });
        }


        // More Options

        async clickMoreOptions() {
            await this.projectMoreButton.first().click();
        }


        // Edit Project

        async clickEditProject() {
            await this.editProjectButton.first().click();
        }

        async editProjectTitle(title: string) {
            await this.editTitleInput.fill(title);
        }

        async editProjectDescription(description: string) {
            await this.editDescriptionInput.fill(description);
        }

        async editProjectTechStack(techStack: string) {
            await this.editTechStackInput.fill(techStack);
        }

        async clickSaveChanges() {
            await this.saveChangesButton.click();
        }

        async clickCancel() {
            await this.cancelButton.click();
        }


        // View Details

        async clickViewDetails() {
            await this.viewDetailsButton.click();
        }

        async clickHide() {
            await this.hideButton.click();
        }


        // Status Filter

        async selectStatusFilter(status: string) {
            await this.statusFilter.selectOption({ label: status });
        }


        // Reset

        async clickReset() {
            await this.resetButton.click();
        }


    // Task Management
        async clickManageTasks() {
            await this.manageTasksButton.click();
        }

        async clickAddTask() {
            await this.addTaskButton.click();
        }

        async enterTaskTitle(title: string) {
            await this.taskTitle.waitFor({ state: 'visible' });
            await this.taskTitle.fill(title);
        }
        async enterTaskScenario(scenario: string) {
            await this.taskScenario.fill(scenario);
        }

        async selectAssignedTo(name: string) {
            await this.taskAssignee.fill(name);

            await this.page.locator('#addAssignedToOptions .user-autocomplete-option').filter({ hasText: name }).click();
        }

        async selectTaskPriority(priority: string) {
            await this.taskPriority.selectOption({ label: priority });
        }

        async enterTaskAmount(amount: string) {
            await this.taskAmount.fill(amount);
        }

        async enterTaskStartDate(date: string) {
            await this.taskStartDate.fill(date);
        }

        async enterTaskEndDate(date: string) {
            await this.taskEndDate.fill(date);
        }

        async clickSaveTask() {
            await this.saveTaskButton.click();
        }

        async clickCancelTask() {
            await this.cancelTaskButton.click();

        }

        async verifyTaskModalClosed() {
            await this.page.locator('#addTaskModal').waitFor({
                state: 'hidden'
            });
        }
        // Task Details

        async clickTaskDetails() {
            await this.taskDetailsButton.click();
        }

        // Edit Task

        async clickTaskEdit() {
            await this.taskEditButton.click();
        }

        async editTaskTitleField(title: string) {
            await this.editTaskTitle.fill(title);
        }

        async editTaskScenarioField(scenario: string) {
            await this.editTaskScenario.fill(scenario);
        }

        async editTaskAmountField(amount: string) {
            await this.editTaskAmount.fill(amount);
        }

        async editTaskPriorityField(priority: string) {
            await this.editTaskPriority.selectOption({ label: priority });
        }

        async editTaskStartDateField(date: string) {
            await this.editTaskStartDate.fill(date);
        }

        async editTaskEndDateField(date: string) {
            await this.editTaskEndDate.fill(date);
        }

        async clickSaveTaskChanges() {
            await this.saveTaskChangesButton.click();
        }

        //Delete Task
        async clickTaskDelete() {
            await this.taskDeleteButton.click();
        }

        async selectTaskStatus() {
            await this.taskStatusFilter.selectOption({ label: 'To Do' });
        }

        async selectTasksPriority() {
            await this.taskPriorityFilter.selectOption({ label: 'High' });
        }

        async selectTaskAssignee() {
            await this.taskAssigneeFilter.selectOption({ label: 'Prerna Bandi' });
        }

        async clickTaskReset() {
            await this.taskResetButton.click();
        }

        //Back to Project button
        async clickBackToProjects() {
            await this.backToProjectsButton.click();
        }
}
