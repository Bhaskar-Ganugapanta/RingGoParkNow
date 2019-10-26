package com.qa.pages;

import com.qa.util.TestBase;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.Random;

public class RegisterNewUser extends TestBase {

    WebDriver driver;
    @FindBy(id = "field-Member_CLI")
    WebElement mobileNumber;


    @FindBy(id = "field-Member_Email")
    WebElement emailAddress;

    @FindBy(id = "field-MemberPassword")
    WebElement password;

    @FindBy(xpath = "//div[@class='g-recaptcha']")
    WebElement recaptcha;


    @FindBy(id = "qf_e0f86b")
    WebElement termsCheckbox;

    @FindBy(id = "labyrinth_UserDetails_next")
    WebElement nextButton;

    @FindBy(id = "labyrinth_finish")
    WebElement finishButton;

    @FindBy(xpath = "//p[contains(text(),'There is an error in the form. Please check for de')]")
    WebElement errorMessage;


    public RegisterNewUser(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }


    public String validateRegistrationPage() {
        return driver.getTitle();
    }

    public void enterValidMobileNumber() {
        mobileNumber.clear();
        String val_mobile_number = getRandomMobileNum();
        mobileNumber.sendKeys(val_mobile_number);

    }


    private String getRandomMobileNum() {
        Random generator = new Random();

        int num1, num2, num3;

        num1 = generator.nextInt(9) + 2;

        num1 = generator.nextInt(7) - 3;

        num1 = generator.nextInt(6) + 4;

        num2 = generator.nextInt(999) - 2;

        num3 = generator.nextInt(6000);


        String phoneNumber = String.format("%d%d%d%03d%04d", num1, num1, num1, num2, num3);
        phoneNumber = "0" + phoneNumber;
        System.out.println(phoneNumber);
        return phoneNumber;
    }

    public void enterInValidMobileNumber() {
        mobileNumber.clear();
        mobileNumber.sendKeys(prop.getProperty("invalid_mobilenumber"));

    }

    public void mobileNumberFieldEmpty() {
        mobileNumber.clear();
        mobileNumber.sendKeys(" ");

    }

    public void enterValidEmailAddress() {
        emailAddress.clear();
        String val_email_address = getRandomEmail();
        emailAddress.sendKeys(val_email_address);

    }

    private String getRandomEmail() {
        String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();
        while (salt.length() < 10) {
            int index = (int) (rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }
        String saltStr = salt.toString();
        return saltStr + "@gmail.com";

    }

    public void enterInValidEmailAddress() {
        emailAddress.clear();
        emailAddress.sendKeys(prop.getProperty("invalid_emailaddress"));

    }

    public void emailAddressFieldEmpty() {
        emailAddress.clear();
        emailAddress.sendKeys(" ");

    }

    public void enterValidPassword(String val_password) {
        password.sendKeys(val_password);

    }

    public void enterInValidPassword() {
        password.clear();
        password.sendKeys("test");

    }

    public void passwordFieldEmpty() {
        password.clear();
        password.sendKeys("");

    }

    public void clickOnRecaptcha() {
        recaptcha.click();
    }

    public void clickOnTermsAndConditions() {
        termsCheckbox.click();
    }

    public void clickOnNextButton() {
        nextButton.click();


    }

    public String displayErrorMessage() {

        String errorMessageText = errorMessage.getText();
        return errorMessageText;

    }

    public RingGoDashBoard clickOnFinishButton() {
        finishButton.click();
        return new RingGoDashBoard();

    }


}




