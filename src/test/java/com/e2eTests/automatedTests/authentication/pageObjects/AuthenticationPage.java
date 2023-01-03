package com.e2eTests.automatedTests.authentication.pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.e2eTests.automatedTests.utilis.BasePage;

public class AuthenticationPage extends BasePage {

	private static final String HOME_PAGE_URL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
	public static String object;

	public AuthenticationPage() {
		PageFactory.initElements(driver, this);
	}

	public void goToHomePage() {
		driver.get(HOME_PAGE_URL);
		wait.forLoading(5);
	}

	/*Locators*/
	final static String USER_NAME = "username";
	final static String USER_PASSWORD = "password";
	final static String BUTTON_LOGIN_ID = "//button[@type='submit']";

	@FindBy(how = How.NAME, using = USER_NAME)
	public static WebElement userName;
	@FindBy(how = How.NAME, using = USER_PASSWORD)
	public static WebElement userPassword;
	@FindBy(how = How.XPATH, using = BUTTON_LOGIN_ID)
	public static WebElement btnLogin;


	/*Methods*/
	public void FillUserName() {
		userName.clear();
		userName.sendKeys("admin");
	}

	public void FillPassword() {
		userPassword.clear();
		userPassword.sendKeys("admin123");
	}

	public void ClickBtnLogin() {
		btnLogin.click();
	}
}
