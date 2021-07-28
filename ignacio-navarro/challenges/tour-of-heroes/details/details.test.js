const HeroDetails = require('./details.class.js');

/*
Arrange
Act
Asset
*/

describe('Give HeroDetails', () => {
  let newHero;
  describe('When an instance is created', () => {
    let newHeroDetails;

    beforeEach(() => {
      newHero = new HeroDetails(11, [{ id: 11, name: 'Dr Nice' }]);
      newHeroDetails = Object.keys(newHero);
    });

    test('Then should have id property', () => {
      expect(newHeroDetails.some((key) => key === 'id')).toBe(true);
    });

    test('Then should have name property', () => {
      expect(newHeroDetails.some((key) => key === 'heroDetails')).toBe(true);
    });
    test('Then id should be 11', () => {
      expect(newHero.id).toBe(11);
    });

    test('Then name should be dr nice', () => {
      expect(newHero.heroDetails.name).toBe('Dr Nice');
    });
  });
});
