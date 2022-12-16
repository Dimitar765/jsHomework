let ammount = 500;
let toWithdraw = parseInt(prompt('amount to withdraw'));

function moneyLeft(toWithdraw){
     onAccount = ammount - toWithdraw;
     if (onAccount > 0){
     console.log(` you withdraw ${toWithdraw}$ and have ${onAccount}$ left on your account`);
    }
    else if (onAccount < 0){
        console.log("not enought money");
    }
    return onAccount;



}
moneyLeft(toWithdraw);
