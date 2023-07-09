import React from 'react';
import {it} from '@jest/globals';
import {fireEvent, render} from '@testing-library/react-native';

import NewsItem from './NewsItem';
import {getNativeBaseProvider} from '@utils';

describe('NewsItem component', () => {
  it('отображает корректно', () => {
    render(getNativeBaseProvider(<NewsItem />));
  });

  it('отображает корректный title', () => {
    const title = 'Example Title';
    const {getByText} = render(getNativeBaseProvider(<NewsItem title={title} />));
    const titleElement = getByText(title);

    expect(titleElement.props.children).toBe(title);
  });

  it('отображает корректный image', () => {
    const imageUrl = 'https://aidadf/images/image.png';
    const {getByTestId} = render(getNativeBaseProvider(<NewsItem imageUrl={imageUrl} />));
    const imageElement = getByTestId('image');

    expect(imageElement).toBeDefined();
    expect(imageElement.props.source.uri).toBe(imageUrl);
  });

  it('отображает корректный shortText', () => {
    const shortText = 'Example Short Text';
    const {getByText} = render(getNativeBaseProvider(<NewsItem shortText={shortText} />));
    const shortTextElement = getByText(shortText);

    expect(shortTextElement.props.children).toBe(shortText);
  });

  it('вызывает callback при нажании на компонент', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(getNativeBaseProvider(<NewsItem onPress={onPressMock} />));
    const containerElement = getByTestId('container');

    fireEvent.press(containerElement);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
