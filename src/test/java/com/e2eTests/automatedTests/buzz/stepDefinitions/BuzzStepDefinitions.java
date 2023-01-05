package com.e2eTests.automatedTests.buzz.stepDefinitions;

import com.e2eTests.automatedTests.buzz.pageObjects.BuzzPage;
import com.e2eTests.automatedTests.utilis.Setup;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class BuzzStepDefinitions {
    public WebDriver driver;
    private BuzzPage buzzPage = new BuzzPage();

    public void BuzzStepDefinitions() {
        driver = Setup.driver;
        PageFactory.initElements(driver, BuzzPage.class);
    }


    @When("^Je clique sur le module Buzz$")
    public void jeCliqueSurLeModuleBuzz() throws Throwable {
        buzzPage.ClickOnBuzz();
    }

    @When("^je saisie un message \"([^\"]*)\"$")
    public void jeSaisieUnMessage(String arg1) throws Throwable {
    }

    @When("^je clique sur le boutton Post$")
    public void jeCliqueSurLeBouttonPost() throws Throwable {
    }

    @Then("^je vérifie le message \"([^\"]*)\"$")
    public void jeVérifieLeMessage(String arg1) throws Throwable {
    }

}
