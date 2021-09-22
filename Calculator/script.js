let nums = document.getElementsByClassName('num');
let calcOp = document.getElementsByClassName('calcOp');
let screen = document.getElementById('screen');
let sum = 0, lstNumInt = 0 , sumHezka = 0;
let lstNum = "" , op = "" , firstOp = "";

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
function funAct()
{
    if(op == calcOp[0].innerText)
        if(lstNumInt == 0)
            return "Can't divide by 0"
        else
            sum /= lstNumInt;
    else if(op == calcOp[1].innerText)
            sum *= lstNumInt;
    else if(op == calcOp[2].innerText)
            sum -= lstNumInt;
    else if(op == calcOp[3].innerText)
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
                    return sumHezka;
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

nums[0].addEventListener('click',(event) => // Clear button
{
    screen.innerText = 0;
    sum = 0 , lstNumInt = 0 , sumHezka = 0;
    op = "" , lstNum = "" , firstOp = "";
});

nums[1].addEventListener('click',(event) => // %
{
    screen.innerText += nums[1].innerText;
    op = nums[1].innerText;
});

nums[2].addEventListener('click',(event) => // ²
{
    screen.innerText += nums[2].innerText.charAt(1);
    op = nums[2].innerText;
});

calcOp[0].addEventListener('click',(event) => // ÷
{
    screen.innerText += calcOp[0].innerText;
    op = calcOp[0].innerText;
    firstOp = op;
});
calcOp[1].addEventListener('click',(event) => // *
{
    screen.innerText += calcOp[1].innerText;
    op = calcOp[1].innerText;
    firstOp = op; 
});
calcOp[2].addEventListener('click',(event) => // -
{
    screen.innerText += calcOp[2].innerText;
    op = calcOp[2].innerText;
    firstOp = op;
});
calcOp[3].addEventListener('click',(event) => // +
{
    screen.innerText += calcOp[3].innerText;
    op = calcOp[3].innerText;
    firstOp = op;
});
calcOp[4].addEventListener('click',(event) => // =
{
    screen.innerText = funAct();
    lstNumInt = 0 , sumHezka = 0;
    op = "" , lstNum = "" , firstOp = "";
});
