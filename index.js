function SaveStudentDetails() {
  validateControls();
}
var gender;
var specialization = [];
function validateControls() {
  var email_input = document.getElementById(`email`);
  var pwd_input = document.getElementById(`pwd`);

  var email_span = document.getElementById(`email_span`);
  var pwd_span = document.getElementById(`pwd_span`);

  var worng = `<i class="bi bi-exclamation-circle-fill"></i>`;
  var right = `<i class="bi bi-check-circle-fill"></i>`;
  var status = true;







// LocalStorage

var firstname = document.getElementById(`fname`).value;
var lasttname = document.getElementById(`lname`).value;
var email  = document.getElementById(`email`).value;
var password  = document.getElementById(`pwd`).value;
var confirmpassowrd  = document.getElementById(`cnfpwd`).value;
var phonenumber  = document.getElementById(`phone`).value;
var gender  = document.getElementById(`male`).value;
var Gender  = document.getElementById(`female`).value;
var Date0fbirth  = document.getElementById(`dob`).value;
var Address  = document.getElementById(`uname`).value;
var State  = document.getElementById(`countrySelect`).value;
var City  = document.getElementById(`citySelect`).value;
var Pincode  = document.getElementById(`pin`).value;
var Qualification  = document.getElementById(`qualification`).value;
var language  = document.getElementById(`tl`).value;
var Language  = document.getElementById(`hi`).value;
var languagE  = document.getElementById(`en`).value;
var photo  = document.getElementById(`photo`).value;


var user = {

  Firstname :firstname,
  Lastname :lasttname,
  Email : email ,
  Paddword : password,
  Confirmpassword : confirmpassowrd,
  Phonenumber : phonenumber,
  Gender : Gender,
  gender :gender,
  Dateofbirth : Date0fbirth ,
  Address : Address,
  State : State,
  City : City,
  PinCode : Pincode,
  Qualification :Qualification,
  Language : language,
  Language : Language,
  Language : languagE,
  Photo : photo
  

  
}

var json = JSON.stringify(user);
localStorage.setItem("First Name", firstname);
localStorage.setItem("Last Name",lasttname );
localStorage.setItem("Email", email );
localStorage.setItem("Password",password );
localStorage.setItem("Confirm Passowrd", confirmpassowrd);
localStorage.setItem("Gender", gender);
localStorage.setItem("Gender", Gender);
localStorage.setItem( "Date of Birth", Date0fbirth);
localStorage.setItem("Address", Address);
localStorage.setItem("City", City);
localStorage.setItem("State", State);
localStorage.setItem("Pincode", Pincode);
localStorage.setItem("Qualification", Qualification);
localStorage.setItem("Language", language);
localStorage.setItem("Language", Language);
localStorage.setItem("Language", languagE);
localStorage.setItem("Photo", photo);
console.log('user ')

  //FirstName
  var fname = document.getElementById("fname");
  var fname_span = document.getElementById("fname_span");
  if (fname.value == "" || fname.value == undefined) {
    fname_span.innerHTML = `${worng} Enter your First name`;
    fname_span.style.color="#d61609"
    fname.style.border = `1px solid #d61609`;
    status = false;
  } else {
    fname_span.innerHTML = `${right} Thank you`;
    fname_span.style.color = " #0b0be3"
    fname.style.border = "1px solid #0b0be3";
    
  }

  //Last Name
  //LastName
  var lname = document.getElementById("lname");
  var lname_span = document.getElementById("lname_span");
  if (lname.value == "" || lname.value == undefined) {
    lname_span.innerHTML = `${worng} Enter your Last name`;
    lname_span.style.color = " #d61609"
    lname.style.border = `1px solid #d61609`;
    status = false;
  } else {
    lname_span.innerHTML = `${right} Thank you`;
    lname_span.style.color= "  #0b0be3"
    lname.style.border = "1px solid #0b0be3";
    
  }

  //email
  if (email_input.value == "" || email_input.value == undefined) {
    email_span.innerHTML = `${worng} Please Enter Your Email`;
    email_span.style.color = "#d61609";
    email_input.style.border = "1px solid #d61609";
    status = false;
  } else if (
    !email_input.value.match(
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/
    )
  ) {
    email_span.innerHTML = `${worng}  Valid Email Only`;
    email_span.style.color = "#d61609";
    email_input.style.border = "1px solid #d61609";
    status = false;
  } else {
    email_span.innerHTML = `${right} Thank you `;
    email_span.style.color = "#0b0be3";
    email_input.style.border = "1px solid #0b0be3";
    
  }
  
  //pwd
  if (pwd_input.value == "" || pwd_input.value == undefined) {
    pwd_span.innerHTML = `${worng} Please Enter Your Password`;
    pwd_span.style.color = "#d61609";
    pwd_input.style.border = "1px solid #d61609";
    status = false;
  } else if (
    !pwd_input.value.match(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*-]).{6,}$/ 
    ) 
  ) {
    pwd_span.innerHTML = ` ${worng}  One Uppercase, Lowercase, Number, Special Character Must`;
    pwd_span.style.color = "#d61609";
    pwd_input.style.border = "1px solid #d61609";
    status = false;
  }
   else {
    pwd_span.innerHTML = `${right} Thank you `;
    pwd_span.style.color = "#0b0be3";
    pwd_input.style.border = "1px solid #0b0be3"
  }

  
  var  cnfpwd = document.getElementById(`cnfpwd`) 
  var msg = document.getElementById(`msg`)
  var pwdlen = document.getElementById(`pwdlen`)

   //Password confirmation
      if(cnfpwd.value == "" || cnfpwd.value == undefined ){ 
        cnfpwd.style.border = `1px solid #d61609`;
        status= false
      }
      else if(pwd_input.value == cnfpwd.value ){
        msg.innerHTML = ` ${right} Password Match`
        msg.style.color="#0b0be3"
        cnfpwd.style.border= "1px solid #0b0be3";
        status=false
      }
      else{
        msg.innerHTML = `${worng} Password Doesn't Match`
        msg.style.color = "#d61609 "
        cnfpwd.style.border = `1px solid #d61609`
       
      }
        
   
      //Password Strength
      if(pwd_input.value == "" || pwd_input.value==undefined){
          
         status = false
      }
      else if(pwd_input.value.length <= 7){
        pwdlen.innerHTML = `${worng} Password is Weak`
        pwdlen.style.color="#d61609 "
         status = false
      }
      else{
        pwdlen.innerHTML = `${right} Password is Strong`
        pwdlen.style.color="#0b0be3 " 
      }
  return false;

}



//Textarea meter and character
function myfun() {
  var input_dom = document.getElementById("uname");
  var span_dom = document.getElementById("uname_span");
  var meter_dom = document.getElementById("uname_meter");

  span_dom.innerHTML = input_dom.value.length;
  meter_dom.value = input_dom.value.length;
}

//Image Preview

function getImagePreview(event) {
  var image = URL.createObjectURL(event.target.files[0]);
  var imagediv = document.getElementById("preview");
  var newimg = document.createElement("img");
  imagediv.innerHTML = "";
  newimg.src = image;
  newimg.width = "200";
  imagediv.appendChild(newimg);
}

//States and Cities

var citiesByState = {
  Telangana: ["Nizamabad", "Hydrabad", "Secundrabad", "Kamareddy"],
  AP: ["Vijayawad", "Vizag", "Guntur", "Ongole"],
};
function makeSubmenu(value) {
  if (value.length == 0)
    document.getElementById("citySelect").innerHTML = "<option></option>";
  else {
    var citiesOptions = "";
    for (cityId in citiesByState[value]) {
      citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
    }
    document.getElementById("citySelect").innerHTML = citiesOptions;
  }
}


var input = document.querySelector("#phone");
window.intlTelInput(input, {
    separateDialCode: true,
    excludeCountries: ["in", "il"],
    preferredCountries: ["ru", "jp", "pk", "no"]
});



