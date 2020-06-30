//modificador de acesso da versão 12 do JavaScript

class person {
    #name = '';

    constructor(initname) {
        this.#name = initname;
    }

    setname(name) {
        this.#name = name;
    }

    getname() {
        return this.#name
    }
}

const p = new person('Giovanna');
console.log(p);

console.log(p.getname());

console.log(p.name);

p.setname('Other name');
console.log(p.getname());