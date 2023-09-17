interface Sender {
  react();
}

interface Message {
  type: string;
}

class Mediator {
  subscribers = new Set();

  dispatch(message) {
    this.subscribers.forEach((callback: any) => callback(message));
  }

  subscribe(callback) {
    this.subscribers.add(callback);
  }

  unsubscribe(callback) {
    this.subscribers.delete(callback);
  }
}

const mediator = new Mediator();

const Component1 = {
  mediator: Mediator,

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
    mediator.subscribe(console.log);
  },

  execute() {
    this.mediator.dispatch({ type: "save" });
  },
};

const Component2 = {
  mediator: Mediator,

  execute() {
    this.mediator.dispatch({ type: "update" });
  },
};

const Component3 = {
  mediator: Mediator,

  execute() {
    this.mediator.dispatch({ type: "delete" });
  },
};
