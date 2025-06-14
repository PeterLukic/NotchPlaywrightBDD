Feature: Qa Task scenario

  @SendMessageValidData
  Scenario: Send message with valid data
    Given I navigate to the qa task page
    Then I should see the qa task page
    And I fill first name with value "John"
    And I fill last name with value "Doe"
    And I fill email with value "John.Doe@gmail.com"
    And I fill phone with value "1234567890"
    And I select "Google" from how did you hear about us
    And I select service "AI Discovery"
    And I fill project details with value "This is best project ever !!!"
    And I upload file "myFile.pdf" from utils folder
    Then I should see file "myFile.pdf" was uploaded
    And I click privacy policy checkbox
    And I click on button Send message
    When I fill all data I need to see message "Thanks for contacting us! We will get in touch with you shortly."

  @SendMessageInvalidData
  Scenario: Send message with invalid data
    Given I navigate to the qa task page
    Then I should see the qa task page
    And I click on button Send message
    Then I should see "first name" validation message "This field is required."
    Then I should see "last name" validation message "This field is required."
    Then I should see "email" validation message "This field is required."
    Then I should see "privacy policy" validation message "This field is required."

  @SendMessageFailed
  Scenario: Send message with invalid data failed
    Given I navigate to the qa task page
    Then I should see the qa task page
    And I click on button Send message
    Then I should see "first name" validation message "failed validation"



