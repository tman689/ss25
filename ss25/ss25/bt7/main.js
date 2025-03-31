function inhoachucaidau(str){
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(' ');
}
document.writeln(inhoachucaidau("hello WORLD") );
document.writeln(inhoachucaidau("rikkei acaDEMY"));