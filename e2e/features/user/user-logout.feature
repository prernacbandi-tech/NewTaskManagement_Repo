Feature: User Logout

  Scenario: User logs out successfully
    Given I have logged in as User
    When I click on the Logout button
    Then I should be redirected to the login page