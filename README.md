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
