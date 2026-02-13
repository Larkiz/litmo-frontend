import moment from "moment";

export function getHumanizedDiff(startDate, endDate) {
  const start = moment(startDate);
  const end = moment(endDate);

  if (start.isAfter(end)) {
    return getHumanizedDiff(end, start);
  }

  // Сначала вычисляем все разницы напрямую
  let years = end.diff(start, "years");
  let months = end.diff(start, "months");
  let days = end.diff(start, "days");

  // Корректируем: получаем остаток месяцев после вычета лет
  months = months - years * 12;

  // Создаем промежуточную дату для точного вычисления дней
  const tempDate = moment(start).add(years, "years").add(months, "months");

  // Вычисляем оставшиеся дни с учетом точной разницы
  days = end.diff(tempDate, "days");

  // Дополнительная проверка на случай, если дней получилось отрицательное значение
  // (это может случиться из-за особенностей перехода месяцев)
  if (days < 0) {
    months -= 1;
    const prevMonthDate = moment(tempDate).subtract(1, "month");
    days = end.diff(prevMonthDate, "days");
  }

  // Склонение для русского языка
  const parts = [];
  if (years > 0)
    parts.push(`${years} ${getPlural(years, ["год", "года", "лет"])}`);
  if (months > 0)
    parts.push(
      `${months} ${getPlural(months, ["месяц", "месяца", "месяцев"])}`,
    );
  if (days > 0)
    parts.push(`${days} ${getPlural(days, ["день", "дня", "дней"])}`);

  return parts.join(", ") || "0 дней";
}

function getPlural(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}
