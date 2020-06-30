//controla o que é privado e o que é público

function person(initialname) {
    let name = initialname;

    this.getname = function() {
        return name;
    }

    this.setname = function(newname) {
        name = newname;
    }
}

const p = new person('Giovanna');
console.log(p);

console.log(p.getname());

//o atributo 'nome' é privado
//não é exposto diretamente quando chamamos 
//a função new person()
console.log(p.name);

p.setname('other name');
console.log(p.getname());