interface Config {
    url: string;
    ads?: object[];
}

class PlayerConfigBuilder {
    config: Config | undefined;

    createConfig(url: string) {
        this.config = {url};
        return this;
    }

    addAd(ad: any) {
        if(!this.config) {
            return;
        }
        this.config.ads = [ad];
        return this;
    }

    addAgeRestriction({}: {}) {

    }

    getConfig() {
        return this.config;
    }

    reset() {
        this.config = undefined;
    }
}

function createConfig() {
    new PlayerConfigBuilder().createConfig('').addAd('')?.addAgeRestriction({});
}