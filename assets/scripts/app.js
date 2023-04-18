const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const PLAYER_HEAL_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
let playerMaxLife = 100;
let monsterMaxLife = 100;
let playerCurrentLife = playerMaxLife;
let monsterCurrentLife = monsterMaxLife;

adjustHealthBars(playerMaxLife);

function gameOverCheck() {
  if (monsterCurrentLife <= 0 && playerCurrentLife > 0) {
    alert("Player wins!");
  } else if (playerCurrentLife <= 0 && monsterCurrentLife > 0) {
    alert("Monster wins!");
  } else if (playerCurrentLife <= 0 && monsterCurrentLife <= 0) {
    alert("Tie!");
  }
}

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  monsterCurrentLife -= damage;

  monsterAttackHandler();
  gameOverCheck();
}

function strongAttackHandler() {
  const heavyDamage = dealMonsterDamage(STRONG_ATTACK_VALUE);
  monsterCurrentLife -= heavyDamage;
  monsterAttackHandler();
  gameOverCheck();
}

function monsterAttackHandler() {
  const playerRecievedDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  playerCurrentLife -= playerRecievedDamage;
}

function playerHealHandler() {
  const playerHeal = increasePlayerHealth(PLAYER_HEAL_VALUE);
  playerCurrentLife += playerHeal;
  monsterAttackHandler();
  gameOverCheck();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", playerHealHandler);
