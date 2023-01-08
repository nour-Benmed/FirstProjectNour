@deleteEmployee
Feature: Suppression employee - OrangeHRM
  En tant qu'admin je veux supprimer un employé

  Background:
    Given Je me connecte à l'application OrangeHRM
    When Je saisie Username "admin"
    And Je saisie Password "admin123"
    And Je clique sur le boutton login

  @deleteEmployee
  Scenario: Ajout employee - OrangeHRM
    When Je clique sur le module PIM
    And Je saisi le numéro de id "2004"
    And je clique sur Search
    And Je clique sur Supprimer
    And Je clique sur Yes Delete
    Then Je vérifie le message de confirmation