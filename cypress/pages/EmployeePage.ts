export class EmployeePage {
  readonly loginSection = new LoginSection();
  readonly tableSection = new TableSection();
  readonly viewSelectedDataSection = new ViewSelectedDataSection();
}

class LoginSection {
  readonly LOGIN_TITLE = 'Login';
  readonly USERNAME_FIELD_PLACEHOLDER = 'username';
  readonly PASSWORD_FIELD_PLACEHOLDER = 'password';
  readonly SIGN_IN_BUTTON_TEXT = 'Sign in';

  title() {
    return cy.get('[test-id="login-title"]');
  }

  usernameInput() {
    return cy.get('[test-id="username"]');
  }

  passwordInput() {
    return cy.get('[test-id="password"]');
  }

  signInButton() {
    return cy.get('[test-id="submit-button"]');
  }
}

class TableSection {
  readonly FIRST_NAME_TABLE_HEADER = 'FirstName';
  readonly LAST_NAME_TABLE_HEADER = 'LastName';
  readonly JOB_TITLE_TABLE_HEADER = 'Title';
  readonly CITY_NAME_TABLE_HEADER = 'Title';

  readonly CELL_SELECTOR = '[role="gridcell"]';

  columnHeader() {
    return cy.get('.jqx-grid-column-header');
  }

  row() {
    return cy.get('[role="row"]');
  }

  firstNameCell() {
    return cy.get(`${this.CELL_SELECTOR}:first-of-type`);
  }

  lastNameCell() {
    return cy.get(`${this.CELL_SELECTOR}:nth-of-type(2)`);
  }

  jobTitleCell() {
    return cy.get(`${this.CELL_SELECTOR}:nth-of-type(3)`);
  }

  cityCell() {
    return cy.get(`${this.CELL_SELECTOR}:last-of-type`);
  }

  checkbox() {
    return cy.get('.jqx-tree-grid-checkbox');
  }

  // TODO: create a task to switch class names for collapseButton & expandButton
  collapseButton() {
    return cy.get('.jqx-tree-grid-expand-button');
  }

  expandButton() {
    return cy.get('.jqx-tree-grid-collapse-button');
  }

  paginationFooter() {
    return cy.get('#pagertreeGrid');
  }

  // TODO: add all pagination related selectors
}

class ViewSelectedDataSection {
  readonly VIEW_SELECTED_BUTTON_TEXT = 'View selected data';

  content() {
    return cy.get('#listBoxContentlistBoxSelected');
  }

  listItem() {
    return cy.get('.jqx-listitem-element');
  }

  viewSelectedDataButton() {
    return cy.get('[test-id="view-selected-data-btn"]');
  }
}

export const employeePage = new EmployeePage();
