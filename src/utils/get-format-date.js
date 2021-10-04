import { WEEK } from '../constant/get-days';
import { MONTHS } from '../constant/get-month';

export const getFormatDate = (date, lang) => {
    const newDate = new Date(date?.slice(0, 10));

    return lang === 'Es'
        ? `${WEEK[newDate.getDay()]} ${newDate.getDate()} de ${
              MONTHS[newDate.getMonth()]
          } del ${newDate.getFullYear()}`
        : newDate.toDateString() || '';
};
