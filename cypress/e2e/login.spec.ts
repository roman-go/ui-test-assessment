import { employeePage } from '../pages';

describe('Login', () => {
  const VALID_USERNAME = 'validUsername';
  const VALID_PASSWORD = 'validPassword';
  const { loginSection } = employeePage;

  beforeEach(() => {
    cy.visit('/');
  });

  it('should properly display login details', () => {
    loginSection.title().should('be.visible').and('have.text', loginSection.LOGIN_TITLE);
    loginSection
      .usernameInput()
      .should('be.visible')
      .and('have.attr', 'placeholder', loginSection.USERNAME_FIELD_PLACEHOLDER);
    loginSection
      .passwordInput()
      .should('be.visible')
      .and('have.attr', 'placeholder', loginSection.PASSWORD_FIELD_PLACEHOLDER);
    loginSection
      .signInButton()
      .should('be.visible')
      .and('have.value', loginSection.SIGN_IN_BUTTON_TEXT);
  });

  it('should allow the user to login to the application with correct credentials', () => {
    loginSection.usernameInput().type(VALID_USERNAME);
    loginSection.passwordInput().type(VALID_PASSWORD);
    loginSection.signInButton().click();

    // Here should be the expected check for the success login flow
    // Since the application does not do much on login -> current part is skipped
    // Also we can check that the request has proper payload
  });

  it('should not allow the user to login to the application with incorrect username', () => {
    loginSection.usernameInput().type('invalidUsername');
    loginSection.passwordInput().type(VALID_PASSWORD);
    loginSection.signInButton().click();

    // Here should be the expected check for the failed login flow
  });

  it('should not allow the user to login to the application with incorrect password', () => {
    loginSection.usernameInput().type(VALID_USERNAME);
    loginSection.passwordInput().type('invalidPassword');
    loginSection.signInButton().click();

    // Here should be the expected check for the failed login flow
  });

  //TODO: add all other related cases
});
