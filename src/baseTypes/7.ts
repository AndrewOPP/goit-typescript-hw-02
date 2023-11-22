/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Sunday,
  Saturday,
}

function isWeekend(day: string): boolean {
  if (day === "Sunday" || day === "Saturday") return true;
  return false;
}

console.log(isWeekend(Days[Days.Saturday]));