let screen = document.getElementById('screen');
function press(x){
    screen.value +=x;
}

function calc (){
    screen.value = eval(screen.value)
}
function func_clear(){
    screen.value = "";
}


 