// Текстовий урок
// JS. ДЗ 6
// Коди з лекцій та коди з ДЗ
//
// https://github.com/OktenSchool/javascript.git
//
//
//
//     #dFeorS3m7u
//
// – Знайти та вивести довжину наступних стрінгових значень
//
//  ‘hello world’
// ‘lorem ipsum’
// ‘javascript is cool’
//
// let str1 = 'hello world'
// let str2 = 'lorem ipsum'
// let str3 = 'javascript is cool'
//
// // console.log(str1.length)
// // console.log(str2.length)
// // console.log(str3.length)
// let arr1 = [str1, str2, str3]
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i].length)
// }
//
//
// #8lld9HMxXWB
//
// – Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
//
// let str1 = 'hello world'
// let str2 = 'lorem ipsum'
// let str3 = 'javascript is cool'
//
// // console.log(str1.toUpperCase())
// // console.log(str2.toUpperCase())
// // console.log(str3.toUpperCase())
//
// let arr2 = [str1, str2, str3]
// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i].toUpperCase())
// }
//
// #ClDsAm7xba7
//
// – Перевести до нижнього регістру наступні стрінгові значення
//
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’
//
// let str1 = 'HELLO WORLD'
// let str2 = 'LOREM IPSUM'
// let str3 = 'JAVASCRIPT IS COOL'
//
// // console.log(str1.toLowerCase())
// // console.log(str2.toLowerCase())
// // console.log(str3.toLowerCase())
//
// let arr3 = [str1, str2, str3]
//
// for (let i = 0; i<arr3.length; i++){
//     console.log(arr3[i].toLowerCase())
// }
//
//
// #0b89BkYZwu
//
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   '
// console.log(str)
// console.log(str.trim())
//
//     #bfoJuse4ZzP
//
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ‘Ревуть воли як ясла повні’;
//
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
//
// let str = 'Ревуть воли як ясла повні';
// let stringToArray = (str) => str.split(' ')
// console.log(stringToArray(str));
//
// #Rbr5kEQ
//
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.
//
// let num = [10,8,-7,55,987,-1011,0,1050,0]
// // let str = num.map(number => number + '')
// let str = num.map(number => number.toString())
//
// console.log(str)
//
//
// #5hqyKTfmc
//
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
//     let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]
//
//
// let nums = [11,21,3];
//
// let sortNums = (array, direction) => {
//     if (direction === 'ascending') {
//         return  array.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         return  array.sort((a, b) => b - a)
//     } else { console.log('помилкове ввелення')}
// }
//
// console.log(sortNums(nums,'ascending'))
// console.log(sortNums(nums,'descending'))
//
//
//
// ==========================
//
// #yo06d74c1C
//
// – є масив
//
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
// {title: ‘Java Complex’, monthDuration: 6},
//
// {title: ‘Python Complex’, monthDuration: 6},
//
// {title: ‘QA Complex’, monthDuration: 4},
//
// {title: ‘FullStack’, monthDuration: 7},
//
// {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
//  — відсортувати його за спаданням за monthDuration
//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let durationArray = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter((course) => course.monthDuration > 5)
//     .map((value, index) => ({id: index + 1, ...value})
//     )
//
// console.log(durationArray);
//
// let durationArray1 = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter((course) => course.monthDuration > 5)
//     .map((value, index) => {
//             value.id = index + 1;
//             return value;
//         }
//     )
//
// console.log(durationArray1);
//
//
// #4LJn7zBx
//
// взяти з arrays.js масив coursesArray
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// let courses = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
//         logo: '',
//         price: 0,
//         rating: 5,
//         avgResult: 99
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced'],
//         logo: '',
//         price: 0,
//         rating: 4.998,
//         avgResult: 97
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'python core',
//             'python advanced'],
//         logo: '',
//         price: 0,
//         rating: 4.812,
//         avgResult: 98
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
//         logo: '',
//         price: 0,
//         rating: 4.65,
//         avgResult: 97
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java'],
//         logo: '',
//         price: 0,
//         rating: 4.772,
//         avgResult: 100
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
//         logo: '',
//         price: 0,
//         rating: 4.53,
//         avgResult: 90
//     }
// ];
//
// –написати пошук всіх об’єктів, в яких в modules є sass
//
// let filter1 = coursesArray.filter(courses => {
//     return courses.modules.includes('sass');
// })
//
// console.log(filter1);
//
// // –написати пошук всіх об’єктів, в яких в modules є docker
//
// let filter2 = coursesArray.filter(courses => {
//     return courses.modules.includes('docker');
// })
//
// console.log(filter2);
//
//
// #bolvdlhP
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
// const cardSuits = ['spade', 'diamond', 'heart', 'clubs']
//
// const cards = [];
// for (let cardSuit of cardSuits) {
//     for (let value of values) {
//         const card = {suit: cardSuit, value: value};
//         if (cardSuit === 'heart' || cardSuit === 'diamond') {
//             card.color = 'red'
//         } else {
//             card.color = 'black'
//         }
//         cards.push(card);
//     }
// }
// console.log(cards);
//
// const cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
// const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
//
// const cards = [];
// for (let cardSuit of cardSuits) {
//     for (let value of values) {
//         const card = {cardSuit: cardSuit, value: value};
//         if (cardSuit === 'heart' || cardSuit === 'diamond') {
//             card.color = 'red';
//         } else {
//             card.color = 'black'
//         }
//         cards.push(card);
//     }
// }
// console.log(cards);
//
// // Після опису, використовуючи функції масивів:
// //
// //     – знайти піковий туз
// console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
// //  – всі шістки
// console.log(cards.filter(card => card.value === '6'));
// //  – всі червоні карти
// console.log(cards.filter(card => card.color === 'red'));
// //  – всі буби
// console.log(cards.filter(card => card.cardSuit === 'diamond'));
// //  – всі трефи від 9 та більше
// console.log(cards.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' && card.value !== '7' && card.value !== '8')));
// console.log(cards.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' || card.value !== '7' || card.value !== '8'))); // не працює
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }
//
//
//
//
//
//
//
// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//
//     spades:[],
//
//         diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }