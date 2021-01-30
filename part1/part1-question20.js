let d = new Date();
let time = d.toLocaleTimeString();

setInterval(showTime, 1000);

function showTime() {
    console.log(time);
}