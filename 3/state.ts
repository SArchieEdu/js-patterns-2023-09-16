interface PlayerState {
  togglePlay(): PlayerState;
  forward(): PlayerState;
}

class PLayerPlay implements PlayerState {
  togglePlay(): PlayerState {
    // pause
    return new PLayerPause();
  }
  forward(): PlayerState {
    // forward
    return new PLayerBuffering();
  }
}

class PLayerPause implements PlayerState {
  togglePlay(): PlayerState {
    // play

    return new PLayerPlay();
  }
  forward(): PlayerState {
    // forward
    return new PLayerBuffering();
  }
}

class PLayerBuffering implements PlayerState {
  togglePlay(): PlayerState {
    //
    return this;
  }
  forward(): PlayerState {
    //
    return this;
  }
}

class Player {
  state: PlayerState;

  togglePlay() {
    this.state = this.state.togglePlay();
  }

  forward() {
    this.state = this.state.forward();
  }
}

const player = new Player();
