function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  // console.log(arrPenumpang[0][0])
  var array = [];
  for(var i = 0; i < arrPenumpang.length; i++)
  {	
  	var objek = {};
  		objek.penumpang = arrPenumpang[i][0];
  		objek.naikDari = arrPenumpang[i][1];
  		objek.tujuan = arrPenumpang[i][2]
      var nilainaikDari = 0;
    for(var j = 0; j < rute.length; j++)
    {
      var nilaitujuan = 0;
      if(objek.naikDari === rute[j])
      { 
        nilainaikDari += j;
      }
      // if(objek.tujuan === rute[j])
      // { 
      //   nilaitujuan += j;
      //   // console.log(nilaitujuan)
      //   var selisih = Math.abs(nilainaikDari - nilaitujuan);
      //   nilaitujuan = 0;
      // }
    }
    for(var k = 0; k < rute.length; k++){
      if(objek.tujuan === rute[k])
      { 
        nilaitujuan += k;
        var selisih = Math.abs(nilainaikDari - nilaitujuan);
        // console.log(selisih)
        nilaitujuan = 0;
      }
    }
    var bayar = selisih * 2000;
    objek.bayar = bayar;
    
    array.push(objek);
  }
  return array;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]