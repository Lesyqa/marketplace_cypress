
      
    Cypress.Commands.add('login', (email,password) => {
        cy.visit('http://market-bsn-2-0-3.devsotbit.ru/marketplace/')
        cy.get('div.system_auth__wrap').should('be.visible').as('formAuth');
        cy.get('@formAuth').find('input[name=USER_LOGIN]').type(email);
        cy.get('@formAuth').find('input[name=USER_PASSWORD]').type(password);
        cy.get('@formAuth').find('input[name=USER_REMEMBER]').should('be.checked');
        cy.get('@formAuth').find('button[type=submit]').click();
        cy.url().should('include', '?login=yes');
        cy.get('div#marketplace_navbar').as('header');
    
  
})
 