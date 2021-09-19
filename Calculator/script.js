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


let lstNumClicked = 0;
nums[3].addEventListener('click',(event) => // button number 7
{
    lstNumClicked = 7;
    funAct();
});
nums[4].addEventListener('click',(event) => // button number 8
{
    lstNumClicked = 8;
    funAct();
});
nums[5].addEventListener('click',(event) => // button number 9
{
    lstNumClicked = 9;
    funAct();
});
nums[6].addEventListener('click',(event) => // button number 4
{
    lstNumClicked = 4;
    funAct();
});
nums[7].addEventListener('click',(event) => // button number 5
{
    lstNumClicked = 5;
    funAct();
});
nums[8].addEventListener('click',(event) => // button number 6
{
    lstNumClicked = 6;
    funAct();
});
nums[9].addEventListener('click',(event) => // button number 1
{
    lstNumClicked = 1;
    funAct();
});
nums[10].addEventListener('click',(event) => // button number 2
{
    lstNumClicked = 2;
    funAct();
});
nums[11].addEventListener('click',(event) => // button number 3
{
    lstNumClicked = 3;
    funAct();
});
nums[12].addEventListener('click',(event) => // button number 0
{
    lstNumClicked = 0;
    funAct();
});

//בודק איזה אופרטור נלחץ
function funAct(){

    if(screen.innerText == "0")
    {
        screen.innerText = lstNumClicked;
        sum = lstNumClicked;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[0].innerText)
    {
        screen.innerText += lstNumClicked;
        sum /= lstNumClicked;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[1].innerText)
    {
        screen.innerText += lstNumClicked;
        sum *= lstNumClicked;
    }
    else if(screen.innerText.charAt(screen.innerText.length - 1) == calcOp[2].innerText)
    {
        screen.innerText += lstNumClicked;
        sum -= lstNumClicked;
    }
    else
    {
        screen.innerText += lstNumClicked;
        sum  += lstNumClicked;
    }
}


calcOp[0].addEventListener('click',(event) => // ÷
{
    screen.innerText += calcOp[0].innerText;
})
calcOp[1].addEventListener('click',(event) => // *
{
    screen.innerText += calcOp[1].innerText;
})
calcOp[2].addEventListener('click',(event) => // -
{
    screen.innerText += calcOp[2].innerText;
})
calcOp[3].addEventListener('click',(event) => // +
{
    screen.innerText += calcOp[3].innerText;
})
calcOp[4].addEventListener('click',(event) => // =
{
    screen.innerText = sum;
})
