let nums = document.querySelectorAll('.num');
let calcOp = document.querySelectorAll('.calcOp')
let screen = document.getElementById('screen');
let sum = 0, lstNumInt = 0 , sumHezka = 0;
let lstNum = "" , op = "" , opHez = "" , opAhoz = "";
let num1Hez = false , num2Hez = false;
let sumAll = [];

nums.forEach(label =>
{
    if((label.innerText != 'C') && (label.innerText != '%') && (label.innerText != 'X²')) // Numbers Button
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
        });
    else if(label.innerText == '%')
        label.addEventListener('click',(event) => // % button
        {
            screen.innerText += label.innerText;
            opAhoz = label.innerText;
        });
    else
        label.addEventListener('click',(event) => // ² button
        {
            screen.innerText += label.innerText.charAt(1);
            opHez = label.innerText;
            if(lstNum == "")
                num1Hez = true;
            if(lstNum != "")
                num2Hez = true;
        });
})

calcOp.forEach(label => 
{
    if(label.innerText == "=") // equal button
        label.addEventListener('click', (event) =>
        {
            screen.innerText += "=" + funAct();
            sumAll.push(screen.innerText);
            lstNumInt = 0 , sumHezka = 0;
            op = "" , lstNum = "" , opHez = "" , opAhoz = "";
            num1Hez = false , num2Hez = false;
            console.log(sumAll);
        });
    else // other operators buttons
        label.addEventListener('click', (event) => 
        {
            screen.innerText += label.innerText;
            op = label.innerText;
        });
});

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
    else if(opHez == 'X²') // מבצע את פעולת החזקה
            if(lstNum == "") // בודק אם משתמש רוצה לעשות חזקה רק על המספר הראשון בלבד
                sum = sum*sum;
            else
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
        if(op == "/")
            if(lstNumInt == 0)
                    return "Can't divide by 0";
                else
                    sum = sum/lstNumInt/100;
            else if(op == "*")
                sum = sum*lstNumInt/100;
            else if(op == "-")
                sum = sum-lstNumInt/100;
            else if(op == "+")
                sum = sum+lstNumInt/100;        
    }   
    return sum;
}

function funSum(lastClick) // מבצע סיכום כל פעם איזה מספר רצה המשתמש ליצור בין לפני ובין אחרי האופרטור
{
    if(screen.innerText == "0") // אצחול הצג בכדי שספרת 0 לא תשורשר
        screen.innerText = "";
    if(sumAll[sumAll.length-1] == screen.innerText) // מבצע אתחול מחדש של המסך
    {
        screen.innerText = lastClick;
        sum = parseInt(screen.innerText);
    }
    else if(op == "") // יוצר את המספר שלפני האופרטור
    {
        screen.innerText += lastClick;
        sum = parseInt(screen.innerText);
    }
    else // יוצר את המספר שלאחר האופרטור
    {
        screen.innerText += lastClick;
        lstNum += screen.innerText.charAt(screen.innerText.length-1);
        lstNumInt = parseInt(lstNum);
    }
}
