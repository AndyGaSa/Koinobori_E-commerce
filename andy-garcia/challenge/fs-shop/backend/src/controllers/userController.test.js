const controller = require('./userController');

describe('Given removeConcidences', () => {
  describe('When is tiggered whit two arrays', () => {
    test('return an array', () => {
      const expected = [
        {
          _id: '6117aed29ced79302ab344b9',
          name: 'Cuba',
        },
      ];
      const sites = [
        {
          _id: '6117a9759d5f822af7a60865',
          name: 'Barcelona',
        },
        {
          _id: '6117aed29ced79302ab344b9',
          name: 'Cuba',
        },
      ];
      const favList = {
        userSites: [
          {
            _id: '6117a9759d5f822af7a60865',
            name: 'Barcelona',
          },
        ],
      };

      const result = controller.removeConcidences(sites, favList);

      expect(result).toEqual(expect.arrayContaining(expected));
    });
  });
});
