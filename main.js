// ДЗ:
//
//     #dYQNrBV
//
// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

let a;
let b;
let c;
let d;
let e;
let q;
let w;
let t;
let y;
let u;
let i;
let o;
let r;

a = 'hello';
b = 'owu';
c = 'com'
d = 'ua';
e = 1;
q = 10;
w = -999;
r = 123;
t = 3.14;
y = 2.7;
u = 16;
i = true;
o = false
//
//     Вивести кожну змінну за допомогою: console.log
//
console.log(a, b, c, d, e, q, w, r, t, y, u, i, o)
//
//
// #6Qb97gsv
//
// – Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)
//
let firstName;
let middleName;
let lastName;

firstName = 'Maietskyi';
middleName = 'Misha';
lastName = 'Mykhailovich';

let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);
//
//
// #4N0y5tufA
//
// – За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//
//     let a = 100; let b = ‘100’; let c = true;
//
let aa = 100;
let bb = '100';
let cc = true;

console.log(aa, typeof aa);
console.log(bb, typeof bb);
console.log(cc, typeof cc);
//
//
// #ruUtWDUI
//
// Додаткове для тих, хто цікавився prompt`oм
//
// – За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль
//
let name = prompt('What is your name?');
let firstNames = prompt('What is your first name?');
let age = prompt('What is your age number?');

let data = `name:${name} firstName:${firstNames} age:${age}`;

console.log(data);

