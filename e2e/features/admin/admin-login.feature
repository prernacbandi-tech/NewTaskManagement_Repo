Feature: Admin Login

    Scenario: Admin login with valid credentials

        Given I am on the Admin login page
        When I enter valid Admin credentials
        And I click on Login
        Then I should be logged in successfully