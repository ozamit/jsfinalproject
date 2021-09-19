let nums = document.getElementsByClassName('num');
let calcOp = document.getElementsByClassName('calcOp');
let screen = document.getElementById('screen');
let sum = 0;

nums[0].addEventListener('click',(event) => // Clear button
{
    screen.innerText = 0;
    sum = 0;
})
nums[1].addEventListener('click',(event) => // %
{
    screen.innerText += nums[1].innerText;
    sum = sum*parseInt(screen.innerText.charAt(screen.innerText.length-2))/100;
})
nums[2].addEventListener('click',(event) => // ²
{
    screen.innerText += nums[2].innerText.charAt(1);
    if(screen.innerText.length == 2)
        sum = sum*sum;
    else
    {
        let hezka = parseInt(screen.innerText.charAt(screen.innerText.length-2));
        console.log(sum);
        sum = hezka*hezka;
    }
})
nums[3].addEventListener('click',(event) => // button number 7
{
    if(screen.innerText == "0")
    {
        screen.innerText = 7;
        sum = 7;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[0].innerText)
    {
        screen.innerText += " " + 7;
        sum /= 7;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[1].innerText)
    {
        screen.innerText += " " + 7;
        sum *= 7;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[2].innerText)
    {
        screen.innerText += " " + 7;
        sum -= 7;
    }
    else
    {
        screen.innerText += " " + 7;
        sum  += 7;
    }
})
nums[4].addEventListener('click',(event) => // button number 8
{
    if(screen.innerText == "0")
    {
        screen.innerText = 8;
        sum = 8;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[0].innerText)
    {
        screen.innerText += " " + 8;
        sum /= 8;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[1].innerText)
    {
        screen.innerText += " " + 8;
        sum *= 8;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[2].innerText)
    {
        screen.innerText += " " + 8;
        sum -= 8;
    }
    else
    {
        screen.innerText += " " + 8;
        sum  += 8;
    }
})
nums[5].addEventListener('click',(event) => // button number 9
{
    if(screen.innerText == "0")
    {
        screen.innerText = 9;
        sum = 9;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[0].innerText)
    {
        screen.innerText += " " + 9;
        sum /= 9;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[1].innerText)
    {
        screen.innerText += " " + 9;
        sum *= 9;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[2].innerText)
    {
        screen.innerText += " " + 9;
        sum -= 9;
    }
    else
    {
        screen.innerText += " " + 9;
        sum  += 9;
    }
})
nums[6].addEventListener('click',(event) => // button number 4
{
    if(screen.innerText == "0")
    {
        screen.innerText = 4;
        sum = 4;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[0].innerText)
    {
        screen.innerText += " " + 4;
        sum /= 4;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[1].innerText)
    {
        screen.innerText += " " + 4;
        sum *= 4;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[2].innerText)
    {
        screen.innerText += " " + 4;
        sum -= 4;
    }
    else
    {
        screen.innerText += " " + 4;
        sum  += 4;
    }
})
nums[7].addEventListener('click',(event) => // button number 5
{
    if(screen.innerText == "0")
    {
        screen.innerText = 5;
        sum = 5;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[0].innerText)
    {
        screen.innerText += " " + 5;
        sum /= 5;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[1].innerText)
    {
        screen.innerText += " " + 5;
        sum *= 5;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[2].innerText)
    {
        screen.innerText += " " + 5;
        sum -= 5;
    }
    else
    {
        screen.innerText += " " + 5;
        sum  += 5;
    }
})
nums[8].addEventListener('click',(event) => // button number 6
{
    if(screen.innerText == "0")
    {
        screen.innerText = 6;
        sum = 6;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[0].innerText)
    {
        screen.innerText += " " + 6;
        sum /= 6;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[1].innerText)
    {
        screen.innerText += " " + 6;
        sum *= 6;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[2].innerText)
    {
        screen.innerText += " " + 6;
        sum -= 6;
    }
    else
    {
        screen.innerText += " " + 6;
        sum  += 6;
    }
})
nums[9].addEventListener('click',(event) => // button number 1
{
    if(screen.innerText == "0")
    {
        screen.innerText = 1;
        sum = 1;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[0].innerText)
    {
        screen.innerText += " " + 1;
        sum /= 1;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[1].innerText)
    {
        screen.innerText += " " + 1;
        sum *= 1;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[2].innerText)
    {
        screen.innerText += " " + 1;
        sum -= 1;
    }
    else
    {
        screen.innerText += " " + 1;
        sum  += 1;
    }
})
nums[10].addEventListener('click',(event) => // button number 2
{
    if(screen.innerText == "0")
    {
        screen.innerText = 2;
        sum = 2;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[0].innerText)
    {
        screen.innerText += " " + 2;
        sum /= 2;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[1].innerText)
    {
        screen.innerText += " " + 2;
        sum *= 2;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[2].innerText)
    {
        screen.innerText += " " + 2;
        sum -= 2;
    }
    else
    {
        screen.innerText += " " + 2;
        sum  += 2;
    }
})
nums[11].addEventListener('click',(event) => // button number 3
{
    if(screen.innerText == "0")
    {
        screen.innerText = 3;
        sum = 3;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[0].innerText)
    {
        screen.innerText += " " + 3;
        sum /= 3;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[1].innerText)
    {
        screen.innerText += " " + 3;
        sum *= 3;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[2].innerText)
    {
        screen.innerText += " " + 3;
        sum -= 3;
    }
    else
    {
        screen.innerText += " " + 3;
        sum  += 3;
    }
})
nums[12].addEventListener('click',(event) => // button number 0
{
    if(screen.innerText == "0")
    {
        screen.innerText = 0;
        sum = 0;
    }
    // else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[0].innerText) // חילוק ב0 בעיה.
    // {
    //     screen.innerText += " " + 7; 
    //     sum /= 7;
    // }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[1].innerText)
    {
        screen.innerText += " " + 0;
        sum *= 0;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[2].innerText)
    {
        screen.innerText += " " + 0;
        sum -= 0;
    }
    else
    {
        screen.innerText += " " + 0;
        sum  += 0;
    }
})

calcOp[0].addEventListener('click',(event) => // ÷
{
    screen.innerText +=  " " + calcOp[0].innerText;
})
calcOp[1].addEventListener('click',(event) => // *
{
    screen.innerText += " " + calcOp[1].innerText;
})
calcOp[2].addEventListener('click',(event) => // -
{
    screen.innerText += " " + calcOp[2].innerText;
})
calcOp[3].addEventListener('click',(event) => // +
{
    screen.innerText += " " + calcOp[3].innerText;
})
calcOp[4].addEventListener('click',(event) => // =
{
    screen.innerText = sum;
})

