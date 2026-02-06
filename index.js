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