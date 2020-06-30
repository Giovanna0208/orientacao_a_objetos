//criar implementações
String.prototype.a = function() { console.log('criando implementação') }
console.log('Giovanna'.a());


//modificar implementações
String.prototype.split = function() { console.log('modificando split') }
console.log('Giovanna'.split(''))