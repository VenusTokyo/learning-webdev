const express=require("express")
const path=require("path")
const app=express();
const port=80;
//serving static files

app.use('/static',express.static('static'))

//set template engine as pug
app.set('view engine', 'pug')

//set the views directory
app.set('views',path.join(__dirname,'views'))

//our pug demo 
app.get("/demo",(req,res)=>{
    res.status(200).render('demo', { title: 'Hey there', message: 'Hello there! pug' }) 

})
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