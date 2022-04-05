import weekday from 'dayjs/plugin/weekday';
import utc from 'dayjs/plugin/utc';
import timezone  from 'dayjs/plugin/timezone';

export default ({ app: { $dayjs } }) => {
  $dayjs.extend(weekday),
  $dayjs.extend(timezone),
  $dayjs.extend(utc)
}