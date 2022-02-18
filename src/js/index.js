function Character(name, element, desc, specMat, bossMat, enemyMat) {
    this.name = name;
    this.element = element;
    this.desc = desc;
    this.specMat = specMat;
    this.bossMat = bossMat;
    this.enemyMat = enemyMat;
}

const xiao = new Character (
    "Xiao",
    "Anemo",
    "A yaksha adeptus who defends Liyue. Also heralded as the \"Conqueror of Demons\" and \"Vigilant Yaksha\".",
    "qingxin",
    "juvenile",
    "slime" 
    );

const chongyun = new Character (
    "Chongyun",
    "Cryo",
    "A young exorcist from a family of exorcists. He does everything he can to suppress his abundance of yang energy.",
    "corLapis",
    "hoarfrost",
    "mask" 
    );


let getId = function() {
    switch(this.id) {
        case 'xiao':
            setCharDetails(xiao);
            break;
        case 'chongyun':
            setCharDetails(chongyun);
    }
    
}

document.getElementById('chongyun').onclick = getId;
document.getElementById('xiao').onclick = getId;