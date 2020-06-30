class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class pessoaf extends person {
    constructor(name, age, cpf) {
        super(name, age);
        this.cpf = cpf;
    }
}

const p = new pessoaf('giovanna', 17, 54321)
console.log(p)