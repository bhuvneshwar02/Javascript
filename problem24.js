const people = [
    { name: 'alice', age: 25},
    { name: 'bob', age: 30},
    { name: 'charlie', age: 25},
];
const uniqueAges = people.reduce((ages,person) => ( age.includes(person.age) ? ages : [...ages, person.age]), []);
console.log(uniqueAges);