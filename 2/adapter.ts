class PlayerEngine {
  play() {}
  stop() {}
}

class PlayerEngineShaka {
  play() {}
  pause() {}
}

interface LocalPlayer {
  play(): void;
  pause(): void;
}

class PlayerAdapter {
  private instance: PlayerEngine;

  constructor(instance: PlayerEngine) {
    this.instance = instance;
  }

  play() {
    this.instance.play();
  }

  pause() {
    this.instance.stop();
  }
}

class PlayerAdapterShaka {
  private instance: PlayerEngineShaka;

  constructor(instance: PlayerEngineShaka) {
    this.instance = instance;
  }

  play() {
    this.instance.play();
  }

  pause() {
    this.instance.pause();
  }
}

function PlayerSkin(instance: LocalPlayer) {
  instance.pause();
  instance.play();
  return (
    <div>
      <button>Play/Pause</button>
    </div>
  );
}
