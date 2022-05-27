"use strict";

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appDate = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');

        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appDate.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        }
    }
}

chooseExpenses();

// Используем цикл WHILE
/* let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appDate.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }
    i++;
}; */

// Цикл «do…while»
/* let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appDate.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }
    i++;
} while (i < 2); */


function detectDayBudget() {
    appDate.moneyPerDay = (appDate.budget / 30).toFixed();
    alert("Бюджет на 1 день " + appDate.moneyPerDay + " руб.");
}

detectDayBudget();

function detectLevel() {
    if (appDate.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appDate.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка!");
    }
}

detectLevel();

function checkSavings() {
    if (appDate.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appDate.montIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с Вашего дипозита: " + (appDate.montIncome).toFixed());
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let qestOptExpenses = prompt("Статья необязательных расходов?");
        appDate.optionalExpenses[i] = qestOptExpenses;
    }
}

chooseOptExpenses();


console.log(appDate);