$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("employee/AddEmployee.feature");
formatter.feature({
  "line": 2,
  "name": "Ajout employee - OrangeHRM",
  "description": "En tant qu\u0027admin je veux ajouter un employé",
  "id": "ajout-employee---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@addEmployee"
    }
  ]
});
formatter.before({
  "duration": 1948390400,
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
  "duration": 7239337600,
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
  "duration": 97401200,
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
  "duration": 100020100,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBouttonLogin()"
});
formatter.result({
  "duration": 49350200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Ajout employee - OrangeHRM",
  "description": "",
  "id": "ajout-employee---orangehrm;ajout-employee---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@addEmployee"
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
  "name": "je clique sur ADD",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "je saisie le first name \"Nour\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "je saisie le middle name  \"Nour\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "je saisie le last name \"Benmohamed\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "je saisie l\u0027id \"2004\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "je clique sur Save",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "je vérifier l\u0027alerte de confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeStepDefinitions.jeCliqueSurLeModulePIM()"
});
formatter.result({
  "duration": 4697624800,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStepDefinitions.jeCliqueSurADD()"
});
formatter.result({
  "duration": 4918113100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nour",
      "offset": 25
    }
  ],
  "location": "AddEmployeeStepDefinitions.jeSaisieLeFirstName(String)"
});
formatter.result({
  "duration": 4100563100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nour",
      "offset": 27
    }
  ],
  "location": "AddEmployeeStepDefinitions.jeSaisieLeMiddleName(String)"
});
formatter.result({
  "duration": 4078559000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Benmohamed",
      "offset": 24
    }
  ],
  "location": "AddEmployeeStepDefinitions.jeSaisieLeLastName(String)"
});
formatter.result({
  "duration": 4092074800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2004",
      "offset": 16
    }
  ],
  "location": "AddEmployeeStepDefinitions.jeSaisieLId(String)"
});
formatter.result({
  "duration": 4210192900,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStepDefinitions.jeCliqueSurSave()"
});
formatter.result({
  "duration": 7069162700,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStepDefinitions.jeVérifierLAlerteDeConfirmation()"
});
formatter.result({
  "duration": 2054180400,
  "status": "passed"
});
formatter.after({
  "duration": 140700,
  "status": "passed"
});
formatter.uri("employee/DeleteEmployee.feature");
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
  "duration": 1224729800,
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
  "duration": 9048786400,
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
  "duration": 93694700,
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
  "duration": 87988300,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBouttonLogin()"
});
formatter.result({
  "duration": 48135800,
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
  "duration": 4750906000,
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
  "duration": 4111144900,
  "status": "passed"
});
formatter.match({
  "location": "DeleteEmployeeStepDefinitions.jeCliqueSurSearch()"
});
formatter.result({
  "duration": 4065034000,
  "status": "passed"
});
formatter.match({
  "location": "DeleteEmployeeStepDefinitions.jeCliqueSurSupprimer()"
});
formatter.result({
  "duration": 4062009900,
  "status": "passed"
});
formatter.match({
  "location": "DeleteEmployeeStepDefinitions.jeCliqueSurYesDelete()"
});
formatter.result({
  "duration": 4073563500,
  "status": "passed"
});
formatter.match({
  "location": "DeleteEmployeeStepDefinitions.jeVérifieLeMessageDeConfirmation()"
});
formatter.result({
  "duration": 2059023700,
  "status": "passed"
});
formatter.after({
  "duration": 67000,
  "status": "passed"
});
});