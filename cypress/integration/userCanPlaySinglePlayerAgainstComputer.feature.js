describe("User can play against the computer in singleplayer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to show three choices", () => {
    cy.get('[data-cy="options-menu"]').within(() => {
      cy.get('[data-cy="rock"]').should("contain", "Rock");
      cy.get('[data-cy="paper"]').should("contain", "Paper");
      cy.get('[data-cy="scissors"]').should("contain", "Scissors");
    });
  });
});
