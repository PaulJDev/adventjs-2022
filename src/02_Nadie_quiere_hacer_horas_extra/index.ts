export function countHours(year: number, holidays: string[]): number {
  const EXTRA_HOURS = 2

  const isWeekend = (date: Date): boolean => {
    const SUNDAY = 0
    const SATUDARY = 6

    const dayOfWeek = date.getDay()
    return dayOfWeek === SUNDAY || dayOfWeek === SATUDARY
  }
  const isWorkingHoliday = (date: Date, year: number): boolean => !isWeekend(date) && date.getFullYear() === year

  return holidays.filter((date) => isWorkingHoliday(new Date(`${year}-${date}`), year)).length * EXTRA_HOURS
}
