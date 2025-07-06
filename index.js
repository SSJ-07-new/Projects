//  Variable Declaration
const clock = document.getElementById("time");

//Functions
function time(){
    const present_time = new Date();
    const hours = present_time.getHours().toString().padStart(2,"0");
    const minutes = present_time.getMinutes().toString().padStart(2,"0");
    const seconds = present_time.getSeconds().toString().padStart(2,"0");
    clock.textContent = hours + ":" + minutes + ":" + seconds;
}
time();
setInterval(time,1000);
