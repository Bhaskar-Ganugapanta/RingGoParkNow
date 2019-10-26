package com.qa.util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;


public class TestBase {

    public  static WebDriver driver;
    public  static Properties prop;

    String path = System.getProperty("user.dir");

    public TestBase() {
        try {
            prop = new Properties();
            String propertiesFilePath = path+"/config.properties";
            FileInputStream file = new FileInputStream(propertiesFilePath);
            prop.load(file);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public  void initialization()  {
        String browserName = prop.getProperty("browser");
       String driverPath = null;
        if(browserName.equals("chrome"))
            driverPath = path+"/Browsers/chromedriver";
        System.setProperty("webdriver.chrome.driver",driverPath);
           // System.setProperty("webdriver.chrome.driver","Macintosh HD/Users/jyothibhaskar/Downloads/chromedriver");
        driver  = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.get(prop.getProperty("url"));
    }

    public void tearDown()
    {

        driver.quit();
    }
}


