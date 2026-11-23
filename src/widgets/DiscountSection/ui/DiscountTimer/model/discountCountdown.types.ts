export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export type CountdownStatus = 'running' | 'expired';

export interface CountdownResult {
  time: CountdownTime;
  status: CountdownStatus;
}