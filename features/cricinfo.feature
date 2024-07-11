Feature: The crickinfo website

  Scenario Outline: As a user, I can browse the website and take a screenshot

    Given I am on the home page
     When I click teams,India,players
    Then I should be able to view profile,take screenshot

    # Scenario Outline: As a user, I can see fixtures and take a screenshot

    # Given I am again on the home page
    # When I click teams,fixtures,game,score
    # Then I should be able to view man of the match

