package com.e2eTests.automatedTests.buzz.pageObjects;

import com.e2eTests.automatedTests.utilis.BasePage;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class BuzzPage extends BasePage {
    public static String object;
    public BuzzPage() {
        PageFactory.initElements(driver, this);
    }
    final static String BUZZ ="//body/div[@id='app']/div[1]/div[1]/aside[1]/nav[1]/div[2]/ul[1]/li[11]/a[1]/span[1]";

    @FindBy(how = How.XPATH, using = BUZZ)
    public static WebElement buzz;

    public void ClickOnBuzz() throws InterruptedException {
        Thread.sleep(5000);
        buzz.click();
    }


}
