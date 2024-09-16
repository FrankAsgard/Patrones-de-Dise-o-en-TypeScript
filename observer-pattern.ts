// observer-pattern.ts

interface Observer {
  update(temperature: number): void;
}

class TemperatureSensor {
  private observers: Observer[] = [];
  private temperature: number = 0;

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  setTemperature(temperature: number): void {
    this.temperature = temperature;
    this.notifyObservers();
  }

  private notifyObservers(): void {
    this.observers.forEach(observer => observer.update(this.temperature));
  }
}

class AlertSystem implements Observer {
  update(temperature: number): void {
    if (temperature > 30) {
      console.log('Alert! Temperature is too high.');
    }
  }
}

class DataLogger implements Observer {
  update(temperature: number): void {
    console.log(`Logging temperature: ${temperature}°C`);
  }
}

// Usage
const sensor = new TemperatureSensor();
const alertSystem = new AlertSystem();
const dataLogger = new DataLogger();

sensor.addObserver(alertSystem);
sensor.addObserver(dataLogger);

sensor.setTemperature(32);
