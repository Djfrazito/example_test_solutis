
describe('Trabalhandco com cy.invoke()', () => {

    it('Validando valor do texto', () => {
        cy.visit('https://webdriveruniversity.com/index.html')
        cy.get('#nav-title').invoke('text').should('eql', 'WebdriverUniversity.com (New Approach To Learning)')
    })

    it('Preenchendo input', () => {
        let longText = 'Texto enorme que parece nunca ter fim, pois você quer simular algo o mais perto de como um(a) usuário real usaria a addddddddddddddddddddddddddddddddddddddddddddddddddddddddddplicação sendo testada...'
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        // cy.get('input[name="firstname"]').type(longText)
        cy.get('input[name="firstname"]').invoke('val', longText)
    })

    it('Alterando atributo de links que abrem em outra aba', () => {
        cy.visit('https://webdriveruniversity.com/index.html')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
        cy.origin('https://automationteststore.com/', () => {
            cy.url().should('include', 'automationteststore.com')
        })
    })

})

describe('Trabalhando com cy.its()', () => {

    it('Validando tamanho com its', () => {
        cy.visit('https://webdriveruniversity.com/To-Do-List/index.html')
        cy.get('ul li').its('length').should('be.greaterThan', 2)
    })
})

describe('Trabalhando com cy.its()', () => {
    let user = 'Admin'
    let password = 'admin123'

    it('Validando login com sucesso', () => {
        cy.login(user, password)
    })

    it('Click Link', () => {
        cy.login(user, password)
        cy.clickLink('PIM')
        cy.url().should('include', '/pim/viewEmployeeList')
        cy.clickLink('Leave')
    })
})

describe('Trabalhando com biblioteca if-cypress', () => {

    it.only('Validando com If', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-2"]').if('not.checked').check()
        cy.get('[value="option-3"]').if('checked').log('Já estava marcado!')
    })

})