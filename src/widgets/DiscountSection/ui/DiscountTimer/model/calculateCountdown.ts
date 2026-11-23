import { CountdownResult, CountdownTime } from "./discountCountdown.types";


function calculateCountdown(targetDate: string): CountdownResult {
  const difference = new Date(targetDate).getTime() - Date.now()

  const emptyTime: CountdownTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  if (!Number.isFinite(difference) || difference <= 0) {
    return {
      time: emptyTime,
      status: 'expired',
    }
  }

  const totalSeconds = Math.floor(difference / 1000)

  const time: CountdownTime = {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60
  }

  return {
    time,
    status: 'running'
  }
}

export default calculateCountdown;