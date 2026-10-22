Feature: User My Tasks

  Scenario: User views My Tasks page
    Given I am logged in as User
    When I open the My Tasks page
    Then I should see the total tasks summary
    And I should see the in progress tasks summary
    And I should see the on hold tasks summary
    And I should see the completed tasks summary

Scenario: User sees task filters and action buttons
    Given I am logged in as User
    When I open the My Tasks page
    Then I should see the status filter and select the filter I want
    And I should see selected filter task
    And I should see the priority filter and select the priority
    And I should see selected priority task
    And I should see the Reset button
    And I click on View Details button
    Then task details modal should open
    
Scenario: User opens chat with Admin 
    Given I am logged in as User
    When I open the My Tasks page
    And I click on the Chat with Admin button
    Then the chat window should open
    And I should see the Conversations section
    And I should see the task name in the chat header
    And I should see the Start Chat button
    Then I click on start chat button
