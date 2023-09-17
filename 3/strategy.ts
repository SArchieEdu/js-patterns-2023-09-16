class Table {
  items: any[];
  filterStrategies: ((items: any[], value: string) => any[])[];

  filter(value: string) {
    this.items = this.filterStrategies.reduce((acc, strategy) => {
      return strategy(acc, value);
    }, this.items);
  }
}

const table = new Table();

const nameFilter = (items, value) =>
  items.filter((item) => item.name === value);

const ageFilter = (items, value) => items.filter((item) => item.age === value);

const addressFilter = (items, value) =>
  items.filter((item) => item.age === value);

const strategies = [nameFilter, ageFilter];

table.filterStrategies = strategies;
table.filter("Artem");

function calculate(values, filterStrategy: () => []) {}
