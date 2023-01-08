@addEmployee
Feature: Ajout employee - OrangeHRM
  En tant qu'admin je veux ajouter un employé

  Background:
    Given Je me connecte à l'application OrangeHRM
    When Je saisie Username "admin"
    And Je saisie Password "admin123"
    And Je clique sur le boutton login

  @addEmployee
  Scenario: Ajout employee - OrangeHRM
    When Je clique sur le module PIM
    And je clique sur ADD
    And je saisie le first name "Nour"
    And je saisie le middle name  "Nour"
    And je saisie le last name "Benmohamed"
    And je saisie l'id "2004"
    And je clique sur Save
    Then je vérifier l'alerte de confirmation





