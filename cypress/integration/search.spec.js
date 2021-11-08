context("Search", () => {
  it("Enters in landing page and search cep", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
    cy.get("input[type=number]").type(65054310);
    cy.get("button").click();
    cy.contains("Logradouro");
    cy.contains("Rua Cinco");
    cy.contains("Bairro");
    cy.contains("Cohatrac II");
  });
});
