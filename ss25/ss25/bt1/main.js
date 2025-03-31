function findMin(arr){
    if (arr.length == 0){
      return undefined; 
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i]; 
      }
    }
    return min;  
  }
  let numbers = [5, 2, 9, 1, 7];
  document.writeln(findMin(numbers)); 