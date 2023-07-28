import moment from 'moment'

export const addLocalDateTime = schedule => {
  return {
    ...schedule,
    slots: schedule.slots.map(slot => {
      let stillUtc = moment
        .utc(`${schedule.schedule_date} ${slot.schedule_time}`)
        .toDate()
      let local = moment(stillUtc).local()
      return {
        ...slot,
        local_schedule_date_time: local,
      }
    }),
  }
}

export const simplifySchedule = currSchedule => {
  if (!currSchedule?.length) return []
  // converted Date to local date but time still stays as UTC time
  // Ideal way would have been converting time to local time as well
  // that would take a lot of time to implement as well as testing
  // hence using this hack
  // if you are working on this & have got some time, do it the ideal way :)

  const dates = {}
  const updatedSchedule = currSchedule?.map(addLocalDateTime)
  updatedSchedule?.forEach(({ slots }) => {
    slots?.map(slot => {
      let date = moment(slot.local_schedule_date_time).format('YYYY-MM-DD')
      if (dates[date]) {
        dates[date].push(slot)
      } else {
        dates[date] = [slot]
      }
    })
  })

  let formattedSchedule = []
  for (const [key, value] of Object.entries(dates)) {
    formattedSchedule.push({ schedule_date: key, slots: value })
  }

  return formattedSchedule
}

export const Selectedarr = item => {
  let arr = []
  arr.push(item?.id)
  return JSON.stringify(arr)
}

const chars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
export const Base64 = {
  btoa: (input = '') => {
    let str = input
    let output = ''

    for (
      let block = 0, charCode, i = 0, map = chars;
      str.charAt(i | 0) || ((map = '='), i % 1);
      output += map.charAt(63 & (block >> (8 - (i % 1) * 8)))
    ) {
      charCode = str.charCodeAt((i += 3 / 4))

      if (charCode > 0xff) {
        throw new Error(
          "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.",
        )
      }

      block = (block << 8) | charCode
    }

    return output
  },

  atob: (input = '') => {
    let str = input.replace(/=+$/, '')
    let output = ''

    if (str.length % 4 == 1) {
      throw new Error(
        "'atob' failed: The string to be decoded is not correctly encoded.",
      )
    }
    for (
      let bc = 0, bs = 0, buffer, i = 0;
      (buffer = str.charAt(i++));
      ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
        ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
        : 0
    ) {
      buffer = chars.indexOf(buffer)
    }

    return output
  },
}
