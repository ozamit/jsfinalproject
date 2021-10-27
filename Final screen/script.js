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

let targil_field = document.getElementsByClassName("targil");
let email_field = document.getElementById("eMail");
let phone_field = document.getElementById("phone");
let email_field_value = ""
let phone_field_value = ""
let submitBtn = document.getElementById("submit");
let submitBtns = document.querySelectorAll(".submit");

// בלחיצה על כפתור שלח

submitBtns.forEach(submitBtn => {
    submitBtn.addEventListener('click', (event) => {

        // מביא את התרגיל מהשדה הרלוונטי ושומר כל פרט בו במערך
        const targilFirst = submitBtn.parentNode.querySelector(".targil").value.split('');
        let targil_Final = "";
        // בדיקה שהשדות בטופס מלאים
        if (targilFirst == "") {
            alert("Please enter targil")
        } else if (phone_field.value == "" && wa_popup_back.style.display == "block") {
            alert("please enter phone")
        } else if (email_field.value == "" && email_popup_back.style.display == "block") {
            alert("please enter email")
        } else if (email_field.value.includes("@") == false && email_popup_back.style.display == "block") {
            alert("please enter valid email (with @)") 
        } else {
           
       // מקודד אופרטורים שיותאמו ללינק
        targilFirst.forEach((value, key) => {
            if(value == "+") {
                targil_Final += "%2B";
            } else if(value == "-") {
                targil_Final += "-";
            } else if(value == "*") {
                targil_Final += "%2A";
            } else if(value == "/") {
                targil_Final += "%2F";
            } else {
                targil_Final += value;
            }
        })
        // מייצר את הלינק הסופי לשיתוף
        shared_url = "file:///C:/FullStack/jsfinalproject/Calculator/calculator.html?"+ "source=share%26" + "targil=" + targil_Final + "&source=share";
        // מזהה איזה פופאפ פתוח, ווצאפ או מייל, מעדכן את הלינק הסופי ומעביר את הגולש לעמוד הרלוונטי
        if (wa_popup_back.style.display == "block") {
            phone_field_value = phone_field.value;
            window.open("https://wa.me/" + phone_field_value + "?text=Try%20this%20cool%20calculator:%20" + shared_url, '_blank');
        } else if (email_popup_back.style.display == "block") {
            email_field_value = email_field.value;
            window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=" + email_field_value + "&su=Check out this cool CALCULATOR&body=" + shared_url, '_blank');
        } else {
            alert("please try again")
        }
    }})
} )

// כפתור המחזיר בחזרה למחשבון עם פרטי המשתמש
back_btn.addEventListener('click', (event) => {
    window.location.href = "C:/FullStack/jsfinalproject/Calculator/calculator.html" + "?name=" + name + "&email=" + email;
    });

//הדפסת כל התרגילים שהמשתמש עשה
let text = localStorage.getItem("testJSON");
let sumAll = JSON.parse(text);
let hisCalc = document.getElementById('HistoryCalc');
if(sumAll.length > 7)
    document.getElementById('HistoryCalc').style.overflowY = 'scroll';
for(let i=0;i<sumAll.length;i++)
{
    let exercise = document.createElement('p');
    exercise.innerText = i+1+". "+ sumAll[i];
    exercise.style.fontSize = '20px';
    exercise.style.margin = '15px';
    hisCalc.appendChild(exercise);
}
