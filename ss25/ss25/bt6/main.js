function isPalindrome(str){
    return str == str.split('').reverse().join('');
  }
  
  function checkPalindrome(){
    let input = prompt("Nhập vào một chuỗi ký tự:");
    if (isPalindrome(input)) {
      document.writeln("Đây là chuỗi đối xứng.");
    } else {
      document.writeln("Đây không phải là chuỗi đối xứng.");
    }
  }
  checkPalindrome();