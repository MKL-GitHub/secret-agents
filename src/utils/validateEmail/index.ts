/**
 * Проверка Email на валидность
 * @param {string} email 
 * @returns {boolean} Результат проверки далидности 
 */
export default function validateEmail(email: string): boolean {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}