Jest is the Unit testing framework it was creatd by face book
It was intented to be used with react framework

looking it features it widly used in javascript

create folder and run npm init -y

install jest library as npm install --save-dev jest

open package.json and update this line
"scripts": {
    "test": "jest"
  },

  npm run test will invoke jest test
  jest follow TDD


test file contain describe is name of the test suite

to create a test case we may use of test function 1.
test function take two  argument.
1.the name of the test case


Jest resport--
https://dkelosky.github.io/jest-stare/

 "jest": {
    "reporters": [
      "default",
      [
        "./node_modules/jest-html-reporter",
        {
          "pageTitle": "Test Report"
        }
      ]
    ]
  }

  to skip test we can use xtest

to run only one test from terminal
npm run test -- -t 'String Operators'
npm run test -f “truth.test.js ” — -t “String”

After installing jest cli
we can use--jest --t “string operators”

https://info340.github.io/jest.html