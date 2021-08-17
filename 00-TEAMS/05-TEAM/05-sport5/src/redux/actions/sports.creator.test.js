import axios from 'axios';
import { getCountries } from './sports.creator';

jest.mock('axios');

describe('Given a getCountries function', () => {
  beforeEach(() => {
    axios.mockResolvedValue({
      data: {
        countries: [{ name_en: 'Andorra' }, { name_en: 'Brasil' }, { name_en: 'Spain' }]
      }
    });
  });
  test('Then shold return an array [Andorra,Brasil,Spain]', () => {
    const countriesGetter = getCountries();
    return countriesGetter()
      .then((countries) => expect(countries).toEqual(['Andorra', 'Brasil', 'Spain']));
  });
});
