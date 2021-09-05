Feature: BDD Atlas Homepage Color Quote

    I want to be able to submit qoute in various Color

    @YellowColor
    Scenario: I want to be able to submit a Yellow quote
        Given I open BDD Atlas Web
        When I type a quote: Testing text
        And I choose the Yellow color
        Then I verify quote submitted "Yellow" and "Testing text"
        Then I verify quote has been deleted: Testing

    @AllColor
    Scenario Outline: I want to be able to submit a <color> quote
        Given I open BDD Atlas Web
        When I type a quote: Testing text
        And I choose the <colors> color
        Then I verify quote submitted "<colors>" and "Testing text"
        Then I verify quote has been deleted: Testing    
    Examples:
            | colors | 
            | White  | 
            | Blue   | 
            | Cyan   |