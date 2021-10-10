let full_name_field = document.getElementById("fullName");
let full_name_value = "";
let email_field = document.getElementById("eMail");
let email_value = "";
let submitBtn = document.getElementById("submit")


submitBtn.addEventListener ("click", (event) => {

    if (full_name_field.value == "" && email_field.value == "") {
        alert("Please fill the form")
    } else if (full_name_field.value == "") {
        alert("please enter name")
    } else if (email_field.value == "") {
        alert("please enter email")
    } else if (email_field.value.includes("@") == false) {
        alert("please enter valid email (with @)") 
    } else {
        full_name_value = full_name_field.value;
        email_value = email_field.value;
        window.location.href = "file:///C:/fullstack/fullstackcourse/jsfinalproject/Calculator/calculator.html" + "?name=" + full_name_value + "&email=" + email_value;
    }
})
