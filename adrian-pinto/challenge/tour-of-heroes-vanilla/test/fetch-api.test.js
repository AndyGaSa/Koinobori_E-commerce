import callHeroe from '../src/scripts/fetch-api';

describe('Given a new hero api call', () => {
  describe('when fetch reach', async () => {
    const hero = await callHeroe(1, 'id');
    describe('Then respose.ok is 200', () => {
    });
  });
  describe('When fetch fail', async () => {
    const hero = await callHeroe(null, null);
    test('Then get a error message', () => {
      expect(hero.name).toBe('Error');
    });
  });
});
