class Calculator {
  increment() {}

  decrement() {}
}

class CalculatorWithCustomResult {
  baseCalculator: Calculator;
  constructor(baseCalculator) {
    this.baseCalculator = baseCalculator;
  }

  increment() {
    this.baseCalculator.increment();
    //..
  }

  getCustomResult() {}
}

const calculator = new Calculator();
const customCalculator = new CalculatorWithCustomResult(calculator);

function getSum(calculator: Calculator) {}

function getCustomSum(calculator: CalculatorWithCustomResult) {}
