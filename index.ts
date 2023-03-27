let 이름: string = "kim";
이름 = "string";

let 나이: number = 50;

let 결혼유무: boolean = true;
//변수에 실드를 씌우는 것

let 회원들: string[] = ["kim", "park"];

let 맴버들: { mamber: string; member2: string } = {
  mamber: "kim",
  member2: "park",
};
//타입스크립트는 위에 처럼 지정안해도 기본적으로 타입에 지정 되 있음

let 회원: number | string = 123;

function 함수(x: number): number {
  return x * 2;
}

함수(30);

//파라미터가 옵션일 경우

function 내함수(x?: number) {}
내함수(); //가능
내함수(2); //가능

//함수에 파라미터자리를 만들어놨지만 가끔 파라미터 없이 쓸 때도 있습니다.
//그럴 경우 타입스크립트에선 미리 "이 파라미터는 옵션임" 이렇게 정의를 해주셔야 에러가 나지 않습니다.

function 내로잉(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  }

  //   assertion 문법의 용도
  //   1. narrowing 할때 씀.
  //   2. 무슨타입이 들어올지 확신할때 씀.
  // as 쓰면 오류가 잘 안잡힘 (비상용)
  if (typeof x === "number") {
    array[0] = x as number;
  }

  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}
내로잉(123);

//타입설정 변수에 담기
type Animal = string | number | undefined;

let 동물: Animal;

type Name = string;
type Age = number;

type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };

//literal types
//지정한 타입만 들어올수 있음.
//const 변수와 유사하게 사용가능
let 접니다: "대머리" | "솔로";

접니다 = "대머리";

var 자료 = {
  name: "kim",
} as const;

function 내자료(a: "kim") {
  console.log("a");
}

내자료(자료.name);

type 함수타입 = (a: string) => number;

// function 함수 :함수타입(){

// }

let 제목 = document.querySelector("#title");
//잘모샂으면 null 남음
//narrowing
if (제목 instanceof Element) {
  //instanceof 연산자
  제목.innerHTML = "반가워요";
}

let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", () => {
  console.log("test");
});

// let 제목 = document.querySelector("#title");
// //잘모샂으면 null 남음
// //narrowing
// if (제목 instanceof Element) {
//   //instanceof 연산자
//   제목.innerHTML = "반가워요";
// }

// let 버튼 = document.querySelector("#button");
// 버튼?.addEventListener("click", () => {
//   console.log("test");
// });
