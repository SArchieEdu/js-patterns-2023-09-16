class Memento {
  state: any;

  constructor(state: any) {
    this.state = state;
  }

  getState() {}
}

class Action {
  execute() {
    // return new state
  }
}

class Editor {
  history: Memento[];
  state: any;

  execute(action: Action) {
    this.state = action.execute();
    this.history.push(new Memento(this.state));
  }

  undo() {
    this.state = this.history[this.history.length - 2].getState();
  }
}
