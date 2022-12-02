function validateForm(){


    let username = document.querySelector('#username').value
    let usernameLength = username.length
    
    let phoneNumber = document.querySelector('#phone').value
    let phoneNumberLength = phoneNumber.length

let userpassowrd = document.querySelector('#passowrd').value
let userpassowrdLength = userpassowrd.length

    let emailId = document.querySelector('#email').value
    let emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ 


    if(usernameLength <= 3){
        document.querySelector('.error').innerText = 'Name is required with minium 3 characters!!'

    } else if(phoneNumberLength !== 10){
        document.querySelector('.error').innerText = 'Phone number should be 10 digit'

     } else if(userpassowrdLength !== 10){
        document.querySelector('.error').innerText = 'User passowrd should be 12 digit'

    }else if(!emailId.match(emailFormat)){
        document.querySelector('.error').innerText = 'This is not valid email id'
        
        }else{
            document.querySelector('.error').innerText = ''
        
        }
}
