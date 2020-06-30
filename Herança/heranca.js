// __proto__ -> prototype -> constructor

//o __proto__ aponta pro prototype
//o prototype é criado a parir do constructor

//prototype armazena as definições do objeto
//__proto__ aponta o prototype do tipo (constructor) que foi criado


const mytext = String('Hello prototype');

console.log(mytext.__proto__.split);
console.log(String.prototype.split);
console.log(mytext.__proto__.split === String.prototype.split);
console.log(mytext.constructor === String);


console.log(mytext.constructor === String);  
console.log(mytext.__proto__ === String.prototype);  
