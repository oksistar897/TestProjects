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
 
let printNumbers = (from, to) => {
  console.log(from)

  if (from < to) {
    setTimeout(printNumbers, 1000, from+1, to);
    return
  }

  return
}
