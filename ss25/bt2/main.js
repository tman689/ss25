function sum(a, b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "Dữ liệu không hợp lệ"
    }
    return result=a+b;
}
document.writeln(sum(2,6));
document.writeln(sum(3,'text'));
document.writeln(sum(7,-7));
document.writeln(sum(4.5,3));