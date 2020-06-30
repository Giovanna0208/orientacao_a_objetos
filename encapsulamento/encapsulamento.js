//ocultar detalhes do funcionamento interno

function person(initname) {
    var name = initname;

    Object.defineProperty(this, 'name', {
        //acessa o this.name
        get: function() {
            return name;
        },
        //mudar o valor
        set: function(value) {
            name = value;
        }
    });
}

const p = new person('Giovanna');

console.log(p.name);

p.name = ('Other name');
console.log(p.name);