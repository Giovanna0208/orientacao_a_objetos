class person {
    #name = '';

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const p = new person('Giovanna');

console.log(p.name);

p.name = ('Other name');
console.log(p.name);