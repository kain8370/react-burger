describe('test burger constructor component', function() {
  before(function() {
    cy.visit('http://localhost:3000');
  });

  it('should open cart page by default', function() {
    cy.get('div[class^=burger-ingredients_container] > div').first().as('bunsContainer');
    cy.get('@bunsContainer').find('[class^=ingredient_link]:nth-child(2) > div').as('bun1');
    cy.get('div[class^=burger-ingredients_container] > div:nth-child(2)').as('saucesContainer');
    cy.get('@saucesContainer').find('[class^=ingredient_link]:nth-child(2) > div').as('ingredient1');
    cy.get('div[class^=burger-ingredients_container] > div:nth-child(3)').as('mainContainer');
    cy.get('@mainContainer').find('[class^=ingredient_link]:nth-child(3) > div').as('main3');
    cy.get('[class^=burger-constructor_container').as('constructorContainer');
    cy.get('@bun1').trigger('dragstart');
    cy.get('@constructorContainer').trigger('drop');
    cy.get('@ingredient1').trigger('dragstart');
    cy.get('@constructorContainer').trigger('drop');
    cy.get('@main3').trigger('dragstart');
    cy.get('@constructorContainer').trigger('drop');
  });
}); 