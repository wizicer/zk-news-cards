import news2412 from './data/202412'
import news2501 from './data/202501'

const getWeekday = (dateStr) => {
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const date = new Date(dateStr);
  return weekdays[date.getDay()];
};

export const newsData = [
  ...news2412,
  ...news2501,
].map(item => {
  const [year, month, day] = item.date.split('-');
  return {
    ...item,
    year,
    month,
    day,
    weekday: getWeekday(item.date)
  };
});
