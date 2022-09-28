// console.log("this is a tutorial for loops")

// for (let i = 0; i < 9; i++) 
// {
//     console.log(i); 
// }

let friend =["rohan", "sanjeev","saurav","jyoti"];
for (let index = 0; index < friend.length; index++) {
    console.log("hello friend " +friend[index]);
    
}

//for each loop
friend.forEach(function f(element)
{
    console.log('hello frraandss ' + element+ " to mordern js")
});

//for of loop
for ( element of friend) {
    console.log('hello frraandss ' + element+ " to mordern js")

    
}

let employee={
    name:"harry",
    salary:2,
    boobs:"none"

}

//for in loop for iteration in objects
for (key in employee) {
    console.log(`the ${key} of employee is ${employee[key]}` );

    // use ` sign
}


//while loop
let i=0;
while (i<4) {
    console.log(`${i} is less than 4`)
    i++;
}
let j=34
//do while loop
do {
    console.log(`${j} is less than4`)
    i++;
} while (i<4);