// Текстовий урок
// JS. ДЗ 5
// Коди з лекцій та коди з ДЗ

// https://github.com/OktenSchool/javascript.git


// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій !!!


// #I2XsG6f

// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б

// let area = (a, b) => a * b;
// let araea1 = area(5, 9)

// console.log(araea1)
// console.log(area(6, 8))

// #ETGAxbEn8l

// – створити функцію, яка обчислює та повертає площу кола з радіусом r

// let circleArea = (r) => Math.round(Math.PI * r * r);

// console.log(circleArea(5))

// #Mbiz5K4yFe7

// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

// let cylinderArea = (r, h) => Math.round(Math.PI * r * r * h)

// console.log(cylinderArea(8, 7))

// #SIdMd0hQ

// – створити функцію, яка приймає масив та виводить кожен його елемент

// let array = [11,22,33,44,55,66,77,88,99, 'okten']

// let iterator = (arr) => {
//     for (let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// }

// let iterator = (arr) => {
//     for (let ar of arr){
//         console.log(ar)
//     }
// }

// iterator(array)

// #59g0IsA

// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент

// let writer = (text) => {
//     document.write(`<p>${text}</p>`)
// }

// writer('щось виводжу')

// #hOL6126

// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let writer = (text) => {
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//             </ul>`)
// }

// writer('Okten skool')

// #0Kxco1edSN

// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let writer = (text, n) => {
//     document.write(`<ul>`)

//     for (let i = 0; i < n; i++){
//         document.write(`<li>${text}</li>`)
//     }

//     document.write(`</ul>`)
// }

// writer ("Misha", 8)

// #gEFoxMMO

// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

// let primitiveArray = [15, "JavaScript", true, 2025, false,"Okten", 3.14, "Hello", 0, "World",true, 100, "frontend", false, "ul-li"];

// let writer = (array) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++){
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }

// writer(primitiveArray)

// #bovDJDTIjt

// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

// const users = [
//     {id: 1, name: "Anna", age: 22},
//     {id: 2, name: "Oleh", age: 30},
//     {id: 3, name: "Iryna", age: 27},
//     {id: 4, name: "Dmytro", age: 35},
//     {id: 5, name: "Kateryna", age: 19},
//     {id: 6, name: "Mykhailo", age: 40},
//     {id: 7, name: "Olena", age: 26},
//     {id: 8, name: "Taras", age: 32},
//     {id: 9, name: "Yulia", age: 28},
//     {id: 10, name: "Andrii", age: 24}
// ];

// let writer = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<div>Name - ${array[i].name}, age - ${array[i].age}</div>`);
//     }
// }
//
// writer(users)

// #pghbnSB

// – створити функцію, яка повертає найменше число з масиву

// const numbersArray = [56, -12, 0, 689, -450, 2, 24]
//
// let minNumber = (array)=>{
//     let min = [0]
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i]
//         }
//     }
//     return min
// }
//
// console.log(minNumber(numbersArray));

// #EKRNVPM

// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let sum = (arr)=>{
//     let on = 0;
//     for(let i=0;i<arr.length;i++){
//         on +=arr[i];
//     }
//     return on;
// }
//
// console.log(sum([1, 2, 10]));

// #kpsbSQCt2Lf

// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах

// let swap = (arr, index1, index2) => {
//     let ind1 = arr[index2];
//     arr[index2] = arr[index1];
//     arr[index1] = ind1;
//     return arr;
// }
//
// console.log(swap([11, 22, 33, 44], 0, 1));

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// #mkGDenYnNjn

// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250