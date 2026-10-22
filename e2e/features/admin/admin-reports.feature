Feature: Admin Reports Management

  Scenario: Verify reports page elements
    Given I have logged in as admin
    When I navigate to the Reports page
    Then the Reports page heading should be visible
    And the Reports page description should be visible
    And the task summary cards should be visible
    And the task status overview should be visible
    And the project performance table should be visible
    And the student workload table should be visible

  Scenario: Filter reports by period
    Given I have logged in as admin
    When I navigate to the Reports page
    Then the period filter should be visible
    When I select a different report period
    Then the selected report period should be displayed

  Scenario: Verify export report button
    Given I have logged in as admin already
    When I navigate to the Reports page
    Then the Export Report button should be visible
    When I click the Export Report button
    Then the report should be downloaded
