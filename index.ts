// basic type
/**
 * string
 * number / bigint
 * boolean
 * Array
 * Obj / Interface
 * null / undefine
 * function
 * generic
 * any / unknown / never
 * enum
 * union type
 */

const name1: string = "socan";
// number
/**
 * float, int int32, double
 */

const truful: boolean = true;

// Array<string> , string[]
const nameList: string[] = ["Lykheng", "Lyhong", "Gino"];

interface ShoppingCart {
  name: string | number;
  price: number | undefined | null;
  sum?: number;
  products?: string[];
}

const shoppingCart: ShoppingCart = {
  name: "123",
  price: 10,
};

const shoppingList: ShoppingCart[] = [{ name: "234", price: 234 }];

interface SumArg {
  a: number;
  b: number;
}
const sum = (value: SumArg): number => {
  return value.a + value.b;
};

const valueDolla: any = 123;

const test = () => {
  throw new Error("hi");
};

const render = () => {
  console.log("hi");
};

enum Gender {
  FEMALE,
  MALE,
  GAY,
}

const renderGender = (value: Gender) => console.log(value);

// renderGender("JAY");
