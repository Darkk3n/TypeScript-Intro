// const person: {
//     name: string;
//     age: number;
// } = {
const person: {
    name: string;
    age: number;
    hobbies: string[]
    role: [number, string]
} = {
    name: 'Gerardo',
    age: 31,
    hobbies: ['Sports', 'Cooking'],
    role: [1, 'Author']
};

let favActivities: string[];
favActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
console.log(person.role);