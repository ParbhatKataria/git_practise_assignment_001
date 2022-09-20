function prime(number){
    if(number == 1 || number == undefined){
        return false;
    }

    for(let i = 2;i<number;i++){
        if(number%i==0){
            return false;
        }
    }
    return true;
}


let n = 1;
console.log(prime(n));
