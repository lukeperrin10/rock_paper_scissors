
describe('User can see home page of game', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('is expected to show a header with 2 tabs', () => {
    cy.get('[data-cy=singleplayer]').should('contain', 'SinglePlayer').click();
    
  });
  it('is expected to show 2 buttons to start the game', () => {
    cy.get('[data-cy=start-singleplayer]').click();
  });
  
})

