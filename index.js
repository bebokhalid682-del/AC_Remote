let stuts = false ;
function powerSwitch(){
    let screenSwitch = document.getElementById("switch");
    let screenSwitchtwo = document.getElementById("switch2")
    if(stuts == false){
        screenSwitch.classList.add("Remote_Screen_Upper_On");
        screenSwitchtwo.classList.add("Remote_Screen_Upper_On");
        stuts = true ;
    }else{
        screenSwitch.classList.remove("Remote_Screen_Upper_On");
        screenSwitchtwo.classList.remove("Remote_Screen_Upper_On");
        stuts = false ;
    }
}
let temp = document.getElementById("temp");
let tempreture = +temp.textContent ;
function increseTemp(){
    if(tempreture >= 35 || stuts == false){
        return;
    }
    tempreture++;
    temp.textContent = tempreture;
}
function decreseTemp(){
    if(tempreture <= 16 || stuts == false){
        return;
    }
    tempreture--;
    temp.textContent = tempreture;
}
let click = 1 ;
function modeSwitch(){
    if(stuts == false){
        return;
    }
    let modeOne = document.getElementById("mode_one");
    let modeTwo = document.getElementById("mode_two");
    let modeThree = document.getElementById("mode_three");
    if(click == 1){
        modeOne.classList.add("invisible");
        modeTwo.classList.remove("invisible");
        click++;
    }else if(click == 2){
        modeTwo.classList.add("invisible");
        modeThree.classList.remove("invisible");
        click++;
    }else if(click == 3){
        modeOne.classList.remove("invisible");
        modeThree.classList.add("invisible");
        click = 1;
    }
}