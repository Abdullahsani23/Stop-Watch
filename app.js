var hours = 0
var minut =0
var sec =0
var miliSec = 0
var timer;
var flag = 1


function start(){
    timer = setInterval(()=>{
        miliSec++
        if(miliSec>= 100){
            sec++
            miliSec =0
        }
        if(sec>= 60){
            minut++
            sec=0
        }
        if(minut>=60){
            hours++
            minut=0
        }
        document.getElementById("watch").innerText= 
        `${hours} : ${minut} : ${sec} : ${miliSec}` ;
    },10)
}
document.getElementById("start").addEventListener("click", start)

function stop(){
    clearInterval(timer)
}
document.getElementById("stop").addEventListener("click", stop)

function reset(){
    clearInterval(timer)
    timer = null
    hours = 0
    minut = 0
    sec = 0
    miliSec = 0
    document.getElementById("watch").innerText = "0 : 0 : 0 : 0"
}
document.getElementById("reset").addEventListener("click", reset)
