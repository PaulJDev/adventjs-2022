function countHours(year, holidays) {
  const EXTRA_HOURS = 2

  const isWeekend = (date) => {
    const SUNDAY = 0
    const SATUDARY = 6

    const dayOfWeek = date.getDay()
    return dayOfWeek === SUNDAY || dayOfWeek === SATUDARY
  }
  const isWorkingHoliday = (date, year) => !isWeekend(date) && date.getFullYear() === year

  return holidays.filter((date) => isWorkingHoliday(new Date(`${year}-${date}`), year)).length * EXTRA_HOURS
}
