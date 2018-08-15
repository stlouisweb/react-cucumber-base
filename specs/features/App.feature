Feature: Loading the App

Scenario: Visiting the app landing page
  Given I am a user wanting to see the app
  When I load the app
  Then the app component renders a logo image