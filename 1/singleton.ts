let instance;

class Counter {
  constructor() {
    if (instance) {
      throw new Error();
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCounter() {}
}

const counter = {
  increment() {},
  decrement() {},
};

Object.freeze(counter);

export { counter };
