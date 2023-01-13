$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentication/Authentication.feature");
formatter.feature({
  "line": 2,
  "name": "Authentication - OrangeHRM",
  "description": "En tant que utilisateur je souhaite m\u0027authentifier",
  "id": "authentication---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@connexion"
    }
  ]
});
formatter.before({
  "duration": 2792251700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Authentication - OrangeHRM",
  "description": "",
  "id": "authentication---orangehrm;authentication---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Je me connecte à l\u0027application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Je saisie Username \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Je saisie Password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je clique sur le boutton login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Je me redirige vers le compte admin \"ABcb\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 8977371600,
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
  "duration": 134668000,
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
  "duration": 130675100,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBouttonLogin()"
});
formatter.result({
  "duration": 61366200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABcb",
      "offset": 37
    }
  ],
  "location": "AuthenticationStepDefinitions.jeMeRedirigeVersLeCompteAdmin(String)"
});
formatter.result({
  "duration": 5051838100,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.e2eTests.automatedTests.authentication.stepDefinitions.AuthenticationStepDefinitions.jeMeRedirigeVersLeCompteAdmin(AuthenticationStepDefinitions.java:48)\r\n\tat ✽.Then Je me redirige vers le compte admin \"ABcb\"(authentication/Authentication.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 285328600,
  "status": "passed"
});
});