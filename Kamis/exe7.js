function hapusSimbol(str) {
  var string = str.match(/[a-z0-9]+/gi);
  // var string2 = string.join("");
  // console.log(string.length);
  var join = "";
  for(var i = 0; i < string.length; i++)
  {
  	join += string[i]; 
  }
  return join;
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100