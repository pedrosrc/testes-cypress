describe('Teste no Componente Counter', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('deve ser um numero na contagem', () => {
    cy.get('.number').invoke('val').then(value => {
      expect(typeof (parseInt(value))).to.equal('number')
    })
  })

  it('deve iniciar com valor 0', () => {
    cy.get('.number').invoke('text').then(value => {
      expect(parseInt(value)).to.equal(0)
    })
  })

  it('deve incrementar o número corretamente após um número específico de cliques no botão', () => {

    cy.get('.number').invoke('text').then(value => {
      const firstNumber = parseInt(value)
      const numberOfClicks = 10

      for (let i = 0; i < numberOfClicks; i++) {
        cy.wait(500)
        cy.get('.buttonIncrement').click()
        cy.wait(500)
      }
      
      cy.get('.number').invoke('text').then(value => {
        const lastNumber = parseInt(value)
        expect(lastNumber).to.equal(firstNumber + numberOfClicks)
      })
    })
  })

  it('deve aumentar mais 1 ao clicar no botao "+"', () => {

    cy.get('.number').invoke('text').then(value => {
      const firstNumber = parseInt(value)

      cy.wait(500)
      cy.get('.buttonIncrement').click()
      cy.wait(500)
      
      cy.get('.number').invoke('text').then(value => {
        const secondNumber = parseInt(value)
        expect(secondNumber).to.equal(firstNumber +1)
      })
    })
  })

  it('deve diminuir menos 1 ao clicar no botao "-"', () => {
    cy.get('.number').invoke('text').then(value => {
      const firstNumber = parseInt(value)

      cy.wait(500)
      cy.get('.buttonDecrement').click()
      cy.wait(500)
      
      cy.get('.number').invoke('text').then(value => {
        const secondNumber = parseInt(value)
        expect(secondNumber).to.equal(firstNumber -1)
      })
    })
  })
})