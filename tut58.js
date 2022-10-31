console.log("this is tutorial 58")

//SetTimeOut = run function ONCE after an interval

//ClearTimesOut = Allows us to run function to run repetedly after an interval of time

function greet(name) {
    console.log("Hello Good morning" + name)

    
}
timeOut=setTimeout(greet,5000, "Saurav") //we can pass arguments of a function in this, 
//dont write function with () because it will call the function and will not wait for the given time interval

clearTimeout(timeOut);
//the settimeout fn returns a unique id.
//clear time out will stop execution of settime out

setInterval(greet,1000,'huihui')
//repeat after each interval
//also returns id

function displaytime(){
    time = new Date();

    console.log(time);
    document.getElementById('time').innerHTML=time;
}
setInterval(displaytime, 1000);
//funtion to display time