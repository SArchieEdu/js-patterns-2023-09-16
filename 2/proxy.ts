class Requester {
  get(...params) {}
  post() {}
}

class RequesterWithCache implements Requester {
  cache = new Map();
  requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  get(...params): void {
    if (this.cache.has("")) {
      return this.cache.get("");
    }

    const result = this.requester.get(params);
    this.cache.set("", result);

    return result;
  }

  post(): void {}
}
