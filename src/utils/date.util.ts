import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

export const isValidDate = (
  date: Date | string | null | undefined
): boolean => {
  if (date === undefined || date === null || date === '') {
    return false;
  }

  return dayjs(date).isValid();
};

export const formatToRelativeTime = (date: Date | string | undefined) => {
  const isValid = isValidDate(date);
  if (!isValid) return null;

  return dayjs(date).fromNow();
};
