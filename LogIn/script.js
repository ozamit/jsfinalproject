let full_name_field = document.getElementById("fullName");
let full_name_value = "";
let email_field = document.getElementById("eMail");
let email_value = "";
let submitBtn = document.getElementById("submit")

submitBtn.addEventListener ("click", (event) => {
    full_name_value = full_name_field.value;
    email_value = email_field.value;
    console.log(full_name_value + " - " + email_value);
    window.location.href = "file:///C:/fullstack/fullstackcourse/jsfinalproject/Calculator/calculator.html" + "?name=" + full_name_value + "&email=" + email_value;
})




