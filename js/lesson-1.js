//1 зачача//
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так - виведіть повідомлення 'Вірно' у alert().
//    Якщо ні - виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

function checkNumber() {
  const userInput = prompt('Введіть число');
  const number = Number(userInput);

  if (number === 10) {
    alert('Вірно');
  } else {
    alert('Невірно');
  }
}

checkNumber();

//2 задача//
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

const randomMinute = Math.floor(Math.random() * 60); 

if (randomMinute <= 14) {
    alert(`${randomMinute}`)
} else if (randomMinute <= 29) {
    alert(`${randomMinute}`)
} else if (randomMinute <= 44) {
    alert(`${randomMinute}`)
} else {
    alert(`${randomMinute}`)
}

//3 задача//
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

const num = prompt('Введіть число від 1 до 4');
let result;
switch (num) {
    case '1':
        result = 'зима';
        break;
    case '2':
        result = 'весна';
        break;
    case '3':
        result = 'літо';
        break;
    case '4':
        result = 'осінь';
        break;
    default:
        console.log(result);
}

// 4 Задача//
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

const minutesEnter = prompt("Enter minutes:");
const minutes = String(minutesEnter % 60).padStart(2, "0");
const hours = String(Math.floor(minutesEnter / 60)).padStart(2, "0");
console.log(`${hours}:${minutes}`);

// 5 Задача//
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

const login = prompt('Введіть ваш логін');
console.log(login);

if (login === 'Адмін') {
    const password = prompt('Введіть пароль');
    if (password === null || password === '') {
        alert('Введення пароля скасовано');
    } else if (password === 'Я головний') {
        alert('Добрий день!');
    } else {
        alert('Невірний пароль!');
    }

} else if (login === null || login === '') {
    alert('Скасовано');
} else {
    alert('Я вас не знаю');
}

// 6 Задача//
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

let counter = 0
while (counter <= 20) {
  console.log(counter)
  counter++
}

// 7 Задача//
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.


const MIN_VALUE = 2;
const MAX_VALUE = 20;

function getNumbers(min, max) {
  let evenSum = 0;

  for (let i = max; i >= min; i--) {
    console.log(i);

    if (i % 2 === 0) {
      evenSum += i; // ВИПРАВЛЕНО: додаємо до суми саме число i
    }
  }

  return evenSum;
}

console.log(`від ${MAX_VALUE} до ${MIN_VALUE}:`);
const totalEvenSum = getNumbers(MIN_VALUE, MAX_VALUE);
console.log(`${totalEvenSum}`);

// 8 Задача//
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
/**
 * @param {any} a
 * @param {any} b
 * @returns { number | string }
 */
function min(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Not a number';
    }
    return a < b ? a : b;
}

console.log(`min(5, 10): ${min(5, 10)}`);
console.log(`min(20, -5): ${min(20, -5)}`);
console.log(`min(7, 7): ${min(7, 7)}`);
console.log(`min('hello', 10): ${min('hello', 10)}`);
console.log(`min(15, true): ${min(15, true)}`);

// 9 Задача//
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

function isAdult(age) {
  if (age >= 18) {
    return true
  } else {
    return confirm
  }
}

console.log(isAdult(25));
console.log(isAdult(16));

// 10 Задача//
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    }
    else if (i % 3 === 0) {
      console.log('fizz');
    }
    else if (i % 5 === 0) {
      console.log('buzz');
    }
    else {
      console.log(i);
    }
  }
}
fizzBuzz(20)