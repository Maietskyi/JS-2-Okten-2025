// Текстовий урок
// JS. ДЗ 7
// Коди з лекцій та коди з ДЗ
//
// https://github.com/OktenSchool/javascript.git
//
//
//
//     #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let users = [
//     new User(1, 'Misha', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 37'),
//     new User(2, 'Vika', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 38'),
//     new User(3, 'Roma', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 39'),
//     new User(4, 'Daria', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 40'),
//     new User(5, 'Vasyl', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 41'),
//     new User(6, 'Maria', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 42'),
//     new User(7, 'Anna', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 43'),
//     new User(8, 'Andriy', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 44'),
//     new User(9, 'Vitalik', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 45'),
//     new User(10, 'Ivan', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 46')
// ]
// console.log(users)
//
// #2ikXsE2WiKZ
//
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
//
// console.log(users.filter((user) => user.id % 2 === 0));
//
// #pOeHKct
//
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(users.sort((a, b) => b.id - a.id));
//
// #nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client
//
// function Client(id, name, surname , email, phone, ...order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
// function Product (title, price) {
//     this.title = title;
//     this.price = price;
// }
//
// let clients = [
//     new Client(1, 'Misha', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 37',
//         [new Product('tv', 546), new Product('phone', 849)]),
//     new Client(2, 'Vika', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 38',
//         [new Product('email', 849), new Product('phone', 849), new Product('iphone', 849)]),
//     new Client(3, 'Roma', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 39',
//         [new Product('iphone', 849)]),
//     new Client(4, 'Daria', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 40',
//         [new Product('iphone', 849), new Product('iphone', 849)]),
//     new Client(5, 'Vasyl', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 41'),
//     new Client(6, 'Maria', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 42',
//         [new Product('keyboard', '325')]),
//     new Client(7, 'Anna', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 43',
//         [new Product('email', 849), new Product('phone', 849), new Product('iphone', 849), new Product('iphone', 849)]),
//     new Client(8, 'Andriy', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 44',
//         [new Product('tv', 546), new Product('phone', 849), new Product('iphone', 849)]),
//     new Client(9, 'Vitalik', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 45',
//         [new Product('tv', 546)]),
//     new Client(10, 'Ivan', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 46')
// ]
// console.log(clients)
//
// #8abtVjRv
//
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
//
// console.log(clients.sort((client1, client2) => client1.order.length - client2.order.length));
//
// #vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
//
//
// function Car(model, producer, year, maxSpeed, engineDisplacement) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineDisplacement = engineDisplacement;
//     this.drive = function (maxSpeed){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//     }
//     this.info = function () {
//         console.log(this);
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         if (newSpeed > 0) {
//             this.maxSpeed += newSpeed;
//         }
//     }
//     this.changeYear = function (newValue){
//         if (newValue > 1815) {
//             this.year = newValue;
//         }
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// car1 = new Car('passat', 'volksvagen', 2011, 250, 1.6);
// console.log(car1)
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(5)
// car1.changeYear(2022)
// car1.addDriver({name:'Misha', age: 27, status: true})
//
//
// #5kla3yMpgp
//
// – (Те саме, тільки через клас)
//
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car
//
// class Car {
//     constructor(model, producer, year, maxSpeed, engineDisplacement) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineDisplacement = engineDisplacement;
//     }
//         drive (maxSpeed) {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//         }
//         info () {
//             console.log(this);
//         }
//         increaseMaxSpeed (newSpeed) {
//             if (newSpeed > 0) {
//                 this.maxSpeed += newSpeed;
//             }
//         }
//         changeYear (newValue) {
//             if (newValue > 1815) {
//                 this.year = newValue;
//             }
//         }
//         addDriver (driver) {
//             this.driver = driver;
//         }
// }
//
// car1 = new Car('passat', 'volksvagen', 2011, 250, 1.6);
// console.log(car1)
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(5)
// car1.changeYear(2022)
// car1.addDriver({name:'Misha', age: 27, status: true})
//
// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.

//
// class Cinderella {
//     constructor(name, age, rozmir) {
//         this.name = name;
//         this.age = age;
//         this.rozmir = rozmir;
//     }
// }
//
// let cinderellas = [
//     cinderella1 = new Cinderella('Anna', 18, 35),
//     cinderella2 = new Cinderella('Vika', 19, 36),
//     cinderella3 = new Cinderella('Maria', 20, 37),
//     cinderella4 = new Cinderella('Sofia', 21, 38),
//     cinderella5 = new Cinderella('Ira', 22, 39),
//     cinderella6 = new Cinderella('Ola', 23, 41),
//     cinderella7 = new Cinderella('Daria', 24, 42)
// ]
//
// class Prince {
//     constructor(name, age, rozmi) {
//         this.name = name;
//         this.age = age;
//         this.rozmi = rozmi;
//     }
// }
//
// let prince = new Prince('Misha', 20, 36);

// for (let cinderella of cinderellas) {
//     if (cinderella.rozmir === prince.rozmi) {
//         prince.jona = cinderella.name;
//     }
// }
//
// console.log(prince)
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

// let princes = cinderellas.find(cinderella => cinderella.rozmir === prince.rozmi);
// if (princes) {
//     prince.jona = princes.name
// }
// console.log(prince);
// let princes = cinderellas.find(cinderella => cinderella.rozmir === prince.rozmi);
//
// console.log(princes)
//
//
//
//
//
//
//
//
//
// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter