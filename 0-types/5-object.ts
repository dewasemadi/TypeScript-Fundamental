export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }
*/

// type interface
type product = {
  id: string;
  productName: string;
  price: number;
  note?: string;
};

const product1: product = {
  id: 'ID-1',
  productName: 'Macbook Air',
  price: 2000,
  note: '',
};

// interface
interface Product {
  id: string;
  productName: string;
  price: number;
  note?: string;
}

const product2: Product = {
  id: 'ID-1',
  productName: 'Macbook Air',
  price: 2000,
  note: '',
};

/**
 * 2. Nested Object
/*
  {
    id: "ID-1",
    productName: "Macbook Pro",
    price: 2000,
    productDetail: {
      year: 2019
      storage: 256 
    }
  }
*/

interface Item {
  id: string;
  productName: string;
  price: number;
  productDetail: ItemDetail;
}

interface ItemDetail {
  year: number;
  storage: number;
}

const product3: Item = {
  id: 'ID-1',
  productName: 'Macbook Pro',
  price: 2000,
  productDetail: {
    year: 2019,
    storage: 256,
  },
};

/**
 * 3. Nested, Array of Object
 */

/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/

interface Address {
  street: string;
  city: string;
}

interface User {
  id: string;
  name: string;
  address: Array<Address>;
}

const user: User = {
  id: 'U-1',
  name: 'Putu',
  address: [
    {
      street: 'Jln. Setapak No.2',
      city: 'Jakarta',
    },
    {
      street: 'Jln. Lebar sekali no 10',
      city: 'Medan',
    },
  ],
};

/**
 * 4. Nested, Object of Object
 */

/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/

interface CartItem {
  id: string;
  name: string;
  qty: number;
}

interface Cart {
  idCart: string;
  dateOrdered: Date;
  items: {
    [key: string]: CartItem;
  };
}

const keyboard: Cart = {
  idCart: 'C1',
  dateOrdered: new Date('2020-05-20'),
  items: {
    p1: {
      id: 'P-1',
      name: 'Mechanical Keyboard',
      qty: 2,
    },
    p2: {
      id: 'P-2',
      name: 'USB Hub',
      qty: 1,
    },
  },
};

/**
 * 5. Object Destructuring
 */

/*
  let fullName = {
    firstName : "Sastra",
    lastName : "Nababan"
  }
  let {firstName, lastName} = fullName
*/

interface Name {
  firstName: string;
  lastName: string;
}

const fullName: Name = {
  firstName: 'Dewa',
  lastName: 'Semadi',
};

const { firstName, lastName }: Name = fullName;
