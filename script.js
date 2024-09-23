// 1.1
function run11() {
    const name = prompt('Jmeno:');

    console.log(`Ahoj, ${name}!`);
}

// 1.2
function run12() {
    const number1 = parseInt(prompt('Cislo 1:'));
    const number2 = parseInt(prompt('Cislo 2:'));

    console.log(`Soucet: ${number1 + number2}`);
}

// 1.3
function run13() {
    const number1 = parseInt(prompt('Cislo 1:'));
    const number2 = parseInt(prompt('Cislo 2:'));

    if (number1 == number2) {
        console.log('Cisla jsou stejna.');
    }

    if (number1 > number2) {
        console.log('Cislo 1 je vetsi.');
    } else {
        console.log('Cislo 2 je vetsi.');
    }
}

// 2.1
function run21() {
    const number = parseInt(prompt('Cislo:'));

    console.log(`Cislo ${number} je ${number % 2 === 0 ? 'sude' : 'liche'}.`);
}

// 2.2
function run22() {
    const age = parseInt(prompt('Vek:'));

    if (age >= 18) {
        console.log('Uzivatel je plnolety.');
    }
    else if (age >= 15) {
        console.log(`Uzivatel bude plnolety za ${18 - age} let.`);
    }
    else if (age >= 0) {
        console.log(`Uzivatel je mladsi 15 let.`);

    }
}

// 3.1
function run31() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}

// 4.1
function run41() {
    const names = ['Petr', 'Jana', 'Karel', 'Lenka', 'Josef'];

    names.forEach(name => {
        console.log(name);
    });
}

// 4.2
function run42() {
    const names = ['Petr', 'Jana', 'Karel', 'Lenka', 'Josef'];

    names.sort();

    names.forEach(name => {
        console.log(name);
    });
}

// 4.3
function run43() {
    const randomNumbers = [];

    for (let i = 0; i < 10; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100));
    }

    const average = randomNumbers.reduce((sum, number) => sum + number, 0) / randomNumbers.length;

    console.log(`Prumer: ${average}`);
}

// 5.1
function greet(name) {
    console.log(`Ahoj, ${name}!`);
}

function run51() {
    const name = prompt('Jmeno:');
    greet(name);
}

// 5.2
function sort(array) {
    return array.sort();
}

// 6.1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    logName() {
        console.log(this.name);
    }
}

const person1 = new Person('Petr', 25);

// 6.2
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    log() {
        console.log(`${this.brand} ${this.model} (${this.year})`);
    }
}

function run61() {
    const car1 = new Car('Skoda', 'Octavia', 2015);
    car1.log();
}

// 6.3
class Book {
    constructor(title, author, date) {
        this.title = title;
        this.author = author;
        this.date = date;
    }
}

function logBooks(books) {
    books.forEach(book => {
        console.log(`${book.title} - ${book.author} (${book.date})`);
    });
}

function run62() {
    const books = [
        new Book('Harry Potter', 'J.K. Rowling', 1997),
        new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1954),
        new Book('The Da Vinci Code', 'Dan Brown', 2003)
    ];

    logBooks(books);
}

// 7.1
const text71 = document.getElementById('71text');
const button71 = document.getElementById('71button');

button71.addEventListener('click', () => {
    text71.innerText = 'akndoandsasdpkn';
});

// 7.2
const form72 = document.getElementById('72form');

form72.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form72.querySelector('input').value;

    console.log(name);
});

const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const result = document.getElementById('result');

function add() {
    const calcResult = parseInt(firstNumber.value) + parseInt(secondNumber.value);
    result.innerText = calcResult;
}

function subtract() {
    const calcResult = parseInt(firstNumber.value) - parseInt(secondNumber.value);
    result.innerText = calcResult;
}

function multiply() {
    const calcResult = parseInt(firstNumber.value) * parseInt(secondNumber.value);
    result.innerText = calcResult;
}

function divide() {
    const calcResult = parseInt(firstNumber.value) / parseInt(secondNumber.value);
    result.innerText = calcResult;
}
