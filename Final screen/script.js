let user_name = document.getElementById('user_name');
let wa_btn = document.getElementById('wa_btn');
let email_btn = document.getElementById('email_btn');
let back_btn = document.getElementById('back_btn');
let close_btn = document.getElementById('close');
let wa_popup_back = document.getElementById('wa_popup-back');
let email_popup_back = document.getElementById('email_popup-back');
let url = window.location.href;
let shared_url = ""

// הדפסת פרטי המשתמש בהאדר
let queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

let name = urlParams.get('name')
console.log(name);
let email = urlParams.get('email')
console.log(email);

user_name.innerText = name + " | " + email;

// הצגה והסתרה של הפופאפ

// פתיחה של הפופאפ הנכון לפי הכפתור שנלחץ
wa_btn.addEventListener('click', (event) => {
    wa_popup_back.style.display = "block";
    });
email_btn.addEventListener('click', (event) => {
    email_popup_back.style.display = "block";
    });
// הכרזה על כל כפתורי הסגירה בכל הפופאים
let close_btns = document.querySelectorAll('.close');
// האזנה לכפתורים וסגירת הפופאפ בלחיצה על הכפתור
close_btns.forEach(close_btn => {
    close_btn.addEventListener('click', (event) => {
        wa_popup_back.style.display = "none";
        email_popup_back.style.display = "none";
    })
} )


// שמירת ערכי טופס השיתוף והעברתם עם הלינק

let targil_field = document.getElementById("targil");
let email_field = document.getElementById("eMail");
let phone_field = document.getElementById("phone");
let email_field_value = ""
let phone_field_value = ""
let submitBtn = document.getElementById("submit");
let submitBtns = document.querySelectorAll(".submit")

submitBtns.forEach(submitBtn => {
    submitBtn.addEventListener('click', (event) => {
        shared_url = "file:///C:/fullstack/fullstackcourse/jsfinalproject/Calculator/calculator.html" + "?source=share&targil=" + targil_field.value;
        if (wa_popup_back.style.display == "block") {
            phone_field_value = phone_field.value
            window.location.href = "https://wa.me/" + phone_field_value + "?text=Try%20this%20cool%20calculator:%20" + shared_url
        } else if (email_popup_back.style.display == "block") {
            email_field_value = email_field.value
            window.open("mailto:" + email_field_value + "?subject=check out this cool calcolator&body=" + shared_url, '_blank');
        } else {
            alert("try again")
        }
    })
} )

// כפתור המחזיר בחזרה למחשבון עם פרטי המשתמש
back_btn.addEventListener('click', (event) => {
    window.location.href = "C:/FullStack/jsfinalproject/Calculator/calculator.html" + "?name=" + name + "&email=" + email;
    });

//הדפסת כל התרגילים שהמשתמש עשה
let text = localStorage.getItem("testJSON");
let sumAll = JSON.parse(text);
let hisCalc = document.getElementById('HistoryCalc');
for(let i=0;i<sumAll.length;i++)
{
    let exercise = document.createElement('p');
    exercise.innerText = i+1+". "+ sumAll[i];
    exercise.style.fontSize = 30+'px';
    hisCalc.appendChild(exercise);
}
