$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("employee/DeleteEmployee.feature");
formatter.feature({
  "line": 2,
  "name": "Suppression employee - OrangeHRM",
  "description": "En tant qu\u0027admin je veux supprimer un employé",
  "id": "suppression-employee---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@deleteEmployee"
    }
  ]
});
formatter.before({
  "duration": 2806755300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte à l\u0027application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie Username \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie Password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le boutton login",
  "keyword": "And "
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 11239871800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 20
    }
  ],
  "location": "AuthenticationStepDefinitions.jeSaisieUsername(String)"
});
formatter.result({
  "duration": 138013800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 20
    }
  ],
  "location": "AuthenticationStepDefinitions.jeSaisiePassword(String)"
});
formatter.result({
  "duration": 133750300,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBouttonLogin()"
});
formatter.result({
  "duration": 68737400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Ajout employee - OrangeHRM",
  "description": "",
  "id": "suppression-employee---orangehrm;ajout-employee---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@deleteEmployee"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Je clique sur le module PIM",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Je saisi le numéro de id \"2004\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "je clique sur Search",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Je clique sur Supprimer",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Je clique sur Yes Delete",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Je vérifie le message de confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeStepDefinitions.jeCliqueSurLeModulePIM()"
});
formatter.result({
  "duration": 5261745400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2004",
      "offset": 26
    }
  ],
  "location": "DeleteEmployeeStepDefinitions.jeSaisiLeNuméroDeId(String)"
});
formatter.result({
  "duration": 4145028300,
  "status": "passed"
});
formatter.match({
  "location": "DeleteEmployeeStepDefinitions.jeCliqueSurSearch()"
});
formatter.result({
  "duration": 4075345600,
  "status": "passed"
});
formatter.match({
  "location": "DeleteEmployeeStepDefinitions.jeCliqueSurSupprimer()"
});
formatter.result({
  "duration": 4096743500,
  "status": "passed"
});
formatter.match({
  "location": "DeleteEmployeeStepDefinitions.jeCliqueSurYesDelete()"
});
formatter.result({
  "duration": 4097035000,
  "status": "passed"
});
formatter.match({
  "location": "DeleteEmployeeStepDefinitions.jeVérifieLeMessageDeConfirmation()"
});
formatter.result({
  "duration": 37500,
  "status": "passed"
});
formatter.after({
  "duration": 387600,
  "status": "passed"
});
});