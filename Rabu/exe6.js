function meleeRangedGrouping (str) {
  if(str.length === 0)
  {
  	return [];
  }
  var string = str.split(",");
  // console.log(string.length);
  var baru = ""
  var tampungString = []
  for(var i = 0; i < string.length; i++)
  {
  	baru = string[i].split("-")
  	tampungString.push(baru);
  }
  // console.log(tampungString[0])
// var tampungLuar1 = [[],[]]
  var tampungLuar = [[],[]];
  for(var j = 0; j < tampungString.length; j++)
  {	
  	for(var k = 0; k < tampungString[j].length; k++)
  	{
  		var tampungGroupRanged = ""
  		if (tampungString[j][k] === "Ranged")
  		{
  			tampungGroupRanged += (tampungString[j][0])
  			tampungLuar[0].push(tampungGroupRanged)
  		}
  		var tampungGroupMelee = ""
  		if(tampungString[j][k] === "Melee")
  		{
  			tampungGroupMelee += (tampungString[j][0])
  			tampungLuar[1].push(tampungGroupMelee)
  		}
  	}
  	// tampungLuar1.push(tampungLuar)
  }
  return tampungLuar;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []