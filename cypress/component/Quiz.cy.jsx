import React from 'react';
import Quiz from '../../client/src/components/Quiz';

describe('<currentQuestion />', () => {
  it('shoud render the Quiz component', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<currentQuestion />);
  });

  it('should render the Quiz component with the proper content', () => {
    cy.mount(<currentQuestion />);
    cy.get('h2').should('have.text', 'Current Question');
  });
});