// console.log("this is a tutorial for loops")

// for (let i = 0; i < 9; i++) 
// {
//     console.log(i); 
// }

let friend = ["rohan", "sanjeev", "saurav", "jyoti"];
for (let index = 0; index < friend.length; index++) {
    console.log("hello friend " + friend[index]);

}

//for each loop
friend.forEach(function f(element) { 
    // function f runs for every element of friend array. this kinf of looop os best for iterating arrays

    console.log('hello frraandss ' + element + " to mordern js")
});

//for of loop
for (element of friend) {
    //simpler version of forEach loop
    console.log('hello frraandss ' + element + " to mordern js")


}

let employee = {
    name: "harry",
    salary: 2,
    boobs: "none"

}

//for in loop for iteration in objects
for (key in employee) {
    //for iteration in an object  for in loop is best
    console.log(`the ${key} of employee is ${employee[key]}`);

    // use ` sign
}


//while loop
let i = 0;
while (i < 4) {
    console.log(`${i} is less than 4`) //${i} is for indicating its the variable and not string and will onlu work when enclosed within `
    i++;
}
let j = 34
//do while loop
do {
    console.log(`${j} is less than4`)
    i++;
} while (i < 4);