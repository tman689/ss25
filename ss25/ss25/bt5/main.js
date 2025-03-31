function demSoNguyenDuong(){
    let input = prompt("Nhập một mảng các phần tử");
    let arr = input.split(",").map(Number); 
    let count = 0;
    for (let i = 0; i < arr.length; i++){
      if (Number.isInteger(arr[i]) && arr[i] > 0){
        count++;
      }
    }
    document.writeln(count > 0 ? `Số lượng số nguyên dương: ${count}` : "Không có số nguyên dương trong mảng");
  }
  
  demSoNguyenDuong();