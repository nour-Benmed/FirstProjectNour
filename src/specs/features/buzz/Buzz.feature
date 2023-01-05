@buzz
Feature: Buzz - OrangeHRM
  En tant que utilisateur je souhaite exprimer what is my mind

  Background:
    Given Je me connecte à l'application OrangeHRM
    When Je saisie Username "admin"
    And Je saisie Password "admin123"
    And Je clique sur le boutton login

  @buzz
  Scenario: Buzz - OrangeHRM
    When Je clique sur le module Buzz
    And je saisie un message "I'm happy"
    And je clique sur le boutton Post
    Then je vérifie le message "I'm happy"
