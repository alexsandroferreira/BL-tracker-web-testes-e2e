describe('Footer Component', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    context('Verifica redirecionamento da página atual', () => {
        it('Deve redirecionar para a página de registro', () => {
          cy.checkCurrentPage('/');
        });
      })
  
    context('Componente footer renderiza corretamente', () => {
        it('Deve validar o conteúdo do texto de Copyright no rodapé', () => {
            cy.get('p.MuiTypography-root.MuiTypography-body1.css-15tn26h')
              .should('contain.text', 'Copyright © 2024');
          });
  
    });
  });