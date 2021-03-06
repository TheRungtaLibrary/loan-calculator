# The Project uses -
  1. React and Javascript for Frontend
  2. https://www.npmjs.com/package/json-server to mock server endpoint
  3. Enzyme for unit tests
  4. https://create-react-app.dev/docs/deployment#static-server to deploy and serve static build (alternative for dist)

# Steps to run
  - Download the project from https://github.com/TheRungtaLibrary/loan-calculator
  - Unzip and Open a Command Line/Terminal and traverse at ROOT directory
  - Run `npm install` to install dependencies
  - Run `json-server --watch src/_mocks_/data.json --port 2000` in the same terminal. The data mocked        service starts at http://localhost:2000/lenderBalanceDetails
  - Open another Command Line/Terminal at ROOT directory and run `npm start`
  - The application will open in a browser tab at `http://localhost:3000/`

# Steps to Static Build
  - The project contains build folder for static deployment
  - Run `serve -s build` at ROOT directory to deploy the static build

# Features of the Task -
  - All input fields are validated with error messages are required in the task
  - Application is responsive with media query

# `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run coverage`

This creates the coverage folder and shows the coverage report of the application. this command can be run on terminal or to look at the coverage report launch index.html file located at coverage/lcov-report/index.html in the browser to look at all the components and statements covered
