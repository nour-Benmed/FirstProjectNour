$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buzz/Buzz.feature");
formatter.feature({
  "line": 2,
  "name": "Buzz - OrangeHRM",
  "description": "En tant que utilisateur je souhaite exprimer what is my mind",
  "id": "buzz---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@buzz"
    }
  ]
});
formatter.before({
  "duration": 1992648100,
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
  "duration": 6795179500,
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
  "duration": 76483100,
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
  "duration": 74239200,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBouttonLogin()"
});
formatter.result({
  "duration": 35896700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Buzz - OrangeHRM",
  "description": "",
  "id": "buzz---orangehrm;buzz---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@buzz"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Je clique sur le module Buzz",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "je saisie un message \"I\u0027m happy\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "je clique sur le boutton Post",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "je vérifie le message \"I\u0027m happy\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BuzzStepDefinitions.jeCliqueSurLeModuleBuzz()"
});
formatter.result({
  "duration": 5367934200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I\u0027m happy",
      "offset": 22
    }
  ],
  "location": "BuzzStepDefinitions.jeSaisieUnMessage(String)"
});
formatter.result({
  "duration": 104900,
  "status": "passed"
});
formatter.match({
  "location": "BuzzStepDefinitions.jeCliqueSurLeBouttonPost()"
});
formatter.result({
  "duration": 63200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I\u0027m happy",
      "offset": 23
    }
  ],
  "location": "BuzzStepDefinitions.jeVérifieLeMessage(String)"
});
formatter.result({
  "duration": 134300,
  "status": "passed"
});
formatter.after({
  "duration": 134400,
  "status": "passed"
});
});