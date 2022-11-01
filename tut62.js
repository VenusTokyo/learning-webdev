let jsonobj={
    name :"ahrry",
    channel: "code with harry",
    frind: "rohan",
    food:"bhindi"
}
console.log(jsonobj)

let myobj=JSON.stringify(jsonobj)
//convering and object to string, because it is easier to transport over a network
console.log(myobj)

myobj=myobj.replace("bhindi","momos")
console.log(myobj)

newobj=JSON.parse(myobj)
//this convert a json sting to object
//this parse fn will not accept a normal string
console.log(newobj)