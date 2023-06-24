
//player    enemy

//warrior
//wizard
//acher
//class declarations

class Player {
    constructor(name, stregth, health) {
        this.name = name;
        this.stregth = stregth;
        this.health = health;
    
        
    
    }
    speak(phrase) {
        console.log(`${phrase}!!!!!!`);
    }
}


//sub-class

class Warrior extends Player{

    constructor(name, stregth, health, weopon, power,shield) {
        super(name, stregth, health);
        this.weopon = weopon;
        this.power = power;
        this.shield = shield;
        // console.log(super.constructor);
    
    
    }
    speak(phrase) {
        console.log(`${phrase}  attack wizard: `);
    }
}
class Wizard extends Player {

    constructor(name, stregth, health,spell,mana) {
        super(name, stregth, health);
        this.spell= spell;
        this.mana= mana;
        
        // console.log(super.constructor);


    }
    speak(phrase) {
        console.log(`${phrase}cast a spell!!!   `);
    }
}
class Archer extends Player {

    constructor(name, stregth, health, bow, accurancy) {
        super(name, stregth, health);
        this.bow = bow;
        this.accurancy = accurancy;

        // console.log(super.constructor);


    }
    
}
// class Instantions
// const player = new Player('Player', 100, 10, ['anas']);
// console.log(player);
const warrior = new Warrior('Conan', 100, 10, 'Sword', 20, 'leather shield');
const wizard = new Wizard('Gandalf', 80, 5, 'Fireball', 50);
const archer = new Archer('Legolas', 90, 7, 'Longbow', 75);
// polymorphism
const players = [warrior, wizard, archer];
for (const player of players) {
    player.speak('Ouch!! ');
}
