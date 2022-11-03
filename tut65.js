// sychronus or blocking
// line by line excution

//asyncronus or non blocking
// callbacks will fire

const fs=require("fs")
fs.readFile("new.text","utf-8",(err,data)=>{ //readFile is a asyncronus and needs a callback fn
    console.log(data);
});
console.log("this is a message")//this line will be excuted first