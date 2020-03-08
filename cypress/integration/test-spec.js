/// <reference types="Cypress" />

describe('Test form', function(){
    it ('Test link', function(){
        cy.visit('/');

        cy.url()
            .should('include', ':8080');

        cy.pause();
    });
    
    it ('Test title', function(){
        cy.get('h1')
        .should('contain', 'Comentários');
        
        cy.pause();
    });
    
    it('Navegation test', function(){
        cy.get('input.form-control')
            .type('Usuario');
        
        cy.get('textarea.form-control')
            .type('Mensagem de teste.');
        
        cy.get('button.btn')
            .click();
        
        cy.get('a.delete')
            .click();
        
        cy.pause();
    });
});