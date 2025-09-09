Feature: EPAM Client Work Navigation

  Scenario: Navigate to Client Work page and verify content
    Given I am on the EPAM homepage
    When I select "Services" from the header menu
    And I click "Explore Our Client Work"
    Then I should see the text "Client Work"

  Scenario: Navigate to Client Work page on mobile viewport
    Given I am on the EPAM homepage with a mobile viewport
    When I open the mobile menu
    And I select "Services" from the mobile menu
    And I click "Explore Our Client Work"
    Then I should see the text "Client Work"