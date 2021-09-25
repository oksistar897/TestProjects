/*Task number 1*/
let getMostRepeat = (arr1, arr2) => {
        let arr = arr1.concat(arr2);
        let newObj = {}
        let result = arr.reduce(function(acc, el) {
            acc[el] = (acc[el] || 0) + 1;
            return acc;
        }, newObj);
        let getResult = Object.entries(newObj).reduce((ac, cur) => ac[1] > cur[1] ? ac : cur)[0];
        console.log(getResult)
    }


/*Task number 2*/
let uniqArr = (arr) => {
    let arrUniq = [...new Set(arr)];
    console.log(arrUniq);
}
