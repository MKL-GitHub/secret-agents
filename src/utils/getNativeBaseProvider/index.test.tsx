import React from 'react';
import {render} from '@testing-library/react-native';
import {NativeBaseProvider, Text, View} from 'native-base';

import {getNativeBaseProvider} from '.';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0}
};

describe('NativeBaseProvider function', () => {
  it('отрисовка дочерних компонентов корректна', () => {
    const children = (
      <View>
        <Text>Child Component 1</Text>
        <Text>Child Component 2</Text>
      </View>
    );

    const {getByText} = render(getNativeBaseProvider(children));

    expect(getByText('Child Component 1')).toBeTruthy();
    expect(getByText('Child Component 2')).toBeTruthy();
  });

  it('возвращает NativeBaseProvider элемент с корректными initialWindowMetrics свойствами', () => {
    const children = <Text>Hello World</Text>;
    const element = getNativeBaseProvider(children);

    expect(element.type).toBe(NativeBaseProvider);
    expect(element.props.initialWindowMetrics).toEqual(inset);
  });
});
