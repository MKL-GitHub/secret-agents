import { getFormattedDate } from ".";

describe('getFormattedDate function', () => {
  it('должен вернуть отформатированную дату в виде строки', () => {
    const date = new Date('2022-09-15T00:00:00Z');

    const formattedDate = getFormattedDate(date);

    expect(formattedDate).toEqual('15 сентября 2022 г.');
  });
});
