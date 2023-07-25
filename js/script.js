const todayDate = "25 July 2023 1:00 PM"
document.getElementById('today-date').innerHTML = todayDate;

const inputs = document.querySelectorAll('input');


function clock(){
    const end = new Date(todayDate);
    const now = new Date();
    const diff = (end-now) / 1000;

    if(diff < 0) return;//stop negative

    // convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // convers into hours
    inputs[1].value = Math.floor(diff / 3600 )% 24;
    // converts into minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    // convert into seconds
    inputs[3].value = Math.floor(diff) % 60;
}

clock();

setInterval(
    ()=>{
        clock()
    },1000
)