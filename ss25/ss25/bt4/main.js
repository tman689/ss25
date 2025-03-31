function checkPrime(number){
    if (!Number.isFinite(number)){
        return "dữ liệu không hợp lệ";
    }
    if (number < 2){
        return "không phải là số nguyên tố";
    }
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            return "không phải là số nguyên tố";
        }
    }
    return "là số nguyên tố";
}
document.writeln(checkPrime(17));
document.writeln(checkPrime(6));  
document.writeln(checkPrime('text')); 