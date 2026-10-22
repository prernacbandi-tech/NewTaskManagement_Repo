Feature: Admin Logout

  Scenario: Verify admin logout button
    Given I have logged in as admin
    When I navigate to the Admin Dashboard
    Then the admin logout button should be visible

  Scenario: Admin logs out successfully
    Given I have logged in as admin
    When I navigate to the Admin Dashboard
    And I click the admin logout button
    Then I should be redirected to login page