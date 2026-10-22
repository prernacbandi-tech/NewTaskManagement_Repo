Feature: Payment Details Management
 
Scenario: Fill and save UPI payment details successfully
    Given user has already logged in 
    And the user navigates to the Payment Details page
    When the user selects the UPI payment method
    And the user enters the UPI ID 
    And the user checks the confirmation checkbox
    And clicks on the Save Payment Details button
    Then the payment details should be saved successfully

Scenario: Fill and save Bank Account payment details successfully
    Given user has already logged in
    And the user navigates to the Payment Details page
    When the user selects the Bank Account payment method
    And the user enters the account holder name 
    And the user enters the bank name 
    And the user enters the account number 
    And the user enters the IFSC code 
    And the user checks the confirmation checkbox
    And clicks on the Save Payment Details button
    Then the payment details should be saved successfully