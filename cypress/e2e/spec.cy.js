describe('playlist app', () => {
  const inputs = ['Summer Breeze', 'Autumn Leaves', 'Winter Winds', 'Spring Dance', 'Rainy Mood'];

  beforeEach(() => {
    cy.visit('/');
  });

  it('Search functionality:', () => {

    for ( let i = 0; i < inputs.lenght; i++) {
      const input = inputs[i];

      cy.get('[id=":r0:"]').type(input);
      cy.get('.MuiTypography-root.MuiTypography-body1').should('contain', input);
    }
  })

  it('Add track using "+" button', () => {
    cy.contains('.MuiGrid-item', inputs[1]).parent()
      .find('button')
      .click();
    cy.get('#playlist').should('contain', inputs[1]); 
  })

  it('Add track using "+" button', () => {
    cy.contains('.MuiGrid-item', inputs[1]).parent()
      .find('input[type="checkbox"]')
      .click();
    cy.contains('.MuiGrid-item', inputs[2]).parent()
      .find('input[type="checkbox"]')
      .click();
    cy.contains('.MuiGrid-item', inputs[3]).parent()
      .find('input[type="checkbox"]')
      .click();
    cy.get('.MuiButton-sizeMedium').click();
    
    cy.get('#tracklist').should('contain', inputs[1]);
    cy.get('#tracklist').should('contain', inputs[2]);
    cy.get('#tracklist').should('contain', inputs[3]);  
  })
})
