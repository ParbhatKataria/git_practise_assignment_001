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

console.log(prime(29));