import news2412 from './data/202412.js'
import news2501 from './data/202501.js'
import news2502 from './data/202502.js'
import news2503 from './data/202503.js'
import news2504 from './data/202504.js'
import news2505 from './data/202505.js'
import news2506 from './data/202506.js'
import news2507 from './data/202507.js'
import news2508 from './data/202508.js'
import news2509 from './data/202509.js'

const getWeekday = (dateStr) => {
  const weekdays = {
    zh: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };
  const date = new Date(dateStr);
  return {
    zh: weekdays.zh[date.getDay()],
    en: weekdays.en[date.getDay()]
  };
};

export const newsData = [
  ...news2412,
  ...news2501,
  ...news2502,
  ...news2503,
  ...news2504,
  ...news2505,
  ...news2506,
  ...news2507,
  ...news2508,
  ...news2509,
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
