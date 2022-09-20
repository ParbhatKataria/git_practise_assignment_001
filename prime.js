function prime(num){
    if(num == 1 || num == undefined){
        return false;
    }
    for(let i = 2;i<num;i++){
        if(num%i==0){
            return true;
        }
    }
    return false;
}

let n = 13;
console.log(prime(n));