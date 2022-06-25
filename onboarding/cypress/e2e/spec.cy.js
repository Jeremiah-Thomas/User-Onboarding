describe("Onboarding Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("passes", () => {
    cy.visit("http://localhost:3000");
  });

  // Create Helpers
  const firstNameInput = () => cy.get("input[name=first_name]");
  const lastNameInput = () => cy.get("input[name=last_name]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const tosInput = () => cy.get("input[name=ToS_agreed");
  const submitButton = () => cy.get(`input[id="submitBtn"]`);

  it("elements are showing", () => {
    firstNameInput().should("exist");
    lastNameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    tosInput().should("exist");
    submitButton().should("exist");
  });

  describe("Filling out inputs and submit button enabled", () => {
    it("submit button starts out disabled", () => {
      submitButton().should("be.disabled");
    });

    it("can type in inputs", () => {
      firstNameInput()
        .should("have.value", "")
        .type("fname")
        .should("have.value", "fname");

      lastNameInput()
        .should("have.value", "")
        .type("lname")
        .should("have.value", "lname");

      emailInput()
        .should("have.value", "")
        .type("e@mail.com")
        .should("have.value", "e@mail.com");

      passwordInput()
        .should("have.value", "")
        .type("password")
        .should("have.value", "password");

      tosInput().should("not.be.checked").check().should("be.checked");
    });

    it("submit button enables when all inputs are filled out", () => {
      firstNameInput().type("fname");
      lastNameInput().type("lname");
      emailInput().type("e@mail.com");
      passwordInput().type("password");
      tosInput().check();
      submitButton().should("be.enabled");
    });
  });

  describe("Adding a new user", () => {
    it("can submit a new user", () => {
      firstNameInput().type("fname");
      lastNameInput().type("lname");
      emailInput().type("e@mail.com");
      passwordInput().type("password");
      tosInput().check();
      submitButton().click();

      cy.get("pre").contains(`"first_name":"fname"`);
    });
  });
});
