let nums = document.getElementsByClassName('num');
let calcOp = document.getElementsByClassName('calcOp');
let screen = document.getElementById('screen');
let upper_screen = document.getElementById('upper-screen');
let sum = 0, lstNumInt = 0 , sumHezka = 0;
let lstNum = "" , op = "" , firstOp = "";



// דרך מקוצרת לקלוט לחיצה על כפתור במחשבון ולעשות איתה פעולה
let num2 = document.querySelectorAll('.num')
num2.forEach(label => {
    label.addEventListener( 'click', (event) => {
        console.log(label.innerText) // לצורך בקרה בלבד, אפשר למחוק בהמשך
        funSum(label.innerText);
    })
})

let op2 = document.querySelectorAll('.op_btn')
op2.forEach(label => {
    label.addEventListener( 'click', (event) => {
        op = label.innerText;
        firstOp = op;
        screen.innerText = "";
        upper_screen.innerText += sum + ' ' + label.innerText;
        console.log(label.innerText); // לצורך בקרה בלבד, אפשר למחוק בהמשך
        conLog(); // לצורך בקרה בלבד, אפשר למחוק בהמשך
    })
})


/*
// ** user click on number **
nums[3].addEventListener('click',(event) => // button number 7
{
    funSum(7);
});

nums[4].addEventListener('click',(event) => // button number 8
{
    funSum(8);
});

nums[5].addEventListener('click',(event) => // button number 9
{
    funSum(9);
});

nums[6].addEventListener('click',(event) => // button number 4
{
    funSum(4);
});

nums[7].addEventListener('click',(event) => // button number 5
{
    funSum(5);
});

nums[8].addEventListener('click',(event) => // button number 6
{
    funSum(6);
});

nums[9].addEventListener('click',(event) => // button number 1
{
    funSum(1);
});

nums[10].addEventListener('click',(event) => // button number 2
{
    funSum(2);
});

nums[11].addEventListener('click',(event) => // button number 3
{
    funSum(3);
});

nums[12].addEventListener('click',(event) => // button number 0
{
    funSum(0);
});

*/

// ** user click on operator **
nums[0].addEventListener('click',(event) => // Clear button
{
    upper_screen.innerText = '';
    screen.innerText = 0;
    sum = 0 , lstNumInt = 0 , sumHezka = 0;
    op = "" , lstNum = "" , firstOp = "";
    conLog();
});

nums[1].addEventListener('click',(event) => // %
{
    upper_screen.innerText += sum + '%';
    screen.innerText = "";
    op = calcOp[1].innerText;
    firstOp = op;
    conLog();
});

nums[2].addEventListener('click',(event) => // ²
{
    upper_screen.innerText += sum + '²';
    screen.innerText = "";
    op = calcOp[2].innerText;
    firstOp = op;
    conLog();
});

/*
calcOp[0].addEventListener('click',(event) => // ÷
{
    upper_screen.innerText += sum + ' ÷';
    screen.innerText = "";
    op = calcOp[0].innerText;
    firstOp = op;
    conLog();
});
calcOp[1].addEventListener('click',(event) => // *
{
    upper_screen.innerText += sum + ' X';
    screen.innerText = "";
    op = calcOp[1].innerText;
    firstOp = op;
    conLog();   
});
calcOp[2].addEventListener('click',(event) => // -
{
    upper_screen.innerText += sum + ' -';
    screen.innerText = "";
    op = calcOp[2].innerText;
    firstOp = op;
    conLog();
});
calcOp[3].addEventListener('click',(event) => // +
{
    upper_screen.innerText += sum + ' +';
    screen.innerText = "";
    op = '+';
    firstOp = op;
    conLog();
});
*/

calcOp[0].addEventListener('click',(event) => // =
{
    screen.innerText = funAct();
    lstNumInt = 0 , sumHezka = 0;
    op = "" , lstNum = "" , firstOp = "";
});


// בפעולות שקורות בלחיצה על שווה
function funAct()
{   upper_screen.innerText = '';
    if(op == '/') // מבצע את פעולת חילוק
        if(lstNumInt == 0)
            return "Can't divide by 0"
        else
            sum /= lstNumInt;
    else if(op == '*') // מבצע את פעולת כפל
            sum *= lstNumInt;
    else if(op == '-') // מבצע את פעולת חיסור
            sum -= lstNumInt;
    else if(op == '+')  // מבצע את פעולת חיבור
            sum += lstNumInt;
    else if(op == nums[2].innerText) // מבצע את פעולת חזקה
            if(lstNum == "")
                sum = sum*sum;
            else
                {
                    if(firstOp == calcOp[0].innerText)
                        if(lstNumInt == 0)
                            return "Can't divide by 0";
                        else
                            sumHezka = lstNumInt*lstNumInt / sum;
                    else if(firstOp == calcOp[1].innerText)
                            sumHezka = lstNumInt*lstNumInt * sum;
                    else if(firstOp == calcOp[2].innerText)
                            sumHezka = lstNumInt*lstNumInt - sum;
                    else if(firstOp == calcOp[3].innerText)
                            sumHezka = lstNumInt*lstNumInt + sum;
                    sum = sumHezka;
                }
    else // מבצע את פעולת האחוז
    {
            if(firstOp == calcOp[0].innerText)
                if(lstNumInt == 0)
                    return "Can't divide by 0";
                else
                    sum = sum/lstNumInt/100;
            else if(firstOp == calcOp[1].innerText)
                sum = sum*lstNumInt/100;
            else if(firstOp == calcOp[2].innerText)
                sum = sum-lstNumInt/100;
            else if(firstOp == calcOp[3].innerText)
                sum = sum+lstNumInt/100;
    }
    return sum;
    screen.innerText = sum;
    
    conLog();
}


// הפעולה מתבצעת בלחיצה על ספרה
// מבצע סיכום כל פעם איזה מספר רצה המשתמש ליצור בין לפני ובין אחרי האופרטור
function funSum(lastClick) 
{
    if(screen.innerText == "0")
        screen.innerText = "";
    if(op == "")
    {
        screen.innerText += lastClick;
        sum = parseInt(screen.innerText);
        conLog()
    }
    else
    {
        screen.innerText += lastClick;
        lstNum += screen.innerText.charAt(screen.innerText.length-1);
        lstNumInt = parseInt(lstNum);
        conLog()
    }
}

function conLog(){
    console.log(
        "sum = " + sum + " | " +
        "lstNumInt = " + lstNumInt + " | " +
        "sumHezka = " + sumHezka + " | " +
        "lstNum = " + lstNum + " | " +
        "op = " + op + " | " +
        "firstOp = " + firstOp + " | "
        );
};
