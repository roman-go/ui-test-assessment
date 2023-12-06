# Overview
The Repository contains a test task that was completed as part of a technical interview process. The task was designed to show the coverage of the provided web-page functionality using Cypress. Here you can find the explanation on configuring & executing tests.

### Table of Contents

- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Formatting Code](#formatting-code)
- [Reviewer Notes](#reviewer-notes)

### Getting Started

To set up the repository, follow these steps:

1. Clone the repository.
2. Navigate to the project folder.
3. Run `npm install` to install dependencies.

### Running Tests

Before running the tests, launch the application by running:

`npm run start`

To run the Cypress tests, use one of the following commands:

- For headless mode:

`npm run cy:run`

- For full UI mode:

`npm run cy:run:ui`

To run a specific test, append the `--spec` parameter followed by the test file path.
For example:

`npm run cy:run -- --spec cypress/e2e/login.spec.ts`

### Formatting Code

To format the test code using Prettier, run:

`npm run test:format`

### Reviewer Notes

Please note that some portions of the initial code were slightly modified to complete the tests and ensure accurate behavior verification. In a real-life scenario, I would collaborate with the team to agree on the best workable solution for everyone. Also I'd discuss with the dev team the appropriate selectors for the specific pge elements, like buttons or page title, etc.