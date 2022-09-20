function prime(num){
    if(num == 1 || num == undefined){
        return false;
    }
    for(let i = 2;i<num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}

let n = 1;
console.log(prime(n));