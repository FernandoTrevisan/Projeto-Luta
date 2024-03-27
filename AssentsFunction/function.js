const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}
const crateKnight = (name) => {
    return{
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8,
    }
}
const cratSorcerer = (name) => {
    return{
        ...defaultCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}
const crateLittleMonster = () => {
    return{
        ...defaultCharacter,
        name: 'Little Monster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4
    }
}
const crateBigMonster = () => {
   return{
    ...defaultCharacter,
    name: 'Big Monster',
    life: 120, 
    maxLife: 120,
    attack: 16,
    defense: 6
   }  
}
const stage = {
    figter1: null,figter2: null,figter1El: null,figter2El: null,
    start(figter1, figter2, figter1El, figter2El){
        this.figter1 = figter1
        this.figter2 = figter2
        this.figter1El = figter1El
        this.figter2El = figter2El

        this.figter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.figter1, this.figter2));
        this.figter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.figter2, this.figter1));
        
        this.update();
    },

    update(){
        // Fighter 1
        this.figter1El.querySelector('.name').innerHTML = `${this.figter1.name} - ${this.figter1.life.toFixed(1)} HP`;
        let f1Pct = (this.figter1.life / this.figter1.maxLife) * 100;
        this.figter1El.querySelector('.bar').style.width = `${f1Pct}%`;
        // Fighter 2
        this.figter2El.querySelector('.name').innerHTML = `${this.figter2.name} - ${this.figter2.life.toFixed(1)} HP`;
        let f2Pct = (this.figter2.life / this.figter2.maxLife) * 100;
        this.figter2El.querySelector('.bar').style.width = `${f2Pct}%`;
    },
    doAttack(attacking, attacked){

        if(attacking.life <= 0 || attacked.life <= 0){
            log.addMessage('Alguém tá morto, não pode atacar.');
            return;
        }
        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)

        }else{
            log.addMessage(`${attacked.name} Conseguiu defender...`)
        }

        this.update();
    }
}
const log = {
    list: [],
    addMessage(msg){
        this.list.push(msg);
        this.render();
    },
    render(){
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';
        for(let i in this.list){
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}