function graduates (students) {
  var objekKelulusan = {};
  for(var i = 0; i < students.length ; i++)
  {
    if(!objekKelulusan[students[i].class])
    {
      objekKelulusan[students[i].class] = [];
    }
    // console.log(objekKelulusan[students[i].class].length)
    var objekPeserta = {};
      objekPeserta.name = "";
      objekPeserta.score = 0;
    if(students[i].score > 75)
    {
      objekPeserta.name = students[i].name;
      objekPeserta.score = students[i].score;
        objekKelulusan[students[i].class].push(objekPeserta);
    }
  }
  return objekKelulusan;
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// // {
// //   foxes: [
// //     { name: 'Alexander', score: 100 },
// //     { name: 'Vladimir', score: 92 }
// //   ],
// //   wolves: [
// //     { name: 'Alisa', score: 76 },
// //   ],
// //   tigers: [
// //     { name: 'Viktor', score: 80 }
// //   ]
// // }


console.log(graduates([])); //{}