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
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["ReadOnly"] = 1] = "ReadOnly";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {}));
;
var person = {
    name: 'Gerardo',
    age: 31,
    hobbies: ['Sports', 'Cooking'],
    role: Role.Admin
};
var favActivities;
favActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.Admin) {
    console.log('is Admin');
}
