// JS. Додаткові ДЗ по масивах та циклах
// #WpkK0ZH1
//
// –створити масив з:
//
//     – з 5 числових значень
// let n = [5, 6, 45, -785, 123]
// //
// // – з 5 стічкових значень
// let s = ['okten', 'shool', 'Misha', 'student', 'Lviv']
// //
// // – з 5 значень стрічкового, числового та булевого типу
// let snb=['Misha', 19, true, 'hi', 2]
// //
// // – та вивести його в консоль
// console.log(n, s, snb)
//
// #4aDbSgh
//
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль
//
//
// let arr=[];
// arr[1]=5
// arr[5]=2
// arr[0]=3
// console.log(arr)
//
//
//
//
//
// #qLQLJSeN7i
//
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// 1. перебрати його циклом while
// let i = 0
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++
// }
//
//     2. перебрати його циклом for
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 1
// while (i < arr.length) {
//     console.log(arr[i]);
//     i+=2
// }
//
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 1; i < arr.length; i+=2) {
//     console.log(arr[i]);
// }
//
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0
// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i++
// }
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }
//
// 7. замінити кожне число, кратне 3, на слово “okten”
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten'
//     }
//     console.log(arr[i]);
// }
//
// 8. вивести масив у зворотньому порядку.
// for (let i = arr.length; i > 0; i--) {
//     console.log(arr[i]);
// }
//
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
//
// 1. перебрати його циклом while
// let i = arr.length
// while (i > 0) {
//     console.log(arr[i]);
//     i--
// }
//
//     2. перебрати його циклом for
// for (let i = arr.length; i > 0; i--) {
//     console.log(arr[i]);
// }
//
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = arr.length-1
// while (i >= 0) {
//     if (i % 2 !== 0){
//         console.log(arr[i]);
//     }
//     i --
// }
//
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = arr.length-1; i >= 0; i --) {
//     if (i % 2 !== 0){
//          console.log(arr[i]);
//     }
// }
//
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = arr.length-1
// while (i >=0) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i--
// }
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = arr.length-1; i >=0; i--) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }
//
// 7. замінити кожне число, кратне 3, на слово “okten”
// for (let i = arr.length-1; i >=0; i--) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten'
//     }
//     console.log(arr[i]);
// }
//
//
// #yHAwJOyiC
//
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr1 = [54,587,321,517,2,6,114,647,1234,72]
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i])
// }
//
// #yHAwJOyiC
//
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers = [3, 7, 12, 0, -5, 8, 21, 34, 1, 9];
// for (let number of numbers){
//     console.log(number)
// }
//
//     #GamKju89ob
//
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.

// let strings = ["яблуко","груша","вишня","черешня","абрикос","слива","персик","лохина","смородина","малина"];
// for (let string of strings){
//     console.log(string)
// }
//
//     #Bm76xmg
//
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mixed = [ 42,"яблуко",true,3.14,"груша",false,"Привіт",0,true,"кіт"];
// for (let mix of mixed){
//     console.log(mix)
// }
//
//     #u3vmD0YJXh
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mixed = [ 42,"яблуко",true,3.14,"груша",false,"Привіт",0,true,"кіт"];
// for (let i = 0; i < mixed.length; i++){
//     if (typeof mixed[i] === "boolean"){
//         console.log(`${i+1} значення масиву - ${mixed[i]}`)
//     }
// }
//
// #9stMq2ou
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mixed = [ 42,"яблуко",true,3.14,"груша",false,"Привіт",0,true,"кіт"];
// for (let i = 0; i < mixed.length; i++){
//     if (typeof mixed[i] === "number"){
//         console.log(`${i+1} значення масиву ${typeof mixed[i]} - ${mixed[i]}`)
//     }
// }
//
// #mK4pmM4
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mixed = [ 42,"яблуко",true,3.14,"груша",false,"Привіт",0,true,"кіт"];
// for (let i = 0; i < mixed.length; i++){
//     if (typeof mixed[i] === "string"){
//         console.log(`${i+1} значання мусиву - ${typeof mixed[i]}, значення - ${mixed[i]}`)
//     }
// }
//
//
// #0pm3EyTKy9
//
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = []
// array[0] = 42,
// array[1] = "яблуко",
// array[2] = true,
// array[3] = 3.14,
// array[4] = "груша",
// array[5] = false,
// array[6] = "Привіт",
// array[7] = 0,
// array[8] = true,
// array[9] = "кіт"

// for (let arr of array){
//     console.log(arr)
// }
//
//     #mDMWMW5a
//
// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < array.length; i++){
//     document.write(`<p>${i}</p>`)
// }
// for (let i = 0; i < 10; i++)(
//     console.log(`Крок № ${i}`),
//     document.write(`<p>Крок № ${i}</p>`)
// )
//
// #4sXhaa5YMM
//
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++)(
//     console.log(`Крок № ${i}`),
//     document.write(`<p>Крок № ${i}</p>`)
// )
//
// #s24slNyz7
//
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2)(
//     console.log(`Крок № ${i}`),
//     document.write(`<p>Крок № ${i}</p>`)
// )
//
// #zananT5FR1
//
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++){
// if (i%2 === 0){
//     console.log(`Крок № ${i}`),
//     document.write(`<p>Крок № ${i}</p>`)
// }
// }
//
// #Tfrwls7FM
//
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++){
// if (i%2 === 1){
//     console.log(`Крок № ${i}`),
//     document.write(`<p>Крок № ${i}</p>`)
// }
// }
//
//
//
//
// #reLkOkTB29Q
//
// створити масив книжок (назва, кількість сторінок, автори , жанри).
// let books = [
//     {
//         title: "Тіні забутих предків",
//         pages: 160,
//         authors: ["Михайло Коцюбинський"],
//         genres: ["драма", "історичний роман"]
//     },
//     {
//         title: "Гаррі Поттер і філософський камінь",
//         pages: 320,
//         authors: ["Джоан Роулінг"],
//         genres: ["фентезі", "пригоди"]
//     },
//     {
//         title: "Майстер і Маргарита",
//         pages: 400,
//         authors: ["Михайло Булгаков", "Райс"],
//         genres: ["містика", "фантастика", "сатира"]
//     },
//     {
//         title: "Сто років самотності",
//         pages: 450,
//         authors: ["Габрієль Гарсія Маркес"],
//         genres: ["магічний реалізм", "роман",]
//     },
//     {
//         title: "Кобзар",
//         pages: 250,
//         authors: ["Тарас Шевченко", "Українка", "Франко"],
//         genres: ["поезія", "класика"]
//     },
//     {
//         title: "1984",
//         pages: 328,
//         authors: ["Джордж Орвелл"],
//         genres: ["антиутопія", "політична фантастика"]
//     },
//     {
//         title: "Портрет Доріана Грея",
//         pages: 310,
//         authors: ["Оскар Вайльд"],
//         genres: ["роман", "філософська проза"]
//     },
//     {
//         title: "Злочин і кара",
//         pages: 430,
//         authors: ["Федір Достоєвський"],
//         genres: ["роман", "драма", "психологія", "автобіографія"]
//     },
//     {
//         title: "Пригоди Тома Сойєра",
//         pages: 290,
//         authors: ["Марк Твен"],
//         genres: ["пригоди", "гумор", "дитяча література"]
//     },
//     {
//         title: "Лісова пісня",
//         pages: 180,
//         authors: ["Леся Українка"],
//         genres: ["драма-феєрія", "поезія", "українська класика"]
//     }
// ];
//
// – знайти найбільшу книжку.
//     let bigPages = books[0]
// for (let i = 0; i < books.length; i ++){
//     if (books[i].pages > bigPages.pages){
//         bigPages = books[i]
//     }
// }
//     console.log(bigPages)
//
// – знайти книжку/ки з найбільшою кількістю жанрів
//     let bigGenres = books[0]
// for (let i = 0; i < books.length; i ++){
//     if (books[i].genres.length > bigGenres.genres.length){
//         bigGenres = books[i]
//     }
// }
//     console.log(bigGenres)
//
// – знайти книжку/ки з найдовшою назвою
//     let maxTitle = books[0];
// for (let i = 0; i < books.length; i ++){
//     if (books[i].title.length > maxTitle.title.length){
//         maxTitle = books[i]
//     }
// }
//     console.log('Книга з найдовшою назвою', maxTitle)
//
// – знайти книжку/ки, які писали 2 автори
//
// for (let i = 0; i < books.length; i ++){
//     if (books[i].authors.length === 2){
//         console.log(books[i])
//     }
// }
//
// – знайти книжку/ки, які писав 1 автор
//
// for (let i = 0; i < books.length; i ++){
//     if (books[i].authors.length === 1){
//         console.log(books[i])
//     }
// }
//
//
// 1. Створити пустий масив та :
//
// let arr = [];
//
//     a. заповнити його 50 парними числами за допомоги циклу.
// let number = 0;
// while (arr.length < 50) {
//     if (number % 2 === 0) {
//         if (number !== 0) {
//             arr.push(number);
//         }
//     }
//     number++
// }
// console.log(arr);
//
// for (let number1 = 0; arr.length < 50; number1++) {
//     if (number1 % 2 === 0) {
//         if (number1 !== 0) {
//             arr.push(number1);
//         }
//     }
// }
// console.log(arr);
//
//     b. заповнити його 50 непарними числами за допомоги циклу.
// let number2 = 0;
// while (arr.length < 50) {
//     if (number2 % 2 === 1) {
//         arr.push(number2);
//     }
//     number2++;
// }
// console.log(arr);
//
// for (let number3 = 0; arr.length < 50; number3++) {
//     if (number3 % 2 === 1) {
//         arr.push(number3);
//     }
// }
// console.log(arr);
//
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
// let arrNum = [];
// for (let i = 0; arrNum.length < 20; i++) {
//     let random = Math.floor(Math.random() * 1000);
//     arrNum.push(random);
// }
// console.log(arrNum);
//
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for (let i = 0; arrNum.length < 20; i++) {
//     let random = Math.floor(Math.random() * 732) + 8;
//     arrNum.push(random);
// }
// console.log(arrNum);
//
// 2. Вивести за допомогою console.log кожен третій елемент
// for (let i = 2; i < arrNum.length; i+=3) {
//     console.log(arrNum[i]);
// }
//
// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
// for (let i = 2; i < arrNum.length; i+=3) {
//     if (arrNum[i] % 2 === 0) {
//         console.log(arrNum[i]);
//     }
// }
//
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
// let newArrNum = []
// for (let i = 2; i < arrNum.length; i += 3) {
//     if (arrNum[i] % 2 === 0) {
//         newArrNum.push(arrNum[i]);
//     }
// }
// console.log(newArrNum);
//
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// for (let i = 0; i < arrNum.length; i ++) {
//     if (arrNum[i] % 2 === 0) {
//         console.log(arrNum[i-1]);
//     }
// }
//
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let cheks = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0
// for (let chek of cheks) {
//     sum = sum + chek;
// }
// let result = sum / cheks.length;
// console.log(result);
//
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//
// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.
//
//
//
//
//
//
//
// – Дано 2 масиви з рівною кількістю об’єктів.
//
//     Масиви:
//
// let usersWithId = [
//
//     {id: 1, name: ‘vasya’, age: 31, status: false},
//
// {id: 2, name: ‘petya’, age: 30, status: true},
//
// {id: 3, name: ‘kolya’, age: 29, status: true},
//
// {id: 4, name: ‘olya’, age: 28, status: false}
//
// ];
//
//
//
// let citiesWithId = [
//
//     {user_id: 3, country: ‘USA’, city: ‘Portland’},
//
// {user_id: 1, country: ‘Ukraine’, city: ‘Ternopil’},
//
// {user_id: 2, country: ‘Poland’, city: ‘Krakow’},
//
// {user_id: 4, country: ‘USA’, city: ‘Miami’}
//
// ];
//
//
//
// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
//
// Записати цей об’єкт в новий масив
//
// Example:
//
//     let usersWithCities = [
//
//         {
//
//             id: 1, // <===
//
//             name: ‘vasya’,
//
// age: 31,
//
//     status: false,
//
//     address: {
//
//     user_id: 1, // <===
//
//         country: ‘Ukraine’,
//
//     city: ‘Ternopil’
//
// }
//
// },
//
// // TO BE CONTINUED …..
//
// ]
//
//
//
//
//
//
//
//
//
// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
//
//
// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
//
//
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.