let page;
const DetailsPage = require('./details');

describe('When an instance is created', () => {
  let properties;
  beforeEach(() => {
    page = new DetailsPage();
    properties = Object.keys(page);
  });
  test('Then should have id propierty', () => {
    expect(properties.some('id')), toBe(true);
  });
});
