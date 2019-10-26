package com.qa.runner;



import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/main/java/com/qa/features",
        glue = {"com.qa.stepDefinition"},
        plugin = {"pretty","html:target/cucumber-html-report", "json:target/cucumber-json-report.json" },
        dryRun = false
)

public class TestRunner {
}
