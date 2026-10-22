Feature: User Profile

  Scenario: User edits and updates profile details
    Given I am already logged in as User
    When I click on the Profile menu
    Then I should see the Profile page
    And I should see the Personal Details section
    And I click on the Edit button
    And I edit the full name
    And I edit the email address
    And I edit the phone number
    And I click on the Save Changes button
    Then I should see the success message "Profile details updated successfully."
    And The profile changes should be updated successfully

  Scenario: User changes password using email OTP
    Given I am logged in as a User
    When I click on the Profile menu
    Then I should see the Profile page
    And I enter the current password
    And I enter the new password
    And I confirm the new password
    And I click on Send OTP to Email
    Then I should see the OTP verification section
    When I open Gmail and get the password change OTP
    And I enter the received OTP
    And I click on Verify and Change Password
    Then I should see the password changed successfully message

