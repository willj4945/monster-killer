const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const PLAYER_HEAL_VALUE = 10;

const MONSTER_ATTACK_VALUE = 14;
let playerMaxLife = 100;
let monsterMaxLife = 100;
let playerCurrentLife = playerMaxLife
let monsterCurrentLife = monsterMaxLife;

adjustHealthBars(playerMaxLife);

function gameOverCheck () {
    if (monsterCurrentLife <= 0 && playerCurrentLife > 0){
        alert("Player wins!")
    } else if (playerCurrentLife <= 0 && monsterCurrentLife > 0){
        alert("Monsrer wins!")
    }else if(playerCurrentLife <= 0 && monsterCurrentLife <=0){
        alert("Tie!")
    }

}

function playerWins () {
  
}

function attackHandler ( ) {

    const damage = dealMonsterDamage(ATTACK_VALUE)
    monsterCurrentLife -=damage

    const heavyDamage = dealMonsterDamage(STRONG_ATTACK_VALUE)
    monsterCurrentLife -= heavyDamage
    
    const playerRecievedDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    playerCurrentLife -= playerRecievedDamage
    
    gameOverCheck();
}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',attackHandler);