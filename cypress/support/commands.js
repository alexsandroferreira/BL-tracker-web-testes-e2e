  Cypress.Commands.add('checkErrorNotification', (errorMessage) => {
      cy.get('.MuiFormHelperText-root.Mui-error').should('contain', errorMessage);
    });

  Cypress.Commands.add('registerCompany', (nome, nomeComercial, cnpj, pais, estado, cidade, cep, condado, rua, numero, complemento) => {
    cy.visit('/') 
    cy.get('[data-test="company-name"]').type(nome) 
    cy.get('[data-test="business-name"]').type(nomeComercial) 
    cy.get('[data-test="cnpj"]').type(cnpj) 
    cy.get('[data-test="country"]').type(pais) 
    cy.get('[data-test="state"]').type(estado) 
    cy.get('[data-test="city"]').type(cidade) 
    cy.get('[data-test="postalcode"]').type(cep) 
    cy.get('[data-test="county"]').type(condado) 
    cy.get('[data-test="streetname"]').type(rua) 
    cy.get('[data-test="housenumber"]').type(numero) 
    cy.get('[data-test="complement"]').type(complemento) 
    cy.get('[data-test="submit-button"]').click(); 
});

Cypress.Commands.add('checkSuccessNotification', (mensagemNotificacao) => {
    cy.get('section[aria-label="Notifications alt+T"]')
      .find('div[data-title=""]')
      .should('exist')
      .should('be.visible') 
      .should('contain', mensagemNotificacao);
    
    cy.get('button[aria-label="Close toast"]').click();
  });

  Cypress.Commands.add('checkCurrentPage', (expectedPath) => {
    cy.location('pathname').should('equal', expectedPath);
  });

  Cypress.Commands.add('fillCompanyForm', (companyData) => {
    cy.get('[data-test="company-name"]').type(companyData.nome);
    cy.get('[data-test="business-name"]').type(companyData.nomeFantasia);
    cy.get('[data-test="cnpj"]').type(companyData.cnpj);
    cy.get('[data-test="country"]').type(companyData.endereco.pais);
    cy.get('[data-test="state"]').type(companyData.endereco.estado);
    cy.get('[data-test="city"]').type(companyData.endereco.cidade);
    cy.get('[data-test="postalcode"]').type(companyData.endereco.cep);
    cy.get('[data-test="county"]').type(companyData.endereco.bairro);
    cy.get('[data-test="streetname"]').type(companyData.endereco.rua);
    cy.get('[data-test="housenumber"]').type(companyData.endereco.numero);
    cy.get('[data-test="complement"]').type(companyData.endereco.complemento);
    cy.get('[data-test="submit-button"]').click(); 
  });