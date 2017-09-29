import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selector', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use ina dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'scoot-allen', firstName: 'Scott', lastName: 'Allen'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scoot-allen', text: 'Scott Allen'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
