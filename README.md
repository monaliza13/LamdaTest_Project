# Assignment Task: Cypress 101

##Test Scenario 1:
1. Open the https://www.lambdatest.com/selenium-playground page and
click “Drag & Drop Sliders” under “Progress Bars & Sliders”.
2. Select the slider “Default value 15” and drag the bar to make it 95 by
validating whether the range value shows 95 as required using mouse
click events of CypressIO.

**Following are the test cases implemented**
  
 TC_1_drag_drop <br>
* Launch browser & open https://www.lambdatest.com/selenium-playground <br>
* Click Drag & Drop Sliders<br>
* Select the slider “Default value 15” <br>
* drag the bar to make it 95 by
validating whether the range value shows 95 <br>

 
 TC_2_input_form  
* Launch browser & open https://www.lambdatest.com/selenium-playground <br>  
* Change the viewport toSamsung Note 9   
* Click "Input Form Submit"  
* Verify this form’s accessibility standard using extensions cypress-axe 
* Fill in all the fields and submit  
* Verify performance metrics of the submission page using Cypress
lighthouse commands.
* Validate the message “Thanks for contacting us, we will get back to you shortly.”  <br>

* # Run Test:  

| Run Type | Command |
| ------ | ------ |
| install cypress | `npm install cypress --save-dev` |
| headed   | `npx cypress run -- headed` |
| lambdatest   | `lambdatest-cypress run` |


## Gitpod - Try it out
1. Click on the following link
  https://gitpod.io/?autostart=true#https://github.com/monaliza13/LamdaTest_Project
1. Your environment is being prepared, wait about few seconds (A splash screen will appear)
1. VScode IDE will be displayed, a few seconds later you will see the code.
1. Run in terminal `npx cypress run --headed`
1. Find the test result under folders - `video` and `screenshot`