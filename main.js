// JS. ДЗ 10
// Коди з лекцій та коди з ДЗ
//
// https://github.com/OktenSchool/javascript.git
//
//
//
//     #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id=”text”.
//
// document.getElementById('button1').onclick = function(e){
//     e.preventDefault()
//     // document.getElementById('text').style.display = 'none'
//     document.getElementById('text').remove();
//
// }
//
// document.getElementById('button1')
//     .addEventListener('click', function () {
//         document.getElementById('text').remove();
//     })
//
// document.getElementsByTagName('button')[0]
//     .addEventListener('click', function () {
//         document.getElementById('text').style.display = 'none';
//     })
//
// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік,
// чи менше він за 18, та повідомити про це користувача
//
// const form = document.forms.form1;
// const age = +form.age.value
//
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//
//     const message = document.querySelector('#message');
//     if (message) message.remove();
//
//     const age = +form.age.value;
//
//     const text = document.createElement('h2');
//     text.id = 'message';
//
//     if (age > 18) {
//         text.innerText = `Вітаю ваш вік більше 18 років і становить ${age}`;
//     } else if (age < 18) {
//         text.innerText = `Шкода, але ваш вік менше 18 років і становить ${age}`;
//     } else if (age < 0) {
//         text.innerText = `Ви ввели вік менше 1 року, спробуйте ще раз`;
//     }
//
//     document.body.append(text);
// })

// const form1 = document.forms.form1;
//
// form1.addEventListener('submit', function (e) {
//     e.preventDefault();
//
//     const message = document.querySelector('#message');
//     if (message) message.remove();
//     const value = +form1.age.value;
//
//     const h2 = document.createElement('h2')
//     h2.id = 'message'
//
//     if (value < 18) {
//         h2.innerText = 'Вибачте, але Ваш вік менше 18 років.' + value;
//     } else {
//         h2.innerText = 'Вітаю, Ваш вік більше 18 років.' + value;
//     }
//     document.body.appendChild(h2)
// })

// const form1 = document.forms.form1;
// const message = document.querySelector('#message');
//
// form1.addEventListener('submit', function (e) {
//     e.preventDefault();
//
//     const value = +form1.age.value;
//
//     if (value < 18) {
//         message.textContent = `Вибачте, але Ваш вік менше 18 років. ${value}`;
//     } else {
//         message.textContent = `Вітаю, Ваш вік більше 18 років. ${value}`;
//     }
// });

//
// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на
// кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили
// форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
//
// const formUser = document.forms.formUser;
// formUser.addEventListener('submit', (e) => {
//     e.preventDefault();
//
//     const name = formUser.name.value;
//     const surname = formUser.surname.value;
//     const age = formUser.age.value;
//     const user = {name, surname, age};
//
//     const userBlock = document.createElement('div');
//
//     const h2 = document.createElement('h2');
//     h2.textContent = `Name: ${name}`;
//
//     const h3 = document.createElement('h3');
//     h3.textContent = `Surname: ${surname}`;
//
//     const h4 = document.createElement('h4');
//     h4.textContent = `Age: ${age}`;
//
//     userBlock.append(h2, h3, h4);
//
//     document.body.appendChild(userBlock)
//
// })
//
// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
// let item = +localStorage.getItem('number');
//
// item += 1
// localStorage.setItem('number', item);
//
// const p = document.createElement('p')
// p.innerText = item;
// document.body.appendChild(p);
// #LhSfdhM3
//
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//
//
//
//
//
//
//
// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//
//
//
// #RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//
//
//
//
//
//     #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
//
//
//
//
//
//     #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається
//
//
//
//
//
// #NKB0tgWIK1G
//
// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
//     При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів