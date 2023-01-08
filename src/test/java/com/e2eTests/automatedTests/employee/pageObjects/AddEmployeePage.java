package com.e2eTests.automatedTests.employee.pageObjects;

import com.e2eTests.automatedTests.utilis.BasePage;
import com.e2eTests.automatedTests.utilis.CommonMethods;
import org.json.simple.JSONObject;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class AddEmployeePage extends BasePage {

    public static CommonMethods commonMethods = new CommonMethods(driver);
    static JSONObject object = commonMethods.JsonData(0); // index de case de tabe {}
    public static long highWait = Long.valueOf((String) object.get("high-wait"));
    public static long mediumWait = Long.valueOf((String) object.get("medium-wait"));

    public AddEmployeePage() {
        PageFactory.initElements(driver, this);
    }

    final static String MENU_PIM = "//li[@class='oxd-main-menu-item-wrapper'][2]";
    final static String BTN_ADD_EMPLOYEE = "//button[@class='oxd-button oxd-button--medium oxd-button--secondary']";

    final static String First_NAME = "firstName";
    final static String MIDDLE_NAME = "middleName";
    final static String LAST_NAME = "lastName";
    final static String ID = "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/input[1]";
    final static String SAVE_EMPLOYEE = "//button[@type='submit']";


    @FindBy(how = How.XPATH, using = MENU_PIM)
    public static WebElement menuPim;
    @FindBy(how = How.XPATH, using = BTN_ADD_EMPLOYEE)
    public static WebElement btnAddEmployee;
    @FindBy(how = How.NAME, using = First_NAME)
    public static WebElement firstName;
    @FindBy(how = How.NAME, using = MIDDLE_NAME)
    public static WebElement middleName;
    @FindBy(how = How.NAME, using = LAST_NAME)
    public static WebElement lastName;
    @FindBy(how = How.XPATH, using = ID)
    public static WebElement id;
    @FindBy(how = How.XPATH, using = SAVE_EMPLOYEE)
    public static WebElement saveEmployee;

    public void ClickOnMenuPim() throws InterruptedException {
       Thread.sleep(mediumWait);
        menuPim.click();
    }

    public void ClickOnButtonAdd() throws InterruptedException {
        Thread.sleep(mediumWait);
        btnAddEmployee.click();
    }

    public void FillFirstNameEmployee(String name) throws InterruptedException {
        Thread.sleep(mediumWait);
        firstName.sendKeys(name);
    }

    public void FillMiddleNameEmployee(String name) throws InterruptedException {
        Thread.sleep(mediumWait);
        middleName.sendKeys(name);
    }

    public void FillLastNameEmployee(String name) throws InterruptedException {
        Thread.sleep(mediumWait);
        lastName.sendKeys(name);
    }

    public void FillIdEmployee(String name) throws InterruptedException {
        Thread.sleep(mediumWait);

        Actions actions = new Actions(driver);
        actions.keyDown(id, Keys.CONTROL).sendKeys("a").sendKeys("x").keyUp(Keys.CONTROL).perform();
        id.sendKeys(name);
    }

    public void SaveEmployee() throws InterruptedException {
        Thread.sleep(highWait);
        saveEmployee.click();
    }
}
