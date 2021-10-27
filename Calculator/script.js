let nums = document.querySelectorAll('.num');
let calcOp = document.querySelectorAll('.calcOp')
let screen = document.getElementById('screen');
let sum = 0, lstNumInt = 0;
let lstNum = "" , op = "";
let sumAll = [];
let link = document.getElementById('aLink');

document.getElementById('equal').disabled = true;
document.getElementById('equal').style.cursor = 'auto';

// הדפסת פרטי המשתמש בהאדר
let queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let name = urlParams.get('name')
let email = urlParams.get('email')

user_name.innerText = name + " | " + email;

function disBtn() // מבטל לחיצה על אופרטורים
{
    calcOp.forEach(button =>
    {
        button.disabled = true;
        button.style.cursor = 'auto';
    })
}

function enBtn() // מאפשר לחיצה על אופרטורים
{
    calcOp.forEach(button =>
    {
        button.disabled = false;
        button.style.cursor = 'pointer';
    })
}

// האזנה לכל כפתורי המספרים, חזקה, אחוז ומחיקה
nums.forEach(label =>
{
    if(label.innerText != 'C') // לחיצה על מספרים
        label.addEventListener('click', (event) =>
        {
            screen.style.fontSize = "50px";
            funSum(label.innerText);
        })  
    else label.addEventListener('click',(event) => // Clear button
        {
            screen.innerText = 0 , sum = 0 , lstNumInt = 0;
            op = "" , lstNum = "";
            enBtn();
        });
})

// האזנה לכל האופרטורים ולכפתור החישוב/שווה
calcOp.forEach(button => 
{
    if(button.innerText == "=") // equal button
        button.addEventListener('click', (event) =>
        {
            let tempSum = funAct();
            if(Number.isInteger(tempSum) == false) // אם המספר עשרוני  - מצמצם ל 3 מספרים אחרי נקודה עשרונית
                tempSum = tempSum.toFixed(3);
            screen.innerText += "=" + tempSum;
            if(screen.innerText.length > 9)
                screen.style.fontSize = "35px";
            sumAll.push(screen.innerText); // דוחף את התרגיל למערך להדפסת ההיסטוריה
            document.getElementById('equal').disabled = true;
            document.getElementById('equal').style.cursor = 'auto';
            lstNumInt = 0;
            op = "" , lstNum = "";
        });
    else // other operators buttons
        button.addEventListener('click', (event) => 
        {
            screen.innerText += button.innerText;
            op = button.innerText;
            calcOp.forEach(button =>
            {
                if(button.innerText != "=")
                    disBtn();
            });
        });
});

// הפונקציה שמופעלת רק בלחיצה על מספר
// מבצע סיכום כל פעם איזה מספר רצה המשתמש ליצור לפני או אחרי האופרטור
function funSum(lastClick) 
{
    
    if(screen.innerText == "0") // מתחיל באתחול המסך בכדי שספרת 0 לא תשורשר
        screen.innerText = "";
    if(sumAll[sumAll.length-1] == screen.innerText) // בהתחלה של תרגיל חדש מבצע אתחול מחדש של המסך ומאפשר לחיצה על האופרטורים
    {
        enBtn();
        screen.innerText = lastClick;
        sum = parseInt(screen.innerText);
        document.getElementById('equal').disabled = true;
        document.getElementById('equal').style.cursor = 'auto';
    }
    else if(op == "") // כאשר כבר הוקלדה ספרה אבל עדיין לא הוקלד אופרטור, יוצר את המספר שלפני האופרטור
    {
        screen.innerText += lastClick;
        sum = parseInt(screen.innerText); // מגדיר את הסיכום עד כה. המספר הזה יחושב יחד אם המספר שיקליד המשתמש בהמשך אחרי האופרטור
    }
    else // כאשר כבר הוקלד אופרטור, יוצר את המספר שלאחר האופרטור
    {
        document.getElementById('equal').disabled = false;
        document.getElementById('equal').style.cursor = 'pointer';
        screen.innerText += lastClick;
        lstNum += screen.innerText.charAt(screen.innerText.length-1); //  מוסיף את הספרה האחרונה שהוקלדה ללסטנם
        lstNumInt = parseInt(lstNum); // מגדיר את המספר האחרון שהוקלד
    }
}

// הפונקציה שמופעלת רק בליחצה על כפתור השווה
function funAct() // מבצע את תהליך האופרטור הלחוץ
{
    if(op == "/") // מבצע פעולת חילוק
        if(lstNumInt == 0)
            return "Can't divide by 0"
        else
            sum /= lstNumInt;
    else if(op == "*") // מבצע פעולת כפל
            sum *= lstNumInt;
    else if(op == "-") // מבצע פעולת חיסור
            sum -= lstNumInt;
    else if(op == '+') // מבצע פעולת חיבור
            sum += lstNumInt;
    else if(op == '^') // מבצע את פעולת החזקה
            {
                let firstNum = sum;
                for(let i=lstNumInt;i>1;i--)
                    sum *= firstNum;
            }
    else // מבצע את פעולת האחוז
        if(lstNumInt == 0)
            return "Can't divide by 0";
        else
            sum = sum * (lstNumInt/100);  
    return sum;
}

// *** HISTORY ***
// בלחיצה על מעבר להיסטורית החישובים שומר ג'ייסון עם הפעולות בזיכרון של הגולש
link.addEventListener('click',(event) => 
{
    const myJSON = JSON.stringify(sumAll);
    localStorage.setItem("testJSON", myJSON);
    window.location.href = "C:/FullStack/jsfinalproject/FinalScreen/index.html"  + "?name=" + name + "&email=" + email;
});

// *** POPUP ***
let popup_back = document.getElementById('popup-back');
let url = window.location.href;

if (url.includes("share")){
    popup_back.style.display = "block";
}

let full_name_field = document.getElementById("fullName");
let full_name_value = "";
let email_field = document.getElementById("eMail");
let email_value = "";
let submitBtn = document.getElementById("form-submit");

let targilBack = urlParams.get('targil');

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
        window.location.href = "C:/FullStack/jsfinalproject/Calculator/calculator.html" + "?name=" + full_name_value + "&email=" + email_value + "&targil=" + targilBack;
    }
})
// לאחר הגעה מקישור של מייל ביצוע התרגיל
if(targilBack != null)
{
    screen.innerText = targilBack;
    let targilBackArr = targilBack.split(""); // הפיכת התרגיל מסטרינג למערך
    let firstNum = "";
    for(let i=0;i<targilBackArr.length;i++)
    {
        if(targilBackArr[i] != "+" && targilBackArr[i] != "-" && targilBackArr[i] != "*" && targilBackArr[i] != "/" && op == "")// כאשר כבר הוקלדה ספרה אבל עדיין לא הוקלד אופרטור, יוצר את המספר שלפני האופרטור
            firstNum += targilBackArr[i];// מגדיר את הסיכום עד כה. המספר הזה יחושב יחד אם המספר שיקליד המשתמש בהמשך אחרי האופרטור
        else if(targilBackArr[i] == "+" || targilBackArr[i] == "-" || targilBackArr[i] == "*" || targilBackArr[i] == "/")
            op = targilBackArr[i]; // שומר את האופקטור
        else
            lstNum += targilBackArr[i]; // מגדיר את המספר האחרון שהוקלד
    }
    sum = parseInt(firstNum);
    lstNumInt = parseInt(lstNum);
    disBtn();
    document.getElementById('equal').disabled = false;
    document.getElementById('equal').style.cursor = 'pointer';
}
