let form=document.querySelector("form");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let emailerror=document.querySelector("#emailError");
letcnfpass=document.querySelector("#confirmpassmord")

let enterkey=document.querySelector("#btn");
let user=document.querySelector("#username");
form.addEventListener("submit",(dets)=>{
    dets.preventDefault();
    let email_regix=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let password_regix=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let username_regex = /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._-]+(?<![_.])$/;


    let emailvalid=email_regix.test(email.value);
    let passvalied=password_regix.test(password.value);
    let uservalied=username_regex.test(user.value);
     if(email.value === ""){
        emailerror.style.display="initial";
        emailerror.textContent ="email required ";
        
    }

    else if(!emailvalid){
        emailerror.style.display="initial";
        emailerror.textContent ="plz enter correct email eg: abc@emamplemail.com";

    }
    
    else{
         emailerror.style.display="none";
    }


       if(password.value === ""){
        passworderror.style.display="initial";
        passworderror.textContent ="password required ";
        
    }

    else if(!passvalied){
        passworderror.style.display="initial";
        passworderror.textContent ="plz enter password btm 6-16 characters including at least one uppercase letter, one lowercase letter, one number, and one special character";

    }
    
    else{
         passworderror.style.display="none";
    }
    
       if(user.value === ""){
        usernameerror.style.display="initial";
        usernameerror.textContent ="username required ";
        
    }

    else if(!uservalied){
        usernameerror.style.display="initial";
        usernameerror.textContent ="Username must be 4-20 characters long and can only contain letters, numbers, '.', and '_'.";

    }
    
    else{
         usernameerror.style.display="none";
    }
    if(cnfpass.value!=password.value){
      confirmPassword.error.style.display="initial";
       confirmPassword.error.textContent ="password dont match";
    }



})
enterkey.addEventListener("keydown",(dets)=>{
    if(dets.key==="Enter"){
         
         enterkey.click();

    }

})
