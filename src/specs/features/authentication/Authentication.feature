@connexion
Feature: Authentication - OrangeHRM
  En tant que utilisateur je souhaite m'authentifier

  @cnx
  Scenario: Authentication - OrangeHRM
    Given Je me connecte à l'application OrangeHRM
    When Je saisie Username
    And Je saisie Password
    And Je clique sur le boutton login
    Then Je me redirige vers le compte admin