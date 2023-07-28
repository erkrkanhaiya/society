import axios from 'axios'

let dailyCoConfigInstance = axios.create()
delete dailyCoConfigInstance.defaults.headers.common.language

const dailyCoConfig = (url, method, data) => ({
  method,
  url: `https://api.daily.co/v1${url}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_DAILYCO_API}`,
  },
  data,
})

console.log(
  '🚀 ~ file: daily-co.js ~ line 13 ~ process.env.REACT_APP_DAILYCO_API',
  process.env.REACT_APP_DAILYCO_API,
)
export const videoRoomRequest = (url, method = 'get', data = undefined) =>
  dailyCoConfigInstance(dailyCoConfig(url, method, data))
