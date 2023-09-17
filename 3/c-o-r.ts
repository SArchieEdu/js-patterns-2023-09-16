interface M {
  next(action): void;
  setNext(m: Middleware): void;
}

class Middleware {
  nextM: Middleware;
  handler: (next: Middleware) => (action) => void;

  constructor(handler: (next: Middleware) => (action) => void) {
    this.handler = handler;
  }

  next(action) {
    this.handler(this.nextM.next.bind(this.nextM))(action);
  }

  setNext(m: Middleware) {
    this.nextM = m;
  }
}

const authorizedMiddleware = (next) => (action) => {
  if (isAuthorized()) {
    next(action);
  }
};
const roleMiddleware = (next) => (action) => {
  if (isHasRole()) {
    next(action);
  }
};
const loggerMiddleware = (next) => (action) => {
  console.log(action);
  next(action);
};
const storageMiddleware = (next) => (action) => {
  localStorage.setItem("actionType", action.type);
  next(action);
};

const m1 = new Middleware(authorizedMiddleware);
const m2 = new Middleware(authorizedMiddleware);
const m3 = new Middleware(roleMiddleware);
const m4 = new Middleware(loggerMiddleware);
const m5 = new Middleware(storageMiddleware);

m1.setNext(m2);
m2.setNext(m3);
m3.setNext(m4);
m4.setNext(m5);

m1.next({ type: "save" });
