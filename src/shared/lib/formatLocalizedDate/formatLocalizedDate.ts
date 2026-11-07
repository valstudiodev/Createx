

function formatLocalizedDate(date: string, locale = 'es-US'): string {
  const parseDate = new Date(`${date}T12:00:00`)

  return new Intl.DateTimeFormat(locale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(parseDate)
}

export default formatLocalizedDate;