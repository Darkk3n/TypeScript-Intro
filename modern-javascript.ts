//const add = (n1: number, n2: number = 1) => n1 + n2;


// console.log(add(2));

// const printOutput = (output: string | number) => console.log(output)


// const button = document.querySelector('button');

// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(2, 4));



//... in an array is the equivalent of List<T>.AddRange in C#
// activeHobbies.push(...hobbies);

// console.log(activeHobbies);

const person = {
    personName: 'Gera',
    age: 31
};

const copiedPerson = { ...person };

console.log(person);
console.log(copiedPerson);

//Rest Parameters (...)
const add = (...numberArr: number[]) => {
    return numberArr.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}

console.log(add(1, 2, 3, 54, 5));

//Array and Object destructuring
const hobbies = ['Sports', 'Cooking'];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, hobbies);

const { personName, age } = person;