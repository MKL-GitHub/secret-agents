import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';

import Loading from './Loading';
import {getNativeBaseProvider} from '@utils';

describe('Loading component', () => {
  it('отображает корректно, когда isLoading = true', () => {
    render(getNativeBaseProvider(<Loading isLoading={true}>{}</Loading>));
  });

  it('отображает корректно, когда isLoading = false', () => {
    render(getNativeBaseProvider(<Loading isLoading={false}>{}</Loading>));
  });
});
