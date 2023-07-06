import { LinkedTextType } from "../../types";

/**
 * Получение списка объектов с текстом и ссылкой
 * @param {string} str Строка для парсинга
 * @returns {LinkedTextType[]} Список объектов с ссылками
 */
export function getLinksFromString(str: string): LinkedTextType[] {
  const line = str.replace('\n', '');
  const regex = /<a href="(.*?)">(.*?)<\/a>/g;
  const matches: LinkedTextType[] = [];
  let match;
  let lastIndex = 0;

  while ((match = regex.exec(line))) {
    const [fullMatch, url, text] = match;
    const startIndex = match.index;
    const endIndex = startIndex + fullMatch.length;

    if (startIndex > lastIndex) {
      const text = line.substring(lastIndex, startIndex);
      text.trim() && matches.push({ text, url: null });
    }

    matches.push({ text: text.trim(), url });

    lastIndex = endIndex;
  }

  if (lastIndex < line.length) {
    matches.push({ text: line.substring(lastIndex), url: null });
  }

  return matches;
}