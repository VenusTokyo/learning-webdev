function greet() {
    console.log("hello good morning")

}

greet1 = ()=>{
    console.log("a diifrent way for writing function")

}

greet2=()=>console.log("greet 2")
//another way of writing an arrow fn, without {}

setTimeout(()=>{
    console.log("inside set time out ")

},3000)
// this is an arrow function


let sum= (a,b)=>a+b;

//a shorter way of writing an arrow  functions
// in the above fn a+b is returned\

let half=a=>a/2;
//even can be written without brackets, only when there is 1 argument

let obj1={
    greeting:"good morning",
    names: ["harry","saurav", "bitch"],
    speak(){
        this.names.forEach((student)=>{
            console.log(this.greeting+"kukdoo koo"+ student)
//here because of the arrow fn this of the fn is its parent, eles if it would have bee a regular fn, this will be withing its scope and not the parent. also called lexical this
        })
    }
}
obj1.speak()