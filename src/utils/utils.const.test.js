const extractLengthClothes = require('./utils.const');

describe('Given a extractLengthClothes function', () => {
  describe('When is invoked with a stockList and a category', () => {
    test('Then should return the length-1 of the result, and should be 0', () => {
      // arange
      const stockList = {
        stock: {
          clothes: {
            shorts: [
              {
                id: 0,
                name: 'Lila Jean Shorts',
                imageFront: 'https://cdn.shopify.com/s/files/1/0110/2040/2747/products/ssstufff_shorts_lila3_1500x.jpg',
                imageBack: 'https://cdn.shopify.com/s/files/1/0110/2040/2747/products/ssstufff_shorts_lila3_1500x.jpg',
                imageDetails: [
                  'https://cdn.shopify.com/s/files/1/0110/2040/2747/products/ssstufff_shorts_lila3_1500x.jpg',
                  'https://cdn.shopify.com/s/files/1/0110/2040/2747/products/ssstufff_shorts_lila2_1500x.jpg?v=1627660697',
                  'https://cdn.shopify.com/s/files/1/0110/2040/2747/products/ssstufff_shorts_lila3_1500x.jpg',
                  'https://cdn.shopify.com/s/files/1/0110/2040/2747/products/ssstufff_shorts_lila5_1500x.jpg?v=1627660697'
                ],
                price: '45€',
                description: [
                  'No tissue paper inside.',
                  'KOINOBORI embroidery logo with UV reactive effect.',
                  'The color of the logo will change from Yellow to Green under the sunshine.',
                  '100% cotton 400gsm french terry.',
                  'True to size.'
                ]
              }]
          }
        }
      };
      const category = 'shorts';
      // act
      const result = extractLengthClothes(stockList, category);
      // assert
      expect(result).toBe(0);
    });
  });
});
