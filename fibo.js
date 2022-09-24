function norm(maxN){

    let resultArray = [];
    for (let i = 2; resultArray.length < maxN; i++) {
        let check = false;  
        for (let  countNumbers= 0;  countNumbers < resultArray.length;  countNumbers++) {

            if (i % resultArray[ countNumbers] === 0 && !(i / resultArray[ countNumbers] === 1)) {
                check = true
                break
            }
            
        }
       
        if (check === false) {
            resultArray.push(i)
        };

    }

    return resultArray;

}


console.time();
console.log(norm(process.argv[2]));
console.timeEnd();