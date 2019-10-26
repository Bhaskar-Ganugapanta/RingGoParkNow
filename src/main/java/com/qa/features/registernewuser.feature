Feature: Register for RingGo Account

  Scenario Outline: new user registration with valid credentials
    Given user is on RingGo Registration page
    And user enters valid "<mobilenumber>"
    And user enters valid "<emailaddress>" and valid "<password>"
    And user clicks on recaptcha button
    And user clicks on T&C Privacy Policy
    When user clicks on next button
    Then user should navigate to Registration success page
    Examples:
      | emailaddress   | password     | mobilenumber |
      | test@gmail.com | Automation01 | 0700990090   |


  Scenario Outline: new user registration with invalid credentials
    Given user is on RingGo Registration page
    And user enters invalid "<mobilenumber>"
    And user enters invalid "<emailaddress>" and invalid "<password>"
    And user clicks on recaptcha button
    And user clicks on T&C Privacy Policy
    When user clicks on next button
    Then User should be able to see error message in the form.
    Examples:
      | emailaddress | password | mobilenumber |
      | test.com     | test     | 0700         |

  Scenario Outline: leave user registration fileds empty
    Given user is on RingGo Registration page
    And user leaves "<mobilenumber>" fileld empty
    And user leaves "<emailaddress>" and "<password>" field empty
    And user clicks on recaptcha button
    And user clicks on T&C Privacy Policy
    When user clicks on next button
    Then user should be able to see error message in the form.

    Examples:
      | emailaddress | password | mobilenumber |
      |              |          |              |