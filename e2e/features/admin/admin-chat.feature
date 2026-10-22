Feature: Admin Chat Management    

  Scenario: Verify chat page elements and search for a user
    Given I have logged in as admin
    And I navigate to the Chat page
    Then the chats list should be visible 
    When I type particular user name into the search users input	
    Then the user should be displayed in the chat list

Scenario: Filter chats by tabs
    Given I have logged in as admin
    And I navigate to the Chat page
    When I click on the Unread chat filter tab
    Then the unread chats should be displayed
    When I click on the All chat filter tab
    Then all chats should be displayed
    When I click on open chat filter tab
    Then open chats should be displayed
    When I click on hold chat filter tab
    Then on hold chats should be displayed

