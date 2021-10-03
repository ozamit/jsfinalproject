let user_name = document.getElementById('user_name')
let email_btn = document.getElementById('email_btn');
let close = document.getElementById('close');
let popup_back = document.getElementById('popup-back');
//let popup_content = document.getElementById('popup-content');
let url = window.location.href;
let shared_url = ""



// הצגה והסתרה של הפופאפ
email_btn.addEventListener('click', (event) => {
    popup_back.style.display = "block";
    });

close.addEventListener('click', (event) => {
    popup_back.style.display = "none";
    });



// הדפסת פרטי המשתמש בהאדר

let queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

let name = urlParams.get('name')
console.log(name);
let email = urlParams.get('email')
console.log(email);

user_name.innerText = name + " | " + email;



// file:///C:/fullstack/fullstackcourse/jsfinalproject/Final%20screen/index.html?name=amit&email=myemail@gmail.com


//shared_url = url + "&parameter="
//console.log(shared_url)