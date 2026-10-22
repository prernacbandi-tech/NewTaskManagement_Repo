Feature: Admin Project Management

    Scenario: Admin creates a new project

        Given I am on Admin Dashboard
        And I click on Projects
        And I click on Add Project
        When I enter project title
        And I enter project description
        And I enter project tech stack
        And I enter project start date
        And I enter project end date
        And I select project status
        And I click on Create Project
        Then I should see the created project

    Scenario: Admin searches for a project

        Given I click on Projects
        When I search for project
        Then I should see the searched project

    Scenario: Admin edits an existing project

        Given I click on Projects
        When I click on More options
        And I click on Edit Project
        And I edit project title
        And I edit project description
        And I edit project tech stack
        And I click on Save Changes

    Scenario: Admin cancels project edit

        Given I click on Projects
        When I click on More options
        And I click on Edit Project
        And I click on Cancel

    Scenario: Admin views project details

        Given I click on Projects
        When I click on View Details
        And I click on Hide

    Scenario: Admin filters projects by status

        Given I click on Projects
        When I select project status filter
        And I click on Reset


    Scenario: Admin manages project tasks

        Given I click on Projects
        When I click on Manage Tasks
        And I click on Add Task
        And I enter task title 
        And I enter task scenario
        And I select task assignee
        And I select task priority
        And I enter task amount
        And I enter task start date
        And I enter task end date
        And I click on Save Task
        Then I should see the created task

    Scenario: Admin cancels task creation
        Given I click on Projects
        When I click on Manage Tasks
        And I click on Add Task
        And I click on Cancel Task
        Then the Add Task modal should close
    
    Scenario: Admin views task details

        Given I click on Projects
        When I click on Manage Tasks
        And I click on Task Details

    Scenario: Admin edits an existing task

        Given I click on Projects
        When I click on Manage Tasks
        And I click on Task Edit
        And I edit task title
        And I edit task scenario
        And I edit task amount
        And I edit task priority
        And I edit task start date
        And I edit task end date
        And I click on Save Task Changes

    Scenario: Admin deletes an existing task
        Given I click on Projects
        When I click on Manage Tasks
        And I click on Task Delete
        Then the task should be deleted

    Scenario: Admin filters tasks by status, priority and assignee
        Given I click on Projects
        When I click on Manage Tasks
        And I select task status filter
        And I select task priority filter
        And I select task assignee filter
        And I click on Task Reset        
        Then task filters should be reset
        When I click on Back to Projects
        Then I should be on Projects page