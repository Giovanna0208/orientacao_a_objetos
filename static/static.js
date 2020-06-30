//acessar métodos/atributos sem instanciar

function person() {}
//atribuindo propriedade walk a função person
person.walk = function() {
    console.log('walking...');
}

console.log(person.walk());


//Classe
class personClass {
//atribuindo método walk a classe parsonClass
    static walk() {
        console.log('walking...');
    }
}

console.log(personClass.walk());
