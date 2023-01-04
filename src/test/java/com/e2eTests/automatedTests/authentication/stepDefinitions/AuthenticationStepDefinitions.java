package com.e2eTests.automatedTests.authentication.stepDefinitions;

import cucumber.api.java.en.Given;
import org.junit.Assert;

import com.e2eTests.automatedTests.authentication.pageObjects.AuthenticationPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthenticationStepDefinitions {
	 private AuthenticationPage authenticationPage;
	    public AuthenticationStepDefinitions() {
	        this.authenticationPage = new AuthenticationPage();
	    }

	@Given("^Je me connecte à l'application OrangeHRM$")
	public void jeMeConnecteÀLApplicationOrangeHRM() throws InterruptedException {
			authenticationPage.goToHomePage();
			Thread.sleep(5000);
	}


	@When("^Je saisie Username \"([^\"]*)\"$")
	public void jeSaisieUsername(String name)  {
		authenticationPage.FillUserName(name);
	}

	@When("^Je saisie Password \"([^\"]*)\"$")
	public void jeSaisiePassword(String password) {
		authenticationPage.FillPassword(password);
	}

	@When("^Je clique sur le boutton login$")
	public void jeCliqueSurLeBouttonLogin() {
			authenticationPage.ClickBtnLogin();
	}

	@Then("^Je me redirige vers le compte admin$")
	public void jeMeRedirigeVersLeCompteAdmin(){
	}

}
