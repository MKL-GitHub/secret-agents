/**
 * Получение отформатированной даты в виде строки
 * @param {Date} date Дата для форматирования
 * @returns {string} Отформатированная дата
 */
export function getFormattedDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date);
  return formattedDate;
}