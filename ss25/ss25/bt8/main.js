function isStrongPassword(password){
    if (password.length < 8) return false;
  
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;
    for (let i = 0; i < password.length; i++){
      const char = password[i];
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) hasUpperCase = true;
      if (charCode >= 97 && charCode <= 122) hasLowerCase = true;
      if (charCode >= 48 && charCode <= 57) hasDigit = true;
      if (hasUpperCase && hasLowerCase && hasDigit) return true;
    }
    return hasUpperCase && hasLowerCase && hasDigit;
  }