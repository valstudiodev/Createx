

function formateDate(date: string, options: Intl.DateTimeFormatOptions): string {
  const [year, month, day] = date.split('-').map(Number)

  const parseDate = new Date(year, month - 1, day)

  return new Intl.DateTimeFormat('en-GB', options).format(parseDate)
}

export default formateDate;