let userData: { name: string; age: number } = {
  name: 'Max',
  age: 20,
};

console.log(userData);

// complex object
let complex: { data: Array<number>; output: (all: boolean) => Array<number> } = {
  data: [100, 3, 99, 10],
  output: function (all: boolean): Array<number> {
    return this.data;
  },
};

console.log(complex);

// optional object property
const right: { name: string; age?: number } = {
  name: 'Robert',
};

const alsoRight: { name: string; age?: number } = {
  name: 'Robert',
  age: 24,
};
