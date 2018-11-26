let employees = [
    {name: 'tom', age: 21},
    {name: 'clive', age: 63}
];

// for (var i = 0; i < employees.length; i++){
//     employees[employees[i].name] = employees[i];
// }

//clivesAge = employees['clive'].age

let clivesAge = employees.find(function(employee){
    return employee.name === 'clive';
}).age;


console.log(clivesAge);




