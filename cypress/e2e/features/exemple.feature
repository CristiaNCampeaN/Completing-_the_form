Feature: Verify form

  Background:
    Given the user navigate to "Home Page"


  Scenario: Checking Contact Us form with valid credentials
    When the user complete the "Contact Us" form
      | input field | Name        | $random.name     |
      | input field | Email       | $random.email    |
      | input field | Phone       | $random.phone    |
      | input field | Subject     | $random.subject  |
      | input field | Message     | $random.message  |
    When the user click on "Submit" "button"
