Feature: User Registration

  Scenario: User signs up with valid credentials
    Given the user is on the login page
    When the user clicks on the Sign Up link
    And enters a valid email, first name, last name, and password
    And clicks on the Sign Up button
    Then the user is navigated to the login page
