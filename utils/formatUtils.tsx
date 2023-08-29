export function formatSeconds(seconds: number) {
  const wholeSeconds = Math.floor(seconds);
  const minutes = Math.floor(wholeSeconds / 60);
  const remainingSeconds = wholeSeconds % 60;
  const paddedMinutes = String(minutes);
  const paddedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${paddedMinutes}:${paddedSeconds}`;
}

export function formatDateTime(isoDate: string) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const date = new Date(isoDate);

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  let hour = date.getHours();
  const isPM = hour >= 12;
  if (hour > 12) hour -= 12;
  if (hour === 0) hour = 12;
  const minute = date.getMinutes().toString().padStart(2, '0');

  return `${month} ${day}, ${year}`;
  return `${month} ${day}, ${year} - ${hour}:${minute}${isPM ? 'PM' : 'AM'}`;
}
