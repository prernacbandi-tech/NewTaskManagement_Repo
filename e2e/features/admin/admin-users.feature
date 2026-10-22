Feature: Admin User Management

    Scenario: Admin views users page
        Given I am on Admin Dashboard
        When I click on Users
        Then I should see Users page

    Scenario: Admin views user statistics
        Given I click on Users
        Then I should see Total Users
        And I should see Active Users
        And I should see Inactive Users
        And I should see Administrators

    
    Scenario: Admin views user action options
        Given I click on Users
        When I click on User Actions
        Then I should see user action options
        And I should see Manage User option
        And I should see Activate User option

   
    Scenario: Admin clicks on Manage User option
        Given I click on Users
        When I click on Manage User option
        Then I should see Role dropdown
        And I should see Save Changes button
        And I should see Back to Users button
        And I should see Payment Details
        And I should see Delete User button

    