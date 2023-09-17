interface VideoPlayer {}
export interface AudioPlayer {}

interface PlayerLoader {
    createVideoPlayer(): VideoPlayer;
    createAudioPlayer(): AudioPlayer;
}

class WebPlayerLoader implements PlayerLoader {
    createAudioPlayer(): AudioPlayer {
        return {};
    }
    createVideoPlayer(): VideoPlayer {
        return {};
    }
}

class SmartTvPlayerLoader implements PlayerLoader {
    createAudioPlayer(): AudioPlayer {
        return {};
    }
    createVideoPlayer(): VideoPlayer {
        return {};
    }
}

class OculusPlayerLoader implements PlayerLoader {
    createAudioPlayer(): AudioPlayer {
        return {};
    }
    createVideoPlayer(): VideoPlayer {
        return {};
    }
}