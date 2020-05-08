/** @format */

import {required, IValues} from './Form';

describe('required', () => {
  test("When required is called with empty title, 'This must be populated' should be returned", () => {
    const values: IValues = {
      title: '',
    };
    const result = required('title', values);
    expect(result).toBe('This must be populated');
  });
});
