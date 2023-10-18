describe('Interagindo com lista suspensa, checkbox e input radio', () => {

  beforeEach(() => {
    cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
  })

  it('Interagindo com lista suspensa - selecionando item pelo valor (texto)', () => {
    cy.get('#dropdowm-menu-1').select('Python')
  })

  it('Interagindo com lista suspensa - selecionando item pelo valor index', () => {
    cy.get('#dropdowm-menu-1').select(3)
  })

  it('Interagindo com lista suspensa - selecionando todos os itens da lista', () => {
    cy.get('#dropdowm-menu-1').then(($item) => {
      let arrayChildren = $item[0].children
      let childrens = [...arrayChildren]
      childrens.forEach(function (children) {
        cy.get('#dropdowm-menu-1').select(children.value)
      })
    })
  })

  it('Interagindo checkbox - verificando se item está selecionado', () => {
    cy.get('[value="option-3"]').should('be.checked')
  })

  it('Interagindo checkbox - selecionando elementos', () => {
    cy.get('[type="checkbox"]').check(['option-1', 'option-2'])
    cy.get('[type="checkbox"]').check('option-4')
  })

  it('Interagindo com radio buttons - selecionando elementos', () => {
    cy.get('[type="radio"]').check('green')
  })

})

describe('upload de arquivos', () => {
  beforeEach(() => {
    cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
  })

  it('Realizando upload de arquivos', () => {
    cy.get('#myFile').attachFile('Capturar.PNG')
    cy.get('#submit-button').click()
  })

})