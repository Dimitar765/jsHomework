function changeColor(){
    // let refresh;
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomColor = "rgb("+ r +"," + g +"," + b +")";
    
document.body.style.backgroundColor = randomColor;
colorValue.innerHTML = randomColor;


}

changeColor();
