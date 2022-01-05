/*
 *
 * Higher Order Function
 * - map    : memanipulasi isi array dan mengembalikan array baru
 * - filter : menfilter isi array
 * - reduce : mengambil semua elemen dalam array dan menguranginya menjadi satu nilai
 * - find   : mengembalikan *nilai pertama* yang ditemukan sesuai dengan kondisi yang diinginkan
 * - some   : return boolean, mengecek apakah suatu array mengandung nilai yang ingin kita cari
 */

type officersType = {
  id: number;
  name: string;
  years: number;
  salary: number;
  bonus: number;
  isActive: boolean;
};

const officers: Array<officersType> = [
  {
    id: 1,
    name: 'Captain Piett',
    years: 14,
    salary: 1500,
    bonus: 500,
    isActive: true,
  },
  {
    id: 2,
    name: 'General Veers',
    years: 30,
    salary: 2500,
    bonus: 1200,
    isActive: false,
  },
  {
    id: 3,
    name: 'Admiral Ozzel',
    years: 16,
    salary: 1000,
    bonus: 500,
    isActive: true,
  },
];

const result1: Array<number> = officers.map((officer) => officer.id);
console.log(result1); // [1,2,3]

const result2: Array<officersType> = officers.filter((officer) => officer.id == 3);
console.log(result2); // [ { id: 3, name: 'Admiral Ozzel', years: 16,  salary: 1000,bonus: 500, isActive: true } ]

const result3: number = officers.reduce((accumulator, officer) => accumulator + officer.years, 0); // accumulator can be pretty much anything (integer, string, object, etc)
console.log(result3); // sum of years: 82

// combining map, filter, reduce
const result4: number = officers
  .filter((officer) => officer.isActive)
  .map((money) => money.salary + money.bonus)
  .reduce((acc, totalMoney) => acc + totalMoney, 0);

console.log(result4);

const result5: object = officers.find((officer) => officer.salary >= 1000) || {}; // kalo nilai yang dicari gak ketemu, return object kosong
console.log(result5);

const result6: boolean = officers.some((officer) => officer.isActive);
console.log(result6);
