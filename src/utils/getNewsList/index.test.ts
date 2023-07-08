import {getNewsList} from '../../utils';

describe('getNewsList function', () => {
  it('получение списка новостей с нужными свойствами', () => {
    const news = [
      {
        id: 1,
        image_url: 'https://site/image.png',
        short_text: '<p>Short text 1</p>',
        title: 'Title 1',
        one_more_property: 'Something else',
        description: 'Description'
      },
      {
        id: 2,
        image_url: 'https://site/image2.png',
        short_text: 'Short text 2',
        title: 'Title 2',
        one_more_property: 'Something else 2',
        description: 'Description 2'
      },
      {
        id: 3,
        image_url: 'https://site/image3.png',
        short_text: 'Short text 3',
        title: 'Title 3',
        one_more_property: 'Something else 3',
        description: 'Description 3'
      }
    ];

    const result = getNewsList(news);

    expect(result).toEqual([
      {
        id: 1,
        imageUrl: 'https://site/image.png',
        shortText: 'Short text 1',
        title: 'Title 1'
      },
      {
        id: 2,
        imageUrl: 'https://site/image2.png',
        shortText: 'Short text 2',
        title: 'Title 2'
      },
      {
        id: 3,
        imageUrl: 'https://site/image3.png',
        shortText: 'Short text 3',
        title: 'Title 3'
      }
    ]);
  });
});
