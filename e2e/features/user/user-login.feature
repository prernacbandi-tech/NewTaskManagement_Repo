Feature: User Login

    Scenario: User login with valid credentials

        Given I am on the user login page
        When I enter valid user email address
        And I enter valid user password 
        And I click on Sign in button
        Then I should be logged in