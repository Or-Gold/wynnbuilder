let powderIDs = new Map();
let powderNames = new Map();
let _powderID = 0;
for (const x of skp_elements) {
    for (let i = 1; i <= 6; ++i) {
        // Support both upper and lowercase, I guess.
        powderIDs.set(x.toUpperCase()+i, _powderID);
        powderIDs.set(x+i, _powderID);
        powderNames.set(_powderID, x+i);
        _powderID++;
    }
}

// Ordering: [dmgMin, dmgMax, convert, defPlus, defMinus (+6 mod 5)]
class Powder {
    constructor(min, max, convert, defPlus, defMinus) {
        this.min = min;
        this.max = max;
        this.convert = convert;
        this.defPlus = defPlus;
        this.defMinus = defMinus;
    }
}
function _p(a,b,c,d,e) { return new Powder(a,b,c,d,e); } //bruh moment

let powderStats = [
    _p(3,6,17,2,1), _p(5,8,21,4,2), _p(6,10,25,8,3), _p(7,10,31,14,5), _p(9,11,38,22,9), _p(11,13,46,30,13),
    _p(1,8,9,3,1), _p(1,12,11,5,1), _p(2,15,13,9,2), _p(3,15,17,14,4), _p(4,17,22,20,7), _p(5,20,28,28,10),
    _p(3,4,13,3,1), _p(4,6,15,6,1), _p(5,8,17,11,2), _p(6,8,21,18,4), _p(7,10,26,28,7), _p(9,11,32,40,10),
    _p(2,5,14,3,1), _p(4,8,16,5,2), _p(5,9,19,9,3), _p(6,9,24,16,5), _p(8,10,30,25,9), _p(10,12,37,36,13),
    _p(2,6,11,3,1), _p(3,10,14,6,2), _p(4,11,17,10,3), _p(5,11,22,16,5), _p(7,12,28,24,9), _p(8,14,35,34,13)
];

class PowderIngredient {
    constructor(durability, skpReq) {
        this.durability = durability;
        this.skpReq = skpReq;
    }
}
function _pi(a,b) { return new PowderIngredient(a,b)}

let powderIngreds = [
    _pi(-35,0),_pi(-52.5,0),_pi(-70,10),_pi(-91,20),_pi(-112,28),_pi(-133,36)
];
//Ordering: [weapon special name, weapon special effects, armor special name, armor special effects]
class PowderSpecial{
    constructor(wSpName, wSpEff, aSpName, aSpEff, cap){
        this.weaponSpecialName = wSpName;
        this.weaponSpecialEffects = wSpEff;
        this.armorSpecialName = aSpName;
        this.armorSpecialEffects = aSpEff;
        this.cap = cap;
    }
}
function _ps(a,b,c,d,e) { return new PowderSpecial(a,b,c,d,e); } //bruh moment

let powderSpecialStats = [
    _ps("Quake",new Map([["Radius",[4.4,4.9,5.4,5.9,6.4]], ["Damage",[155,220,285,350,415]] ]),"Rage",new Map([ ["Damage", [0.3,0.4,0.5,0.7,1.0]],["Description", "% " + "\u2764" + " Missing"] ]), 396), //e
    _ps("Chain Lightning",new Map([ ["Chains", [5,6,7,8,9]], ["Damage", [200,225,250,275,300]] ]),"Kill Streak",new Map([ ["Damage", [3,4.5,6,7.5,9]],["Duration", [5,5,5,5,5]],["Description", "Mob Killed"] ]),200), //t
    _ps("Curse",new Map([ ["Duration", [7,7.5,8,8.5,9]],["Damage Boost", [90,120,150,180,210]] ]),"Concentration",new Map([ ["Damage", [1,2,3,4,5]],["Duration",[1,1,1,1,1]],["Description", "Mana Used"] ]),150), //w
    _ps("Courage",new Map([ ["Duration", [6,6.5,7,7.5,8]],["Damage", [75,87.5,100,112.5,125]],["Damage Boost", [70,90,110,130,150]] ]),"Endurance",new Map([ ["Damage", [2,3,4,5,6]],["Duration", [8,8,8,8,8]],["Description", "Hit Taken"] ]),200), //f
    _ps("Wind Prison",new Map([ ["Duration", [3,3.5,4,4.5,5]],["Damage Boost", [400,450,500,550,600]],["Knockback", [8,12,16,20,24]] ]),"Dodge",new Map([ ["Damage",[2,3,4,5,6]],["Duration",[2,3,4,5,6]],["Description","Near Mobs"] ]),150) //a
];
