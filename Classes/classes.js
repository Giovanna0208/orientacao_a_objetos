//simplificação da herança de protótipos
//class substitui as funções da versão antiga

class animal {
    constructor(paws) {
        this.paws = paws;
    }
}

//extends cria herança
class dog extends animal {
    constructor(paws, bite) {
        super(paws);
        bite ? this.bite = ('yes') : this.bite = ('no');
    }
}

const pug = new dog(4, false);

console.log(pug);