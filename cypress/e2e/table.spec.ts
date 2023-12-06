import { employeePage } from '../pages';
import { Employee } from '../types';

describe('Table Data', () => {
  const { tableSection } = employeePage;

  beforeEach(() => {
    cy.visit('/');
  });

  const verifyTableData = (fixturePath: string) => {
    cy.fixture(fixturePath).then((employeesList: Employee[]) => {
      employeesList.forEach((employee, index) => {
        tableSection
          .row()
          .eq(index)
          .within(() => {
            tableSection.firstNameCell().should('be.visible').and('have.text', employee.FirstName);
            tableSection.lastNameCell().should('be.visible').and('have.text', employee.LastName);
            tableSection.jobTitleCell().should('be.visible').and('have.text', employee.Title);
            tableSection.cityCell().should('be.visible').and('have.text', employee.City);
          });
      });
    });
  };

  it('should properly show the table details', () => {
    tableSection.columnHeader().should('have.length', 4);
    [
      tableSection.FIRST_NAME_TABLE_HEADER,
      tableSection.LAST_NAME_TABLE_HEADER,
      tableSection.JOB_TITLE_TABLE_HEADER,
      tableSection.CITY_NAME_TABLE_HEADER
    ].forEach((headerName, index) => {
      tableSection.columnHeader().eq(index).should('be.visible').and('have.text', headerName);
    });

    tableSection.row().should('have.length', 6);
    tableSection.expandButton().should('be.visible').and('have.length', 1);
    tableSection.collapseButton().should('be.visible').and('have.length', 1);
    tableSection.paginationFooter().should('be.visible');
  });

  it('should properly display the table view when user opens it for the first time', () => {
    verifyTableData('employees-initial-view');
  });

  it('should properly display the table view when user expands the table row', () => {
    tableSection.expandButton().click();
    verifyTableData('employees-expanded-view');
  });

  //TODO: add all other related cases
});
