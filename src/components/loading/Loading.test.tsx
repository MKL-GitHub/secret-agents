import React from 'react';
import 'react-native';
import {it} from '@jest/globals';
import {render} from '@testing-library/react-native';
import Loading from './Loading';

describe('Loading component', () => {
  it('отображает корректно, когда isLoading = true', () => {
    render(<Loading isLoading={true}>{}</Loading>);
  });

  it('отображает корректно, когда isLoading = false', () => {
    render(<Loading isLoading={false}>{}</Loading>);
  });
});
