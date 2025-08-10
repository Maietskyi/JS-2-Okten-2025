// JS. ДЗ 8
// Коди з лекцій та коди з ДЗ
//
// https://github.com/OktenSchool/javascript.git
//
//
//
//     #iz6emEsP2BA
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
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
//
//     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції
//
// console.log(coursesAndDurationArray.map((course, index) => ({id: index + 1, ...course})));
//
//
//
//     #AiN5CoUQ
//
//     Створити функцію, яка робить глибоку копію об’єкта.
//
//         Додати перевірки на undefined, null, NaN.
//
//         Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.
//
function cloner(object) {
    if (object) {
        let functions = [];
        for (let key in object) {
            console.log(typeof object[key]);
            if (typeof object[key] === "function") {
                const functionsClone = object[key].bind({});
                functions.push(functionsClone);
            }
        }
        console.log(functions);
        const cloneObj = JSON.parse(JSON.stringify(object));
        for (let func of functions) {
            cloneObj[func.key] = func.functionsClone;
        }


        console.log(cloneObj);
        return cloneObj;
    }
    throw new Error('!!!!!!!!!!')
}

console.log(cloner({
    id: 1, name: 'Misha', password() {
    }
}));
