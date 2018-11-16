function attack (damage) {
  var serang = damage - 2;
  return serang;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  var simulasiAttack = attack(damagePerAttack);
  var hitungDamage = simulasiAttack * numberOfAttacks;
  return hitungDamage;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90