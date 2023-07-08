import {getLinksFromString} from '../../utils';

describe('getLinksFromString function', () => {
  it('получение списка строк с несколькими ссылками', () => {
    const text1 =
      'Новое мероприятие доступно по <a href="https://lzone.secret-agents.ru/events/45">ссылке</a> Также, более подробдую информацию можете найти на сайте <a href="https://lzone.secret-agents.ru/info">https://lzone.secret-agents.ru/info</a>';

    expect(getLinksFromString(text1)).toEqual([
      {text: 'Новое мероприятие доступно по ', url: null},
      {text: 'ссылке', url: 'https://lzone.secret-agents.ru/events/45'},
      {
        text: ' Также, более подробдую информацию можете найти на сайте ',
        url: null
      },
      {
        text: 'https://lzone.secret-agents.ru/info',
        url: 'https://lzone.secret-agents.ru/info'
      }
    ]);
  });

  it('получение списка строк с url = null', () => {
    const text = 'Просто текст';

    expect(getLinksFromString(text)).toEqual([{text: 'Просто текст', url: null}]);
  });

  it('получение списка ссылок без url = null', () => {
    const text = '<a href="https://site1">ссылка 1</a> <a href="https://site2">ссылка 2</a>';

    expect(getLinksFromString(text)).toEqual([
      {text: 'ссылка 1', url: 'https://site1'},
      {text: 'ссылка 2', url: 'https://site2'}
    ]);
  });

  it('получение списка строк с несколькими ссылками при передачи многострочного текста', () => {
    const text = `Специальное предложение доступно по <a href="https://lzone.secret-agents.ru/special_offers/185">
    ссылке</a>`;

    expect(getLinksFromString(text)).toEqual([
      {text: 'Специальное предложение доступно по ', url: null},
      {
        text: 'ссылке',
        url: 'https://lzone.secret-agents.ru/special_offers/185'
      }
    ]);
  });
});
