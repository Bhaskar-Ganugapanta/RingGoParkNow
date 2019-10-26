package com.qa.stepDefinition;

import com.qa.pages.RegisterNewUser;
import com.qa.util.TestBase;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.junit.Assert;

public class RegisterNewUserSteps extends TestBase{

    public RegisterNewUser rnu;

    TestBase tb = new TestBase();

    @Before
    public void setup() {

        tb.initialization();
    }

    @Given("user is on RingGo Registration page")
    public void user_is_on_RingGo_Registration_page() {

        rnu = new RegisterNewUser(driver);
        String rnutitle = rnu.validateRegistrationPage();
        Assert.assertEquals("RingGo Cashless Parking Solution: Register for a RingGo account", rnutitle);

    }

    @Given("user enters valid {string}")
    public void user_enters_valid(String string) {

        rnu = new RegisterNewUser(driver);
        rnu.enterValidMobileNumber();

    }

    @Given("user enters valid {string} and valid {string}")
    public void user_enters_valid_and_valid(String string, String loginpassword) {
        rnu = new RegisterNewUser(driver);
        rnu.enterValidEmailAddress();
        rnu.enterValidPassword(loginpassword);

    }

    @Given("user clicks on recaptcha button")
    public void user_clicks_on_recaptcha_button() throws InterruptedException {
        Thread.sleep(3000);
        rnu.clickOnRecaptcha();


    }

    @Given("user clicks on T&C Privacy Policy")
    public void user_clicks_on_T_C_Privacy_Policy() {

        rnu.clickOnTermsAndConditions();

    }

    @When("user clicks on next button")
    public void user_clicks_on_next_button() {

        rnu.clickOnNextButton();
    }

    @Then("user should navigate to Registration success page")
    public void user_should_navigate_to_Registration_success_page() {

        rnu.clickOnFinishButton();
    }

    @Given("user enters invalid {string}")
    public void user_enters_invalid(String string) {
        rnu = new RegisterNewUser(driver);
        rnu.enterInValidMobileNumber();


    }

    @Given("user enters invalid {string} and invalid {string}")
    public void user_enters_invalid_and_invalid(String string, String string2) {

        rnu = new RegisterNewUser(driver);
        rnu.enterInValidEmailAddress();
        rnu.enterInValidPassword();

    }

    @Then("User should be able to see error message in the form.")
    public void user_should_be_able_to_see_error_in_the_form_message() {

        String errortext = rnu.displayErrorMessage();
        System.out.println(errortext);


    }

    @Given("user leaves {string} fileld empty")
    public void user_leaves_fileld_empty(String string) {

        rnu.mobileNumberFieldEmpty();

    }

    @Given("user leaves {string} and {string} field empty")
    public void user_leaves_and_field_empty(String string, String string2) {

        rnu.emailAddressFieldEmpty();
        rnu.passwordFieldEmpty();

    }

    @Then("user should be able to see error message in the form.")
    public void user_should_be_able_to_see_error_in_form_message() {

        String errortext = rnu.displayErrorMessage();
        System.out.println(errortext);

    }


}
