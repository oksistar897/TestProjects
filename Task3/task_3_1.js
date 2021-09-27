	
//imperative code style
	let simpleNumber = (numb) => {
	    let arrNumber = [];
	    let n = 2;
	    let el = 0;
	    while (n <= numb) {
	        while (numb % n == 0) {
	            numb = numb / n;
	            arrNumber[el] = n;
	            el++;
	            if (numb == 1) {
	                break;
	            }
	        }
	        n++;
	    }
	    console.log(arrNumber)
	}
  
  //declarative code style
	  function primeFactors(inp, arrPrimeNumber = [], firstPrimeNumber = 2){
	    if (firstPrimeNumber > Math.sqrt(inp)) {
	        arrPrimeNumber.push(inp);
	        return arrPrimeNumber;
	    } else if (inp % firstPrimeNumber == 0) {
	        arrPrimeNumber.push(firstPrimeNumber);
	        primeFactors(inp/firstPrimeNumber, arrPrimeNumber, firstPrimeNumber);
	    } else {
	        primeFactors(inp, arrPrimeNumber, ++firstPrimeNumber);
	    }
	    return arrPrimeNumber;
	}
	console.log(primeFactors(12))