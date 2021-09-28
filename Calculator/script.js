let nums = document.querySelectorAll('.num');
let calcOp = document.querySelectorAll('.calcOp')
let screen = document.getElementById('screen');
let upperScreen = document.getElementById('upper-screen');
let sum = 0, lstNumInt = 0 , sumHezka = 0;
let lstNum = "" , op = "" , firstOp = "" , targil = "";
let sumAll = [];

nums.forEach(label =>
{
    if((label.innerText != 'C') && (label.innerText != '%') && (label.innerText != 'X²'))
        label.addEventListener('click', (event) =>
        {
            funSum(label.innerText);
            targil += screen.innerText;
        })
    else if(label.innerText == 'C')
        label.addEventListener('click',(event) => // Clear button
        {
            screen.innerText = 0 , sum = 0 , lstNumInt = 0 , sumHezka = 0;
            op = "" , lstNum = "" , firstOp = "", upperScreen.innerText = "" , targil = "";
        });
    else if(label.innerText == '%')
        label.addEventListener('click',(event) => // %
        {
            screen.innerText += label.innerText;
            op = label.innerText;
        });
    else
        label.addEventListener('click',(event) => // ²
        {
            screen.innerText += label.innerText.charAt(1);
            op = label.innerText;
        });
})

calcOp.forEach(label => 
    {
    if(label.innerText == "=")
    {
        label.addEventListener( 'click', (event) =>
        {
            screen.innerText = funAct();
            targil += "=" + sum;
            sumAll.push(targil);
            targil = sum;
            upperScreen.innerText = "";
            lstNumInt = 0 , sumHezka = 0;
            op = "" , lstNum = "" , firstOp = "";
            console.log(targil);
            console.log(sumAll);
        });
    }
    else
        label.addEventListener( 'click', (event) => 
        {
            screen.innerText = funAct();
            screen.innerText += label.innerText;
            op = label.innerText;
            firstOp = op;
            upperScreen.innerText = screen.innerText;
            screen.innerText = "";
            targil += op;
        });
    });

function funAct() // מבצע את תהליך האופרטור הלחוץ
{
    if(op != "")
    {
        if(op == "/")
            if(lstNumInt == 0)
                return "Can't divide by 0"
            else
                sum /= lstNumInt;
        else if(op == "*")
                sum *= lstNumInt;
        else if(op == "-")
                sum -= lstNumInt;
        else if(op == '+')
                sum += lstNumInt;
        else if(op == 'X²') // מבצע את פעולת חזקה
                if(lstNum == "")
                    sum = sum*sum;
                else
                    {
                        if(firstOp == "/")
                            if(lstNumInt == 0)
                                return "Can't divide by 0";
                            else
                                sumHezka = lstNumInt*lstNumInt / sum;
                        else if(firstOp == "*")
                                sumHezka = lstNumInt*lstNumInt * sum;
                        else if(firstOp == "-")
                                sumHezka = lstNumInt*lstNumInt - sum;
                        else if(firstOp == "+")
                                sumHezka = lstNumInt*lstNumInt + sum;
                        sum = sumHezka;
                    }
        else // מבצע את פעולת האחוז
        {
                if(firstOp == "/")
                    if(lstNumInt == 0)
                        return "Can't divide by 0";
                    else
                        sum = sum/lstNumInt/100;
                else if(firstOp == "*")
                    sum = sum*lstNumInt/100;
                else if(firstOp == "-")
                    sum = sum-lstNumInt/100;
                else if(firstOp == "+")
                    sum = sum+lstNumInt/100;        
        }
    }   
    return sum;
}

function funSum(lastClick) // מבצע סיכום כל פעם איזה מספר רצה המשתמש ליצור בין לפני ובין אחרי האופרטור
{
    if(screen.innerText == "0")
        screen.innerText = "";
    if(op == "")
    {
        screen.innerText += lastClick;
        sum = parseInt(screen.innerText);
    }
    else
    {
        screen.innerText += lastClick;
        lstNum += screen.innerText.charAt(screen.innerText.length-1);
        lstNumInt = parseInt(lstNum);
    }
}
