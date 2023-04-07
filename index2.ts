let isLoggedIn: boolean = false;

let arr: number[] = [1, 2, 3];

//Tuple
let arr2: [string, number] = ["hi", 10];

enum Avengers {
  Capt,
  IronMan,
  Thor,
}
let hero: Avengers = Avengers.Capt;

function sum(a: number, b: number): number {
  return a + b;
}

function sum2(a: number, b?: number): number {
  return a + b;
}
sum2(10, 20); // 30
sum2(10, 20, 30); // error, too many parameters
sum2(10); // 타입 에러 없음

function sum3(a: number, ...nums: number[]): number {
  const totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return a + totalOfNums;
}

interface Student {
  name: string;
}

interface Teacher {
  name: string;
  age: number;
}
