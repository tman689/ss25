let users = [];
function isValidEmail(email){
  return email.includes('@') && (email.endsWith('.com') || email.endsWith('.vn'));
}
function registerAccount(){
  let email = prompt("Nhập email đăng ký:");
  if (!isValidEmail(email)){
    alert("Email không hợp lệ! Email phải chứa '@' và kết thúc bằng '.com' hoặc '.vn'.");
    return;
  }
  if (users.includes(email)){
    alert("Tài khoản đã tồn tại!");
  }else{
    users.push(email);
    alert("Đăng ký thành công!");
  }
}
registerAccount();