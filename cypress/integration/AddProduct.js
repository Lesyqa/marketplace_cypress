  
describe('add_product', () => {
    
    beforeEach(() => {
        cy.login('i.partner@marketplace.ru', 'i.partner');
    })


        it('addProduct', () => {
    
            cy.get('div.sidebar-main').should('be.visible').as('mainMenu');
            cy.get('@mainMenu').find('[href=" /marketplace/products/"]').click();
            cy.get('@mainMenu').find('[href="/marketplace/products/add/"]').click();
            cy.get('form#marketplace__product_add').should('be.visible').as('formProductAddStepSection');
            cy.get('div[data-action="change-product-type"]').should('have.class', 'active');
            cy.get('@formProductAddStepSection').find('input[data-target="#marketplace__product_add__sections_modal"]').click();
            cy.get('div#marketplace__product_add__sections_modal').should('be.visible').as('sectionModal');
            cy.get('@sectionModal').find('div[data-id="23"]').click();
            cy.get('@sectionModal').find('button[name="save_section"]').click();
            cy.get('@formProductAddStepSection').find('[href="#next"]').click();
            cy.get('form#marketplace__product_add').should('be.visible').as('formProductAddStepProduct');
    
        })

        
})