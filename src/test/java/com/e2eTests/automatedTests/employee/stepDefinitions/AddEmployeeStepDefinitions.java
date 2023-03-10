package com.e2eTests.automatedTests.employee.stepDefinitions;

import com.e2eTests.automatedTests.employee.pageObjects.AddEmployeePage;
import com.e2eTests.automatedTests.utilis.Setup;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class AddEmployeeStepDefinitions {

    public WebDriver driver;
    private AddEmployeePage addEmployeePage = new AddEmployeePage();

    public void BuzzStepDefinitions() {
        driver = Setup.driver;
        PageFactory.initElements(driver, AddEmployeePage.class);
    }


    @When("^Je clique sur le module PIM$")
    public void jeCliqueSurLeModulePIM() throws Throwable {
        addEmployeePage.ClickOnMenuPim();
    }

    @When("^je clique sur ADD$")
    public void jeCliqueSurADD() throws Throwable {
        addEmployeePage.ClickOnButtonAdd();
    }

    @When("^je saisie le first name \"([^\"]*)\"$")
    public void jeSaisieLeFirstName(String name) throws Throwable {
        addEmployeePage.FillFirstNameEmployee(name);
    }

    @When("^je saisie le middle name  \"([^\"]*)\"$")
    public void jeSaisieLeMiddleName(String name) throws Throwable {
        addEmployeePage.FillMiddleNameEmployee(name);
    }

    @When("^je saisie le last name \"([^\"]*)\"$")
    public void jeSaisieLeLastName(String name) throws Throwable {
        addEmployeePage.FillLastNameEmployee(name);
    }

    @When("^je saisie l'id \"([^\"]*)\"$")
    public void jeSaisieLId(String id) throws Throwable {
        addEmployeePage.FillIdEmployee(id);
    }

    @When("^je clique sur Save$")
    public void jeCliqueSurSave() throws Throwable {
        addEmployeePage.SaveEmployee();
    }

    @Then("^je vérifier l'alerte de confirmation$")
    public void jeVérifierLAlerteDeConfirmation() throws Throwable {
        Thread.sleep(2000);
        String textMessage = AddEmployeePage.alert.getText();
        Assert.assertEquals("Successfully Saved", textMessage);
        System.out.println("Message de confirmation est " + textMessage);
    }
}
