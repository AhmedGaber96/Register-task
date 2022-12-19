let nameOfuser = document.getElementById('nameOfuser')
let userMail = document.getElementById('userMail')
let Password = document.getElementById('Password')
let passwordConfirmation = document.getElementById('passwordConfirmation')
let creat = document.getElementById('creat')
let nameError = document.querySelector('.nameError')
let emailError = document.querySelector('.emailError')
let passwordError = document.querySelector('.passwordError')
let passwordConfirmError = document.querySelector('.passwordConfirmError')

     function checkname(name){
        let regex=/^([a-z]|[A-Z])([a-z]|[A-Z]|[0-9]){3,13}([a-z]|[A-Z])$/
        if(regex.test(name)==true)
        {
            

            
            return true
        }
        else if(regex.test(name)==false){
            

            return false

            
           
        }  
    }
    function chackEmail(mail){
        let regex= /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/
        if(regex.test(mail)==true)
        {
            emailError.style.display='none'
            return true
        }
        else{
            emailError.style.display='block'
            return false
            
           
        } 
    }
    function checkPassword(pass){
        let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

        if(regex.test(pass)==true)
        {
            passwordError.style.display='none'
            return true
        }
        else{
            passwordError.style.display='block'
            return false
        } 
    }
    function checkPasswordConfirm(){
        if( passwordConfirmation.value==Password.value){
            passwordConfirmError.style.display='none'
            
            return true
        }
        else{
            passwordConfirmError.style.display='block'
            return false
        } 
    }
    function checkAll(){
        if (chackEmail(userMail.value)==true && checkPassword(Password.value)==true&& checkname(nameOfuser.value)==true && checkPasswordConfirm()==true) {
            return true
            
        }
        else{
            return false
        }
    }



nameOfuser.addEventListener('keyup',()=>{
    if(checkname(nameOfuser.value)==true ){
        nameError.style.display='none'
       return true

    }
    else if(checkname(nameOfuser.value)==false) {
        nameError.style.display='block'
        return false

    }

})
userMail.addEventListener('keyup',()=>{
    if(chackEmail(userMail.value)==true){
        return true

    }
    else{
        return false
    }
})
Password.addEventListener('keyup',()=>{
    if(checkPassword(Password.value)==true){
        return true

    }
    else{
        return false
    }
})
passwordConfirmation.addEventListener('keyup',()=>{
    if(checkPasswordConfirm(passwordConfirmation.value)==true){
        return true

    }
    else{
        return false
    }
})

creat.addEventListener('click',function(e){
    e.preventDefault()
    if(checkAll()==true){
        document.querySelector('.checkRequirements').style.display='none'
        sendUserData ()

    

    
    }
    else{
        document.querySelector('.checkRequirements').style.display='block'
    }
})


async function sendUserData (){
    let userInfo= {
        email:userMail.value,
        username:nameOfuser.value,
        password:Password.value,
        password_confirmation:passwordConfirmation.value
    } 
    const options ={
        method:'post',
        body:JSON.stringify(userInfo),
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
    
    
        }
    
    }

        let send = await fetch('https://goldblv.com/api/hiring/tasks/register',options)
        let back =  await  send.json()
        console.log(back.email);
        localStorage.setItem('useremail',JSON.stringify(back.email))
        document.location.href = '../succeed/succeed.html'

    
     

}
