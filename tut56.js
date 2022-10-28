let main= document.getElementById('main');
console.log(main);


let nav= document.getElementById('nav');
console.log(nav);




let containers= document.getElementsByClassName('container')
console.log(containers);

//this is just like css selectors
let sel = document.querySelector('.container') 
//returns first conatiner class since .
console.log("selctor returns", sel);


let s = document.querySelectorAll('#nav>li')
//selectes all that match the query
console.log("selector returns", s)

// s[0].innerHTML="inserted" (for dynamically changing )