// Задача 2. Розрахунок калорій
// Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій, які спортсмен споживав протягом тижня. Функція очікує один параметр: days — масив об’єктів. Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день. Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її викликів.

function calcAverageCalories(days) {
  // Перевірка, чи переданий масив не пустий
  if (days.length === 0) {
    return 0; // Якщо масив порожній, повертаємо 0
  }

  let totalCalories = 0;
  // Обчислення загальної кількості калорій
  for (let i = 0; i < days.length; i++) {
    totalCalories += days[i].calories;
  }
  // Обчислення середньодобового значення калорій
  const averageCalories = totalCalories / days.length;
  return averageCalories;
}
// Приклад використання:
const days = [
  { day: 'Monday', calories: 2000 },
  { day: 'Tuesday', calories: 2200 },
  { day: 'Wednesday', calories: 1800 },
  { day: 'Thursday', calories: 2100 },
  { day: 'Friday', calories: 1900 },
  { day: 'Saturday', calories: 2300 },
  { day: 'Sunday', calories: 2400 },
];
console.log(calcAverageCalories(days)); // Повинно вивести середньодобове значення калорій

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 3010 },
    { day: 'tuesday', calories: 3200 },
    { day: 'wednesday', calories: 3120 },
    { day: 'thursday', calories: 2900 },
    { day: 'friday', calories: 3450 },
    { day: 'saturday', calories: 3280 },
    { day: 'sunday', calories: 3300 },
  ]),
); // 3180

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 2040 },
    { day: 'tuesday', calories: 2270 },
    { day: 'wednesday', calories: 2420 },
    { day: 'thursday', calories: 1900 },
    { day: 'friday', calories: 2370 },
    { day: 'saturday', calories: 2280 },
    { day: 'sunday', calories: 2610 },
  ]),
); // 2270

console.log(calcAverageCalories([])); // 0
