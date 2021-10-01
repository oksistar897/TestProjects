//task 1
 
// setInterval
 
function printNumbers(from, to) {
    let changesNumber = from;
    let lastNumber = to;
    let delay = 1000;
    let printInterval = setInterval(() => {
        console.log(changesNumber);
        if (changesNumber == lastNumber) {
            clearInterval(printInterval);
            console.log('stop');
        }
        changesNumber++
    }, delay)
}
 
// recursive setTimeout
 
function printNumbers(from, to) {
    let changesNumber = from;
    let lastNumber = to;
    let delay = 1000;
    let timerNumber = setTimeout(function print() {
        console.log(changesNumber);
        if (changesNumber < lastNumber) {
            timerNumber = setTimeout(print, delay);
        }
        changesNumber++
    }, delay);
}