// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[]
//     role: [number, string]
// } = {
//     name: 'Gerardo',
//     age: 31,
//     hobbies: ['Sports', 'Cooking'],
//     role: [1, 'Author']
// };

enum Role {
    Admin, ReadOnly, Author
};

const person = {
    name: 'Gerardo',
    age: 31,
    hobbies: ['Sports', 'Cooking'],
    role: Role.Admin
}

let favActivities: string[];
favActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.Admin) {
    console.log('is Admin');
}