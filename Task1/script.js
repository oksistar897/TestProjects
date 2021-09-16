let quadro = arr => {

    let a = arr[0];
    let b = arr[1];
    let c = arr[2];
    let x;
    let D;
    let x1;
    let x2;

    if (a == 0) {
        console.log('Данное уравнение линейное');
        if (c > 0) {
            console.log(`Уравнение: ${b}x+${c}=0`);
            x = -c / b;
            console.log(`Корень: ${x}`);
        } else if (c < 0) {
            console.log(`Уравнение: ${b}x${c}=0`);
            x = -c / b;
            console.log(`Корень: ${x}`)
        } else {
            console.log(`Уравнение: ${b}x=0`);
            x = 0 / b
            console.log(`Корень: ${x}`)
        }
    } else {
        if (b > 0 && c > 0) {
            console.log(`Уравнение: ${a}x2+${b}x+${c}=0`)
        } else if (b < 0 && c < 0) {
            console.log(`Уравнение: ${a}x2${b}x${c}=0`)
        } else if (b < 0 && c > 0) {
            console.log(`Уравнение: ${a}x2${b}x+${c}=0`)
        } else if (b > 0 && c < 0) {
            console.log(`Уравнение: ${a}x2+${b}x${c}=0`)
        } else if (b == 0 && c < 0) {
            console.log(`Уравнение: ${a}x2${c}=0`)
        } else if (b == 0 && c > 0) {
            console.log(`Уравнение: ${a}x2+${c}=0`)
        } else if (b < 0 && c == 0) {
            console.log(`Уравнение: ${a}x2${b}x=0`)
        } else if (b > 0 && c == 0) {
            console.log(`Уравнение: ${a}x2+${b}x=0`)
        } else {
            console.log(`Уравнение: ${a}x2=0`)
        }

        D = b ** 2 - 4 * (a * c);
        console.log(`Дискриминант: ${D}`);
        let d = Math.sqrt(D);
        
        if (D == 0) {
            x = (-b) / (2 * a)
            console.log(`Корень: ${x}`)
        } else if (D < 0) {
            console.log(`Действительных корней нет`)
        } else {
            x1 = ((-b) + d) / (2 * a);
            x2 = ((-b) - d) / (2 * a);
            console.log(`Корни: x1 = ${x1}, x2 = ${x2} `)
        }
    }

}