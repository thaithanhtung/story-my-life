
import moment from 'moment'

const format = 'YYYY-MM-DD HH:mm'

export const formatDatetimeToInt = (date) => {
  return Date.parse(date)
}

export const formatDateTime = (dateTime) => {
  return moment(parseInt(dateTime)).format(format)
}
