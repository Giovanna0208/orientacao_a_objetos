//implementar métodos

function animal(patas) {
    this.patas = patas;
}

function cachorro(morde, patas) {
    if(morde) {
        morde = 'Sim';
    }else {
        morde = 'Não';
    }
    animal.call(this, patas);
    this.morde = morde;
}

const pug = new cachorro(false, 4);
console.log(pug);

const pitbull = new cachorro(true, 4);
console.log(pitbull);