/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */

/**
 * 1. Array of Number
 * [1,2,3,4]
 */

// type inference
let list1 = [1, 2, 3];

// square bracket
let list2: number[] = [1, 2, 3];

// generic array
let list3: Array<number> = [1, 2, 3];

/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */
let list4: Array<string> = ['Hello', 'World'];

/**
 * 3. Array with Union
 * ["hello", 1, 2, 3 ]
 */

// type inference
let list5 = ['hello', 1, 2, 3];

// square bracket
let list6: (string | number)[] = ['hello', 1, 2, 3];

// generic array
let list7: Array<string | number> = ['hello', 1, 2, 3];

/**
 * 4. Tuple
 * ['cordinat', 2, 4, 7]
 */

// don't use type inference for tuple!
let list8: [string, number, number, number] = ['hello', 1, 2, 3];

/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */

// inline interface
let list9: { index: number; color: string }[] = [
  { index: 1, color: 'blue' },
  { index: 2, color: 'red' },
];

// generic array
let list10: Array<{ index: number; color: string }> = [
  { index: 1, color: 'blue' },
  { index: 2, color: 'red' },
];

/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *  [1, 2],
 *  [3, 4],
 * ];
 */
let matrix: Array<Array<number>>;
matrix = [
  [1, 2],
  [3, 4],
];

/**
 * 7. Destructuring
 * let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
 */
let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
