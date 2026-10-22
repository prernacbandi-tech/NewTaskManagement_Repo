
Feature: Admin Dashboard

    Scenario: Admin views dashboard page
        Given I open Admin Dashboard
        Then I should see Total Projects
        And I should see Total tasks
        And I should see In Progress tasks
        And I should see overdue tasks

    Scenario: Admin views Total projects page
        Given I open Admin Dashboard
        When I click on Total Projects
        And I click on required project
        Then I should see selected project page

    Scenario: Admin views Total tasks page
        Given I open Admin Dashboard
        When I click on Total Tasks
        And I click on required task
        Then I should see selected task page

    Scenario: Admin views In Progress page
        Given I open Admin Dashboard
        When I click on In Progress Tasks
        And I click on required In Progress task
        Then I should see selected In Progress task page
        When I click on close button

    Scenario: Admin views Overdue page
        Given I open Admin Dashboard
        When I click on Overdue
        And I click on required overdue task
        Then I should see selected overdue task page
        When I click the close button

    Scenario: Admin views All Pending Payments
        Given I open Admin Dashboard
        When I click on Review Payments
        Then I should see Pending Payments section
        When I click on View All Payments button
        Then I should see All pending payments modal

    

    