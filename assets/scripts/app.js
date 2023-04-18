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

function playerAction(mode) {
  let maxDamage;
  let maxHeal;
  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else if (mode === "STRONG ATTACK") {
    maxDamage = STRONG_ATTACK_VALUE;
  } else if (mode === "HEAL") {
    maxHeal = PLAYER_HEAL_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  const heal = increasePlayerHealth(maxHeal);
  playerCurrentLife += heal;
  monsterCurrentLife -= damage;
  monsterAttack();
  gameOverCheck();
}

function attackHandler() {
  playerAction("ATTACK");
}

function strongAttackHandler() {
  playerAction("STRONG ATTACK");
}

function playerHealHandler() {
  playerAction("HEAL");
}

function monsterAttack() {
  const playerRecievedDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  playerCurrentLife -= playerRecievedDamage;
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", playerHealHandler);
