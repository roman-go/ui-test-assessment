import { employeePage } from '../pages';

describe('View Selected Data', () => {
  const selectedDataSection = employeePage.viewSelectedDataSection;
  const { tableSection } = employeePage;
  const FIRST_ITEM_SELECTED_DATA = 'Andrew is from Tacoma';

  beforeEach(() => {
    cy.visit('/');
  });

  it('should properly show selected data in the "View" section if one item is selected', () => {
    tableSection.checkbox().first().click();
    selectedDataSection.viewSelectedDataButton().click();

    selectedDataSection.content().should('be.visible');
    selectedDataSection.listItem().should('be.visible').and('have.text', FIRST_ITEM_SELECTED_DATA);
  });

  it('should properly update the "View" section if the user changed the selected items in the table', () => {
    tableSection.checkbox().first().click();
    selectedDataSection.viewSelectedDataButton().click();

    [2, 3, 4].forEach((itemIndex) => {
      tableSection.checkbox().eq(itemIndex).click();
    });

    selectedDataSection.viewSelectedDataButton().click();
    [
      FIRST_ITEM_SELECTED_DATA,
      'Janet is from Kirkland',
      'Margaret is from Redmond',
      'Steven is from London'
    ].forEach((itemSelectedData, index) => {
      selectedDataSection
        .listItem()
        .eq(index)
        .should('be.visible')
        .and('have.text', itemSelectedData);
    });
  });

  it('should show the empty "View" section if user presses button with no selected table items', () => {
    selectedDataSection.content().should('not.exist');
    selectedDataSection
      .viewSelectedDataButton()
      .should('be.visible')
      .and('have.text', selectedDataSection.VIEW_SELECTED_BUTTON_TEXT);
    selectedDataSection.viewSelectedDataButton().click();

    selectedDataSection.content().should('be.visible');
    selectedDataSection.listItem().should('not.exist');
    selectedDataSection.viewSelectedDataButton().should('be.visible');
  });

  //TODO: add all other related cases
});
