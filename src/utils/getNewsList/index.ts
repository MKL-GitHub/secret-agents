import { NewsItemType } from "../../services/store/newsList/types";

/**
 * Получение списка новостей с фильтрацией
 * @param items Список новостей полученных из запроса
 * @returns {NewsItemType[]} Список новостей
 */
export function getNewsList(items: any[]): NewsItemType[] {
  return items.map(item => ({
    id: item.id,
    imageUrl: item['image_url'],
    shortText: item['short_text']?.replace(/<\/?p>/g, '').trim(),
    title: item.title,
  }));
}