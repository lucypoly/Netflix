import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../Search';

let props;

describe('Search', () => {
  beforeEach(() => {
    props = {
      title: 'Search title',
    };
  });

  test('renders correctly', () => {
    const instance = renderer.create(<Search {...props} />);

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
