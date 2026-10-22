
Feature: User Notification and Task Assignment

  Scenario: User views notifications and accepts a task assignment
    Given I am logged in as a User
    When I click on the Notifications menu
    Then I should see the Notifications page
    When I click on the new task assignment in the inbox
    Then I should see the New Task Assignment page
    When I click on the Accept button
    Then The task assignment status should be Accepted in the inbox
        
Scenario: User rejects a task assignment
    Given I am logged in as a User
    When I click on the Notifications menu
    Then I should see the Notifications page
    When I click on the new task assignment in the inbox
    Then I should see the New Task Assignment page
    When I click on the Reject button
    Then The task assignment status should be Rejected in the inbox

Scenario: User clicks Back to Notifications and clears all task notifications
    Given I am logged in as a User
    When I click on the Notifications menu
    Then I should see the Notifications page
    When I click on the new task assignment in the inbox
    Then I should see the New Task Assignment page
    When I click on the Back to Notifications button
    Then I should return to the Notifications page
    When I click on clear all button
    Then All task notifications should be cleared

