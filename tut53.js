console.log("this is a tutorial");

function greet(name, greettext="greetings from js") // here it is default value
{
    let name1="bitch" // local variables
    // console.log()
    console.log(greettext +" "+name)
    console.log(name + " is a welcomed");
}

function sum(a,b,c){
    let d=a+b+c;
    return d; //returning a value
    // console.log("this is unreachable code") this will never execute
}

let s=sum(3,6,2);
console.log(s)
// let name="harry";

let name0="saurav";
let name1="booboo";
let name2="huihui";
let text="good morning";
greet(name0,text)
greet(name1)
greet(name2,text)






