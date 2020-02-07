const os = require('os');
const fs = require('fs');

const genders = ['Male', 'Female'];

const maleNames = ['John', 'Jack', 'James', 'Michael', 'Benjamin', 'Jacob', 'Henry', 'Nathan', 'Richard', 'Samuel', 'Charlie', 'Charles', 'Connor', 'Victor', 'Patrick', 'George', 'Jake', 'Wade', 'Frank', 'Jonas'];

const femaleNames = ['Ellie', 'Katherine', 'Isabella', 'Charlotte', 'Anna', 'Elena', 'Sarah', 'Julia', 'Delilah', 'Juliet', 'June', 'Camilla', 'Jessica', 'Kara', 'Leslie', 'Mia', 'Emily', 'Elizabeth', 'Claire', 'Alice'];

const lastNames = ['Smith', 'Doe', 'Locke', 'Ford', 'Faraday', 'Austen', 'Drake', 'Widmore', 'Sullyvan', 'Watts', 'Powell', 'Burke', 'Lewis', 'Linus', 'Littleton', 'Salander', 'Hawking', 'Dowson', 'Anderson', 'Morgan'];

const phoneNumbers = [123456789, 789456131, 369852147, 789456132, 2897136451, 731982645, 58139764, 493167582, 783291456, 821978315, 129751549, 657551298, 347581426, 698569815, 457812654, 953284561, 213215876, 385125932, 272698557, 323598759];

function randChoise(arr) {
    return arr[Math.floor(Math.random() * 20)];
}

const people = [];

for(let i = 0; i < 20; i++) {
    const person = {};
    person.id = i;
    person.gender = genders[Math.floor(Math.random() * 2)];
    if(person.gender === 'Male') person.name = randChoise(maleNames);      
    else person.name = randChoise(femaleNames);
    person.lastName = lastNames[Math.floor(Math.random() * 20)];
    person.age = Math.floor(Math.random() * 40 + 20);
    person.phoneNumber = randChoise(phoneNumbers);
    person.email = person.name + '.' + person.lastName + '@gmail.com';
    people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });