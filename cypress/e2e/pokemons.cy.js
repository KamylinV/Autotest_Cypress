describe('Покупка премиума', function () {

    it('E2E Покупка премиума', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get('input[type="email"]').type('victorkamylin@gmail.com');                   
         cy.get('input[type="password"]').type('BatiA23#$');               
         cy.get('button[type="submit"]').click();                       
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true });
         cy.wait(1000);
         cy.get('[href="/premium"]').click();
         cy.get('.auth__input').type('2');
         cy.get('.auth__form > .button_to_down > .profile__button').click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
         cy.wait(1000);
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1025');
         cy.wait(600);
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.wait(600);
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('cat abormot');
         cy.wait(1000);
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.wait(600);
         cy.get('.payment__adv').click();
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true });
         cy.wait(1000);
         cy.get('[href="/premium"]').click();
         cy.wait(1000);
         cy.get('.k_page_main_premium > .profile-mobile-wrapper > .k_active_premium > .k_title_premium').should('be.visible');
         cy.get('.k_page_main_premium > .profile-mobile-wrapper > .k_active_premium > .k_title_premium').contains('Премиум подключен!');
        
     })
 })