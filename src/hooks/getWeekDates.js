function getWeekDates(n, startDate) {
  const currentDayOfWeek = startDate.getDay();

  const startOfWeek = new Date(startDate);
  startOfWeek.setDate(startDate.getDate() - currentDayOfWeek + n + 1 * 7);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  return {
    startOfWeek: startOfWeek,
    endOfWeek: endOfWeek,
  };
}

export default getWeekDates;
