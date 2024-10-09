import {empresas} from '../../fixtures/companyData.json'
describe('Pagina de registro', () => {
  beforeEach(() => {
    cy.visit('/');
   
})

context('Verifica redirecionamento da página atual', () => {
  it('Deve redirecionar para a página de registro', () => {
    cy.checkCurrentPage('/');
  });
})

context('Cadastro da empresa com sucesso', () => {
  it('Preenche os dados da empresa para ser registrada com sucesso', () => {
    cy.registerCompany(
      'Catarina P',       
      'Catarina Produtos',
      '26444043000150',   
      'Brasil',           
      'RS',               
      'São Leopoldo',     
      '93010050',         
      'Centro',         
      'Rua Independência',  
      '250',              
      'Sala 101'              
    );

    cy.checkSuccessNotification('Cadastro com sucesso');
        
    })
  });

  context('Cadastro com erro', () => {
    it('Deve mostrar erro ao tentar cadastrar sem preencher campos obrigatórios', () => {
    
      cy.get('[data-test="submit-button"]').click();
    
      cy.checkErrorNotification('O nome da Empresa é obrigatório');

      cy.checkErrorNotification('O nome Fantasia é obrigatório');

      cy.checkErrorNotification('CNPJ é obrigatório');

      cy.checkErrorNotification('País é obrigatório.');

      cy.checkErrorNotification('Estado é obrigatório.');

      cy.checkErrorNotification('Estado é obrigatório.');

      cy.checkErrorNotification('Cidade é obrigatório.');

      cy.checkErrorNotification('Cep é obrigatório');

      cy.checkErrorNotification('Bairro é obrigatório.');

      cy.checkErrorNotification('Rua é obrigatório');

      cy.checkErrorNotification('Número é obrigatório');

    });
  });

  context('Cadastro de múltiplas empresas', () => {
    empresas.forEach((empresa) => {
      it(`Deve cadastrar a empresa ${empresa.nome} com sucesso`, () => {
        cy.fillCompanyForm(empresa);
        cy.checkSuccessNotification('Cadastro com sucesso');
      });
    });
  });
});
