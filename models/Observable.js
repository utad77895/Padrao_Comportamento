class Observable {
    constructor() {
      this.observers = [];
    }
 
    // Adiciona Observers à lista.
    addObserver(observer) {
      this.observers.push(observer);
    }
 
    // Remove o Observer da lista.
    removeObserver(observer) {
      const removeIndex = this.observers.findIndex((obs) => {
        return observer === obs;
      });
 
      if (removeIndex !== -1) {
        this.observers = this.observers.slice(removeIndex, 1);
      }
    }
 
    // Faz iteração pela lista de observer e faz o update das alterações.
    // Este método é chamado sempre que o estado do objeto for alterado.
    notify(data) {
      if (this.observers.length > 0) {
        this.observers.forEach((observer) => observer.update(data));
      }
    }
 }
 
 export default Observable;