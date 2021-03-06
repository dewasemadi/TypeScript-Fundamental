# TypeScript Fundamental

> TypeScript -> tsc (TypeScript Compiler) -> JavaScript Code

### Installing TypeScript

> make sure you have already installed nodejs

```bash
npm i -g typescript
```

### Compile & Run .ts file

> install ts-node package first

```bash
npm i -g ts-node
```

> then run this command to compile & run .ts file

```bash
ts-node <file_name>.ts
```

## 1. Javascript vs TypeScript Types

|     | Javascript | Typescript   |
| --- | ---------- | ------------ |
| 1   | undefined  | undefined    |
| 2   | boolean    | boolean      |
| 3   | number     | number       |
| 4   | string     | string       |
| 5   | bigint     | number       |
| 6   | symbol     | symbol       |
| 7   | null       | null         |
| 8   | object     | object       |
| 9   | function   | function     |
| 10  | -          | any          |
| 11  | -          | union        |
| 12  | -          | intersection |
| 13  | -          | enum         |
| 14  | -          | void         |
| 15  | -          | advance type |

**Notes :**

- 1-6 are Primitive Data Types
- All primitives are immutable. A primitive is not an object and has no methods of its own.
- Null is special primitive
- All types in TypeScript are subtypes of a single top type called the Any type.

## 2. TypeScript Types

How to declare typescript type :

- Type inference ( implicit ) `let ti = "hello"`
- Type annotations ( explicit ) `let ta:string = "hello ts"`

## 3. Array & Tuples

Tuples is an array with fixed size and known data types.

There are few ways to declare an array:

1. Using Type Inference
   `let list = [1, 2, 3, 4];`
2. Using square brackets. `elementType[]`
   `let fruits: string[] = ['Apple', 'Orange', 'Banana'];`
3. Using a generic array type. `Array<elementType>`
   `let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];`

notes:

- Array of Number
- Array of String
- Array with Union
- Tuple
- Array of Object
- Array multidimensional
- Destructuring

## 4. Object

Object is a type that represents the non-primitive type, i.e. anything that is not `number, string, boolean, bigint, symbol, null, or undefined`

notes:

- Object Literal
- Nested Object
- Nested, Object of Array
- Nested, Object of Object ( Dynamic Properties)
- Destructuring
- Utility Types ( `ReadOnly, Record` )
