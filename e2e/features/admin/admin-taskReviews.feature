Feature: Admin Task Reviews
    
    Scenario: Admin views Task Reviews page
        Given I am on the Admin Dashboard
        When I click on Task Reviews
        Then I should see Task Reviews heading
        And I should see pending reviews count

    Scenario: Admin views Recent Task Submissions
        Given I am on the Admin Dashboard
        When I click on Task Reviews
        Then I should see Recent Task Submissions
        And I should see submitted task details

     Scenario: Admin opens All Task Reviews and searches for a submitted task
        Given I am on the Admin Dashboard
        When I click on Task Reviews
        And I click on View All Tasks button
        Then All Tasks Reviews modal opens
        When I search for required task
        Then I should see the searched task

    Scenario: Admin views task scenario
        Given I am on the Admin Dashboard
        When I click on Task Reviews
        And I click on View All Tasks button
        And I search for required task
        And I click on Scenario button
        Then Task Scenario modal should open
        When I click on close option
        Then Task Scenario modal should close

    Scenario: Admin verifies repository link
        Given I am on the Admin Dashboard
        When I click on Task Reviews
        And I click on View All Tasks button
        And I search for required task
        Then I should see Open Repository link
        When I click on repo link then repo should open

    Scenario: Admin verifies Approve and Reject buttons
        Given I am on the Admin Dashboard
        When I click on Task Reviews
        And I click on View All Tasks button
        And I search for required task
        Then I should see Approve button
        And I should see Reject button

    Scenario: Admin verifies Payment Remaining section
        Given I am on the Admin Dashboard
        When I click on Task Reviews
        Then I should see Payment Remaining section
        And I should click on View All Payments button
        Then All pending payments modal should open
        And I search for task
        And click on pay now button
        Then Payment settlement modal should open
        And I should click on Pay Now button
        And I click on Later Button
