interface Player {
  play(): void;

  pause(): void;
}
interface PlayerLoader {
  createInstance(): Player;
}

class PlayerWebLoader implements PlayerLoader {
  createInstance() {
    return {
      play() {},
      pause() {},
    };
  }
}

class PlayerSmartTvLoader implements PlayerLoader {
  createInstance() {
    return {
      play() {},
      pause() {},
    };
  }
}

const loader: PlayerLoader = {
  createInstance() {
    return {
      play() {},
      pause() {},
    };
  },
};

function createInstanceWeb(): Player {
  return {
    play() {},
    pause() {},
  };
}

function createInstanceSmartTv(): Player {
  return {
    play() {},
    pause() {},
  };
}

function initInstance(player: PlayerLoader) {
  const instance = player.createInstance();
}

function initPlayerInstance(instanceLoader: () => Player) {
  const instance = instanceLoader();
}

function isWeb() {
  return true;
}

initInstance(isWeb() ? new PlayerWebLoader() : new PlayerSmartTvLoader());
initInstance(loader);
