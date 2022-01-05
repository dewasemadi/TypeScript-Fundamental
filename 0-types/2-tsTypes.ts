/********** TypeScript Data Types ***********/
export {};

// undefined
let a;

// boolean
let b: boolean = true;

// number
let c: number = 1;

// string
let d: string = 'hello';

// big int
let e: BigInt = 100n;

// symbol
let f: symbol = Symbol('Sym');

// null
let g: null = null;

// object
let h: { name: string; age: number } = {
  name: 'Max',
  age: 27,
};

// function
const sum = (a: number, b: number): number => {
  return a + b;
};

// any (not recommended)
let j: any = 100;
j = 'hello';
j = [1, 2, 3];

// union
let multi: string | number;
multi = 1;
multi = 'hello';

// type aliases
type CustomType = string;
let myType: CustomType;
myType = 'hello';

// check types
let finalValue = 'A string';
if (typeof finalValue == 'string') {
  console.log('finalValue is a string');
}
