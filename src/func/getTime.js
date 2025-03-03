export function getTimeDifference(startDate, currentDate) {
  let start = new Date(startDate);
  let end = new Date(currentDate);

  // Garantir que as datas estejam ordenadas
  if (start > end) {
    [start, end] = [end, start];
  }

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();
  let hours = end.getHours() - start.getHours();
  let minutes = end.getMinutes() - start.getMinutes();
  let seconds = end.getSeconds() - start.getSeconds();

  // Ajustar para meses negativos
  if (months < 0) {
    years--;
    months += 12;
  }

  // Ajustar para dias negativos (considerando a quantidade real de dias no mês anterior)
  if (days < 0) {
    const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += previousMonth.getDate();
    months--;
  }

  // Ajustar para horas, minutos e segundos negativos
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }

  return { years, months, days, hours, minutes, seconds };
}
