import news2412 from './data/202412.js'
import news2501 from './data/202501.js'
import news2502 from './data/202502.js'
import news2503 from './data/202503.js'

const getWeekday = (dateStr) => {
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const date = new Date(dateStr);
  return weekdays[date.getDay()];
};

export const newsData = [
  ...news2412,
  ...news2501,
  ...news2502,
  ...news2503,
].map(item => {
  const [year, month, day] = item.date.split('-');
  return {
    ...item,
    year,
    month,
    day,
    weekday: getWeekday(item.date),
    weekdayNumber: new Date(item.date).getDay(),
  };
});
