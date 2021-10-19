
//task 2
setInterval(() => {
    console.clear()
}, 1000);
function clock() {
    let date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    console.log(hours + ':' + minutes + ':' + seconds);
}
setInterval(clock, 1000);
