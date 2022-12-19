let space = document.querySelector(".space")
let subhead = document.querySelector(".subhead")
let email=localStorage.getItem('useremail')
console.log(email);
subhead.innerHTML=email

function checkWidth(){
    if(window.screen.availWidth<480){
        space.style.display='block'
        
    }
    else{
        space.style.display='none'

    }
   
        

    
    
}
localStorage.getItem() 
setInterval(() => {
    checkWidth()
}, 1000);