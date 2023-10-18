Cypress.Commands.add('login', (user, password) => {
    cy.session(user, () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.get('img[alt="client brand banner"]').should('be.visible')
    })
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

Cypress.Commands.add('clickLink', (label) => {
    cy.get('span').contains(label).click()
})