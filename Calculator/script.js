let nums = document.querySelectorAll('.num');
let calcOp = document.querySelectorAll('.calcOp')
let screen = document.getElementById('screen');
let sum = 0, lstNumInt = 0 , sumHezka = 0;
let lstNum = "" , op = "" , opHez = "" , opAhoz = "";
let num1Hez = false , num2Hez = false;
let sumAll = [];
let link = document.getElementById('aLink');

// הדפסת פרטי המשתמש בהאדר
let queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let name = urlParams.get('name')
let email = urlParams.get('email')

user_name.innerText = name + " | " + email;

// האזנה לכל כפתורי המספרים, חזקה, אחוז ומחיקה
nums.forEach(label =>
{
    if((label.innerText != 'C') && (label.innerText != '%') && (label.innerText != 'X²')) // All numbers Buttons
        label.addEventListener('click', (event) =>
        {
            funSum(label.innerText);
        })  
    else if(label.innerText == 'C')
        label.addEventListener('click',(event) => // Clear button
        {
            screen.innerText = 0 , sum = 0 , lstNumInt = 0 , sumHezka = 0;
            op = "" , lstNum = "" , opHez = "" , opAhoz = "";
            num1Hez = false , num2Hez = false;
            calcOp.forEach(button => {
                button.disabled = false;
                button.style.cursor = 'pointer';
            });
            nums.forEach(button => {
                button.disabled = false
                button.style.cursor = 'pointer';
            })
        });
    else if(label.innerText == '%')
        label.addEventListener('click',(event) => // % button
        {
            screen.innerText += label.innerText;
            opAhoz = label.innerText;
        });
    else
        label.addEventListener('click',(event) => // X² button
        {
            screen.innerText += label.innerText.charAt(1);
            opHez = label.innerText;
            if(lstNum == "")
                num1Hez = true;
            if(lstNum != "")
                num2Hez = true;
        });
})

// האזנה לכל האופרטורים ולכפתור החישוב/שווה
calcOp.forEach(button => 
{
    if(button.innerText == "=") // equal button
        button.addEventListener('click', (event) =>
        {
            screen.innerText += "=" + funAct();
            sumAll.push(screen.innerText);
            calcOp.forEach(button =>
            {
                button.disabled = true;
                button.style.cursor = 'auto';
            })
            nums.forEach(button => {
                button.disabled = true
                button.style.cursor = 'auto';
            })
            document.getElementById('clear').style.cursor = 'pointer';
            lstNumInt = 0 , sumHezka = 0;
            op = "" , lstNum = "" , opHez = "" , opAhoz = "";
            num1Hez = false , num2Hez = false;
        });
    else // other operators buttons
        button.addEventListener('click', (event) => 
        {
            screen.innerText += button.innerText;
            op = button.innerText;
            calcOp.forEach(button =>
            {
                if(button.innerText != "=")
                    button.disabled = true;
                    button.style.cursor = 'auto';
            });
            document.getElementById('equal').style.cursor = 'pointer';
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
        calcOp.forEach(button =>
        {
            button.disabled = false;
            button.style.cursor = 'pointer';
        });
        nums.forEach(button =>
        {
            button.disabled = false;
            button.style.cursor = 'pointer';
        })
        screen.innerText = lastClick;
        sum = parseInt(screen.innerText);
    }
    else if(op == "") // כאשר כבר הוקלדה ספרה אבל עדיין לא הוקלד אופרטור, יוצר את המספר שלפני האופרטור
    {
        screen.innerText += lastClick;
        sum = parseInt(screen.innerText); // מגדיר את הסיכום עד כה. המספר הזה יחושב יחד אם המספר שיקליד המשתמש בהמשך אחרי האופרטור
    }
    else // כאשר כבר הוקלד אופרטור, יוצר את המספר שלאחר האופרטור
    {
        screen.innerText += lastClick;
        lstNum += screen.innerText.charAt(screen.innerText.length-1);
        lstNumInt = parseInt(lstNum); // מגדיר את המספר האחרון שהוקלד
    }
}


// הפונקציה שמופעלת רק בליחצה על כפתור השווה
function funAct() // מבצע את תהליך האופרטור הלחוץ
{
    if(op == "/" && opHez == "" && opAhoz == "") // מבצע פעולת חילוק
        if(lstNumInt == 0)
            return "Can't divide by 0"
        else
            sum /= lstNumInt;
    else if(op == "*" && opHez == "" && opAhoz == "") // מבצע פעולת כפל
            sum *= lstNumInt;
    else if(op == "-" && opHez == "" && opAhoz == "") // מבצע פעולת חיסור
            sum -= lstNumInt;
    else if(op == '+' && opHez == "" && opAhoz == "") // מבצע פעולת חיבור
            sum += lstNumInt;
    else if(opHez == 'X²' && opAhoz == "") // מבצע את פעולת החזקה
            if(lstNum == "") // בודק אם משתמש רוצה לעשות חזקה רק על המספר הראשון בלבד
                sum = sum*sum;
            else // כל החלק הזה מתייחס רק למצב שבו המשתמש מבצע חזקה על הספרה הרארשונה וממשיך בתרגיל
                {
                    if(num1Hez == true && num2Hez == true) // בודק אם נלחץ חזקה בשני המספרים
                    {
                        if(op == "/")
                            if(lstNumInt == 0)
                                return "Can't divide by 0";
                            else
                                sumHezka = (sum*sum) / (lstNumInt*lstNumInt);
                        else if(op == "*")
                                sumHezka = (sum*sum) * (lstNumInt*lstNumInt);
                        else if(op == "-")
                                sumHezka = (sum*sum) - lstNumInt*lstNumInt;
                        else if(op == "+")
                                sumHezka = (sum*sum) + (lstNumInt*lstNumInt);
                    }
                    else if(num1Hez == true) // בודק אם נלחץ חזקה רק במספר הראשון
                    {
                        if(op == "/")
                            if(lstNumInt == 0)
                                return "Can't divide by 0";
                            else
                                sumHezka = sum*sum / lstNumInt;
                        else if(op == "*")
                            sumHezka = sum*sum * lstNumInt;
                        else if(op == "-")
                            sumHezka = sum*sum - lstNumInt;
                        else if(op == "+")
                            sumHezka = sum*sum + lstNumInt;
                    }
                    else // בודק אם נלחץ חזקה רק במספר השני
                    {
                        if(op == "/")
                            if(lstNumInt == 0)
                                return "Can't divide by 0";
                            else
                                sumHezka =  sum / (lstNumInt*lstNumInt);
                        else if(op == "*")
                            sumHezka = sum*lstNumInt*lstNumInt;
                        else if(op == "-")
                            sumHezka = sum - lstNumInt*lstNumInt;
                        else if(op == "+")
                            sumHezka = sum + lstNumInt*lstNumInt;               
                    }
                    sum = sumHezka;
                }
    else // מבצע את פעולת האחוז
    {
        if(opHez == "") // אם האופרטור הראשון בלי חזקה
        {
            if(op == "/")
            if(lstNumInt == 0)
                    return "Can't divide by 0";
                else
                    sum = sum*100/lstNumInt;
            else if(op == "*")
                sum = sum*lstNumInt/100;
            else if(op == "-")
                sum = sum - (sum*lstNumInt/100);
            else if(op == "+")
                sum = sum+(sum*lstNumInt/100);   
        }
        else // אם האופרטור הראשון עם חזקה
        {
            if(op == "/")
            if(lstNumInt == 0)
                    return "Can't divide by 0";
                else
                    sum = sum*sum*100/lstNumInt;
            else if(op == "*")
                sum = sum*sum*lstNumInt/100;
            else if(op == "-")
                sum = (sum*sum)-(sum*lstNumInt/100);
            else if(op == "+")
                sum = (sum*sum)+(sum*lstNumInt/100);   
        }
    }   
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
    let targilBackArr = targilBack.split("");
    let firstNum = "";
    for(let i=0;i<targilBackArr.length;i++)
    {
        if(targilBackArr[i] != "+" && targilBackArr[i] != "-" && targilBackArr[i] != "*" && targilBackArr[i] != "/" && op == "")// כאשר כבר הוקלדה ספרה אבל עדיין לא הוקלד אופרטור, יוצר את המספר שלפני האופרטור
            firstNum += targilBackArr[i];// מגדיר את הסיכום עד כה. המספר הזה יחושב יחד אם המספר שיקליד המשתמש בהמשך אחרי האופרטור
        else if(targilBackArr[i] == "+" || targilBackArr[i] == "-" || targilBackArr[i] == "*" || targilBackArr[i] == "/")
            op = targilBackArr[i]; // כאשר כבר הוקלד אופרטור, יוצר את המספר שלאחר האופרטור
        else
            lstNum += targilBackArr[i]; // מגדיר את המספר האחרון שהוקלד
    }
    sum = parseInt(firstNum);
    lstNumInt = parseInt(lstNum);
    calcOp.forEach(button =>
        {
            button.disabled = true;
            button.style.cursor = 'auto';
        })
    nums.forEach(button => {
        button.disabled = true;
        button.style.cursor = 'auto';
    });
    document.getElementById('equal').disabled = false;
    document.getElementById('equal').style.cursor = 'pointer';
}
