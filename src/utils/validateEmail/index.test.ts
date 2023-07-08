// import {validateEmail} from '';

import {validateEmail} from '.';

describe('validateEmail function', () => {
  it('возвращает true, если email валидный', () => {
    const validEmails = ['test@example.com', 'john.doe@gmail.com', 'info@domain.co'];

    validEmails.forEach((email) => {
      expect(validateEmail(email)).toBe(true);
    });
  });

  it('возвращает false, если email невалидный', () => {
    const invalidEmails = [
      'invalidemail',
      'test@example',
      'mark.smith@gmail',
      'some_info@yandex',
      'some_info@yandex.o'
    ];

    invalidEmails.forEach((email) => {
      expect(validateEmail(email)).toBe(false);
    });
  });
});
