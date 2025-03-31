function kiemtrasochan(inputArray){
    if (!Array.isArray(inputArray)) {
      document.writeln("Dữ liệu không hợp lệ"); 
      return;
    }
    let sochan = [];
    for (let i = 0; i < inputArray.length; i++){
      if (typeof inputArray[i] == "number" && inputArray[i] % 2 == 0){
        sochan.push(inputArray[i]);
      }
    }
    if (sochan.length > 0){
      document.writeln(sochan.join(", ")); 
    }else{
      document.writeln("Mảng không chứa số chẵn"); 
    }
  }
  kiemtrasochan([11, 4, 65, 6]); 
  kiemtrasochan([1, 3, 5, 17]);  
  kiemtrasochan("text");          