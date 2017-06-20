describe('Ford Functions Lab', () => {
  describe('calculateCostOfGas', () => {
    it('Should have a calculateCostOfGas function', () => {
      expect(calculateCostOfGas).toExist()
    })
  })
  
  describe('moneySaver', () => {
    it('Should have a moneySaver function', () => {
      expect(moneySaver).toExist()
    })
    
    it('Should return a string answer.', () => {
      expect(moneySaver()).toBeA('string')
    })
    
    it('Answer should contain cost of driving current car, the cost of driving the hybrid, and the total savings.', () => {
      expect(moneySaver('Kayla', 23, 31, 3, 20, 150)).toInclude('hybrid')
      expect(moneySaver('Paola', 21, 30, 26, 5, 365)).toInclude('cost')
      // expect(moneySaver('Mariah', 19, 27, 4, 200, 358)).toInclude('saving')
    })
    
    it('Should accurately determine Kayla\'s savings.', () => {
      expect(moneySaver('Kayla', 23, 31, 3, 20, 150))
      .toInclude(234)
      // .toBeGreaterThan(234)
      // .toBeLessThan(240)
    })
    it('Should accurately determine Paola\'s savings.', () => {
      expect(moneySaver('Paola', 21, 30, 26, 5, 365))
      .toInclude(730)
      // .toBeGreaterThan(730)
      // .toBeLessThan(740)      
    })
    it('Should accurately determine Mariah\'s savings.', () => {
      expect(moneySaver('Mariah', 19, 27, 4, 200, 358))
      .toInclude(2850)
      // .toBeGreaterThan(2850)
      // .toBeLessThan(2900)      
    })    
  })  
})



