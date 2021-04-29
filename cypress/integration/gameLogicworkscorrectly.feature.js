describe("game logic functions as intended", () => {
  it("is expected to show the correct result when the computer choose paper", () => {
      cy.visit("/", {
        onbeforeload(window) {
          cy.stub(window.Math, "random").callsFake(() => {
            return 1;
          });
        },
      });
      cy.get('[data-cy="scissors-button"]').click();
      cy.get('[data-cy="results"]').should("contain", "The winner is player");

      cy.get('[data-cy="rock-button"]').click();
      cy.get('[data-cy="results"]').should("contain", "The winner is computer");

      cy.get('[data-cy="paper-button"]').click();
      cy.get('[data-cy="results"]').should("contain", "The winner is a tie");
    });
  });

