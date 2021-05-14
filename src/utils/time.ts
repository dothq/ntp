import React from 'react';

const to24Hour = (time: string, showSeconds?: boolean) => {
  return new Date('1970-01-01T' + time + 'Z').toLocaleTimeString([], {
    timeZone: 'UTC',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: showSeconds ? 'numeric' : undefined
  });
};
export const getTime = (seconds?: boolean, twentyFourHour?: boolean) => {
  const date = new Date();

  const time = [];

  time.push(date.getHours().toString().padStart(2, '0'));
  time.push(date.getMinutes().toString().padStart(2, '0'));
  if (seconds) time.push(date.getSeconds().toString().padStart(2, '0'));

  if (!twentyFourHour) return to24Hour(time.join(':'), seconds);
  else return time.join(':');
};
