Feature: User Dashboard

  Scenario: User opens dashboard successfully
    Given I am logged in as User
    When I open the User Dashboard
    Then I should see the total tasks
    And I should see tasks which are in progress 
    And I should see completed tasks
    And I should see the on hold tasks
    And I search for assigned task in search bar
    Then I should see searched task

  Scenario: User sees dashboard navigation and top bar
    Given I am logged in as User
    When I open the User Dashboard
    Then I should see the Dashboard link
    And I should see the My Tasks link
    And I should see the Notifications link
    And I should see the Payment Details link
    And I should see the Profile link
    And I should see the Logout button
    And I should see the theme button
    And I should see the notification button
    And I should see the chat button
    And I should see the user profile button