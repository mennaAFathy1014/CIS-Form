const fun = (f, s) => {
    const d = f.split('');
    const a = s.split('');
    let count1 = 0;
    let count2 = 0;
    for (i = 0; i < d.length; i++){
        count1++;
    }
    for (i = 0; i < a.length; i++){
        count2++;
    }
    if (count1 == count2) {
        console.log('True')
    }else {
        console.log('False')
    }
}
console.log(fun('string', 'HELLO'));