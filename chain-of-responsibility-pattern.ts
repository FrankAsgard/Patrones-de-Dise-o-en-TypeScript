// chain-of-responsibility-pattern.ts

abstract class Handler {
  protected successor?: Handler;

  setSuccessor(successor: Handler): void {
    this.successor = successor;
  }

  abstract handleRequest(request: string): void;
}

class SupportAgent extends Handler {
  handleRequest(request: string): void {
    if (request === 'simple') {
      console.log('Support Agent handling request.');
    } else if (this.successor) {
      this.successor.handleRequest(request);
    }
  }
}

class Manager extends Handler {
  handleRequest(request: string): void {
    if (request === 'complex') {
      console.log('Manager handling request.');
    } else if (this.successor) {
      this.successor.handleRequest(request);
    }
  }
}

class Director extends Handler {
  handleRequest(request: string): void {
    console.log('Director handling request.');
  }
}

// Usage
const supportAgent = new SupportAgent();
const manager = new Manager();
const director = new Director();

supportAgent.setSuccessor(manager);
manager.setSuccessor(director);

supportAgent.handleRequest('complex');
