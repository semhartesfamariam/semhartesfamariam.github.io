function ValidateForm(){
 var validUsername = false;
 var validUserpassword = false;
 var validFirstName = false;
 var validPhone = false;
 
 var letters = /^[A-Za-z]+$/;
 var numbers = /^[0-9]+$/;
 
 var errorMessages =""; //All the error Messages are going to stay in this variable
 /***********VALIDATES USERNAEM ******** */
 //Required filed
 //This syntax is using name-of-form.name-of-filed.value
 //you can also use document .getElementById("id-of-filed").value

 /***********VALIDATES USERNAEM ******** */
 //Required. Maximum 12 characters.
 if (myContact.username.value.length > 12 ||
 myContact.username.value===null || 
 myContact.username.value==="")
