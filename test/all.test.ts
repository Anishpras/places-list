import { getCountriesName } from '../src';
import { countryData } from '../src/data';

describe('Country List', () => {
  it('works', () => {
    expect(getCountriesName()).toEqual(countryData);
  });
});
