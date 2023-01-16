let mongoose = require('mongoose');

class Singletondb {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect('mongodb+srv://utad:utad2022@utad.jcw07st.mongodb.net/?retryWrites=true&w=majority')
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Singletondb()
/* Explicação da classe Singleton que foi implementada:
A chamada require('mongoose') acima retorna um objeto Singleton. 
Isso significa que a primeira vez que chamamos require(‘mongoose’), vai criar uma instância da classe Mongoose retornando-a. 
Nas chamadas subsequentes, retornará a mesma instância que foi criada e retornada pela primeira vez por causa de como a importação/exportação do módulo funciona no ES6.
Da mesma forma, transformamos nossa classe SingletonDb em um singleton retornando uma instância da classe na instrução module.exports porque precisamos apenas de uma única conexão com a base de dados.
*/