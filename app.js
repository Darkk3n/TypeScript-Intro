// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: 'Gerardo',
    age: 31,
    hobbies: ['Sports', 'Cooking'],
    role: [1, 'Author']
};
var favActivities;
favActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person.role);
