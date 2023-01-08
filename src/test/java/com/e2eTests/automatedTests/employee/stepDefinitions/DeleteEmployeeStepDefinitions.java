package com.e2eTests.automatedTests.employee.stepDefinitions;

import com.e2eTests.automatedTests.buzz.pageObjects.BuzzPage;
import com.e2eTests.automatedTests.employee.pageObjects.DeleteEmployeePage;
import com.e2eTests.automatedTests.utilis.Setup;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class DeleteEmployeeStepDefinitions {
    public WebDriver driver;
    private DeleteEmployeePage deleteEmployeePage = new DeleteEmployeePage();

    public void BuzzStepDefinitions() {
        driver = Setup.driver;
        PageFactory.initElements(driver, DeleteEmployeePage.class);
    }

    @When("^Je saisi le numéro de id \"([^\"]*)\"$")
    public void jeSaisiLeNuméroDeId(String name) throws Throwable {
    deleteEmployeePage.FillIdEmployee(name);   }

    @When("^je clique sur Search$")
    public void jeCliqueSurSearch() throws Throwable {
    deleteEmployeePage.SearchEmployee();
    }

    @When("^Je clique sur Supprimer$")
    public void jeCliqueSurSupprimer() throws Throwable {
    deleteEmployeePage.DeleteEmployee();    }

    @When("^Je clique sur Yes Delete$")
    public void jeCliqueSurYesDelete() throws Throwable {
    deleteEmployeePage.ConfirmDeleteEmployee();    }

    @Then("^Je vérifie le message de confirmation$")
    public void jeVérifieLeMessageDeConfirmation() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    }

}
