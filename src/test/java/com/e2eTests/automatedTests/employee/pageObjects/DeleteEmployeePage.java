package com.e2eTests.automatedTests.employee.pageObjects;

import com.e2eTests.automatedTests.utilis.BasePage;
import com.e2eTests.automatedTests.utilis.CommonMethods;
import org.json.simple.JSONObject;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class DeleteEmployeePage extends BasePage {

    public static CommonMethods commonMethods = new CommonMethods(driver);
    static JSONObject object = commonMethods.JsonData(0); // index de case de tabe {}
    public static long mediumWait = Long.valueOf((String) object.get("medium-wait"));
    public DeleteEmployeePage() {
        PageFactory.initElements(driver, this);
    }

    final static String ID_EMPLOYEE ="//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[2]/div[1]/div[2]/input[1]";
    final static String SEARCH_ID ="//button[@type='submit']";
    final static String DELETE_EMPLOYEE ="//i[@class='oxd-icon bi-trash']";
    final static String CONFIRM_DELETE_EMPLOYEE ="//body/div[@id='app']/div[3]/div[1]/div[1]/div[1]/div[3]/button[2]";


    @FindBy(how = How.XPATH, using = ID_EMPLOYEE)
    public static WebElement IdEmployee;
    @FindBy(how = How.XPATH, using = SEARCH_ID)
    public static WebElement searchId;
    @FindBy(how = How.XPATH, using = DELETE_EMPLOYEE)
    public static WebElement deleteEmployee;
    @FindBy(how = How.XPATH, using = CONFIRM_DELETE_EMPLOYEE)
    public static WebElement confirmDeleteEmployee;

    public void FillIdEmployee(String name) throws InterruptedException {
        Thread.sleep(mediumWait);
        IdEmployee.sendKeys(name);
    }

    public void SearchEmployee() throws InterruptedException {
        Thread.sleep(mediumWait);
        JavascriptExecutor jse = ((JavascriptExecutor) driver);
        jse.executeScript("arguments[0].click();", searchId);
        ((JavascriptExecutor) driver).executeScript("window.scrollBy(0,2000)", "");
    }

    public void DeleteEmployee() throws InterruptedException {
        Thread.sleep(mediumWait);
       deleteEmployee.click();
    }

    public void ConfirmDeleteEmployee() throws InterruptedException {
        Thread.sleep(mediumWait);
       for (String winHandle : driver.getWindowHandles()) {
           driver.switchTo().window(winHandle);}
        confirmDeleteEmployee.click();
    }


}
