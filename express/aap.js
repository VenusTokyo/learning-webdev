const express=require("express")

const app=express();
const port=80;

app.get("/",(req,res)=>{
    res.status(200).send("this is home first express app with harry") 
})
app.post("/about",(req,res)=>{ //post request
    res.send("this is about page  post request first express app with harry")
})
app.get("/about",(req,res)=>{ //get request
    res.send("this is about page  first express app with harry")
})
app.get("/this",(req,res)=>{ //get request
    res.status(404).send("this page is not found")
})
//making the same backend in express
app.listen(port,()=>{
    console.log(`this application is succefully run on port ${port}`)
})