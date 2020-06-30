function person(name) {
    this.name = name;
}

const p = new person('Giovanna');
console.log(p);
console.log('__proto__:', typeof(p.__proto__), p.__proto__);
console.log('constructor:', typeof(p.constructor), p.constructor);


//instanceof
function animal() {
    this.patas = 4;
}

const cachorro = new animal();

console.log(cachorro instanceof animal);
console.log(cachorro instanceof Function);
console.log(animal instanceof Function);