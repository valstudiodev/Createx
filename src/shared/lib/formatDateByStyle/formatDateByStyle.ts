type DateStyle = 'long' | 'short';


function formatDateByStyle(date: string | undefined, style: DateStyle = 'long', locale = 'en-US'): string {
  if (!date) return '';

  const parsedDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsedDate.getTime())) return '';

  return new Intl.DateTimeFormat(locale, {
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
  }).format(parsedDate);
}

export default formatDateByStyle;