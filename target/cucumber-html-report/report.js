$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/com/qa/features/registernewuser.feature");
formatter.feature({
  "name": "Register for RingGo Account",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "new user registration with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on RingGo Registration page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid \"\u003cmobilenumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters valid \"\u003cemailaddress\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on recaptcha button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on T\u0026C Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on next button",
  "keyword": "When "
});
formatter.step({
  "name": "user should navigate to Registration success page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailaddress",
        "password",
        "mobilenumber"
      ]
    },
    {
      "cells": [
        "test@gmail.com",
        "Automation01",
        "0700990090"
      ]
    }
  ]
});
formatter.scenario({
  "name": "new user registration with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on RingGo Registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_is_on_RingGo_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"0700990090\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_enters_valid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"test@gmail.com\" and valid \"Automation01\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_enters_valid_and_valid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on recaptcha button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_clicks_on_recaptcha_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on T\u0026C Privacy Policy",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_clicks_on_T_C_Privacy_Policy()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#qf_e0f86b\"}\n  (Session info: chrome\u003d78.0.3904.70)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Jyothis-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1899:638a:944a:c06c%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: /var/folders/n9/rk3t6p6j0fd...}, goog:chromeOptions: {debuggerAddress: localhost:59885}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2767a70dc540248a01e0024cc3b3823a\n*** Element info: {Using\u003did, value\u003dqf_e0f86b}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat com.qa.pages.RegisterNewUser.clickOnTermsAndConditions(RegisterNewUser.java:147)\n\tat com.qa.stepDefinition.RegisterNewUserSteps.user_clicks_on_T_C_Privacy_Policy(RegisterNewUserSteps.java:61)\n\tat ✽.user clicks on T\u0026C Privacy Policy(file:src/main/java/com/qa/features/registernewuser.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on next button",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_clicks_on_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should navigate to Registration success page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_should_navigate_to_Registration_success_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "new user registration with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on RingGo Registration page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters invalid \"\u003cmobilenumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters invalid \"\u003cemailaddress\u003e\" and invalid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on recaptcha button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on T\u0026C Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on next button",
  "keyword": "When "
});
formatter.step({
  "name": "User should be able to see error message in the form.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailaddress",
        "password",
        "mobilenumber"
      ]
    },
    {
      "cells": [
        "test.com",
        "test",
        "0700"
      ]
    }
  ]
});
formatter.scenario({
  "name": "new user registration with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on RingGo Registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_is_on_RingGo_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid \"0700\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_enters_invalid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid \"test.com\" and invalid \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_enters_invalid_and_invalid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on recaptcha button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_clicks_on_recaptcha_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on T\u0026C Privacy Policy",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_clicks_on_T_C_Privacy_Policy()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#qf_e0f86b\"}\n  (Session info: chrome\u003d78.0.3904.70)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Jyothis-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1899:638a:944a:c06c%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: /var/folders/n9/rk3t6p6j0fd...}, goog:chromeOptions: {debuggerAddress: localhost:59924}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3abae8f7c9c9e8f84218d445aa0ea587\n*** Element info: {Using\u003did, value\u003dqf_e0f86b}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat com.qa.pages.RegisterNewUser.clickOnTermsAndConditions(RegisterNewUser.java:147)\n\tat com.qa.stepDefinition.RegisterNewUserSteps.user_clicks_on_T_C_Privacy_Policy(RegisterNewUserSteps.java:61)\n\tat ✽.user clicks on T\u0026C Privacy Policy(file:src/main/java/com/qa/features/registernewuser.feature:21)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on next button",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_clicks_on_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see error message in the form.",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_should_be_able_to_see_error_in_the_form_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "leave user registration fileds empty",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on RingGo Registration page",
  "keyword": "Given "
});
formatter.step({
  "name": "user leaves \"\u003cmobilenumber\u003e\" fileld empty",
  "keyword": "And "
});
formatter.step({
  "name": "user leaves \"\u003cemailaddress\u003e\" and \"\u003cpassword\u003e\" field empty",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on recaptcha button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on T\u0026C Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on next button",
  "keyword": "When "
});
formatter.step({
  "name": "user should be able to see error message in the form.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailaddress",
        "password",
        "mobilenumber"
      ]
    },
    {
      "cells": [
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "leave user registration fileds empty",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on RingGo Registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_is_on_RingGo_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user leaves \"\" fileld empty",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_leaves_fileld_empty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user leaves \"\" and \"\" field empty",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_leaves_and_field_empty(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on recaptcha button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_clicks_on_recaptcha_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on T\u0026C Privacy Policy",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_clicks_on_T_C_Privacy_Policy()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#qf_e0f86b\"}\n  (Session info: chrome\u003d78.0.3904.70)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Jyothis-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1899:638a:944a:c06c%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: /var/folders/n9/rk3t6p6j0fd...}, goog:chromeOptions: {debuggerAddress: localhost:59965}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0a5fbed05bdc1dae4542da1b2468dd24\n*** Element info: {Using\u003did, value\u003dqf_e0f86b}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat com.qa.pages.RegisterNewUser.clickOnTermsAndConditions(RegisterNewUser.java:147)\n\tat com.qa.stepDefinition.RegisterNewUserSteps.user_clicks_on_T_C_Privacy_Policy(RegisterNewUserSteps.java:61)\n\tat ✽.user clicks on T\u0026C Privacy Policy(file:src/main/java/com/qa/features/registernewuser.feature:33)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on next button",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_clicks_on_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see error message in the form.",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterNewUserSteps.user_should_be_able_to_see_error_in_form_message()"
});
formatter.result({
  "status": "skipped"
});
});