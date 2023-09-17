abstract class BaseTable {
  calculateSum() {
    return (
      this.calculatePrice() -
      this.calculateDiscount() +
      this.calculateSomethingElse()
    );
  }

  abstract calculatePrice(): number;
  abstract calculateDiscount(): number;
  abstract calculateSomethingElse(): number;
}

class CustomTable extends BaseTable {
  calculatePrice(): number {
    return 123;
  }
  calculateDiscount(): number {
    return 123;
  }
  calculateSomethingElse(): number {
    return 123;
  }
}

class Custom1Table extends BaseTable {
  calculatePrice(): number {
    return 213;
  }
  calculateDiscount(): number {
    return 31243124;
  }
  calculateSomethingElse(): number {
    return 123213;
  }
}

class Custom3Table extends BaseTable {
  calculatePrice(): number {
    return 123;
  }
  calculateDiscount(): number {
    return 123;
  }
  calculateSomethingElse(): number {
    return 123;
  }
}
