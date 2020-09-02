// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: 'Gerardo',
    age: 31,
    hobbies: ['Sports', 'Cooking']
};

let favActivities: string[];
favActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}