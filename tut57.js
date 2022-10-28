let para=document.getElementById('para');
para.addEventListener('mouseover',function run(){
alert('mouse inside')
});
para.addEventListener('mouseout',function run(){
alert('mouse outside')
});

function ToggleHide(){

    let btn=document.getElementById('btn');
    let para=document.getElementById('para');
    //para can be pointed without summoning with  get element by id
 if (para.style.display!='none') 
 {
     para.style.display='none'
    
 }
 else
 {
    para.style.display='block'

 }
}
