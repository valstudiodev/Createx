import { useEffect, useState } from "react";
import { CountdownResult } from "./discountCountdown.types";
import calculateCountdown from "./calculateCountdown";


function useCountdown(targetDate: string): CountdownResult {
  const [countdown, setCountdown] = useState<CountdownResult>(
    () => calculateCountdown(targetDate)
  );

  useEffect(() => {
    setCountdown(calculateCountdown(targetDate))

    const intervalId = window.setInterval(() => {
      const result = calculateCountdown(targetDate)

      setCountdown(result)

      if (result.status === 'expired') {
        window.clearInterval(intervalId)
      }

    }, 1000);

    return () => {
      window.clearInterval(intervalId)
    }

  }, [targetDate]);

  return countdown
}

export default useCountdown;