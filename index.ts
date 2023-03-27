// let 이름1 : string[] = ['kim', 'park']

// let 이름2 : {name : string} = {name : 'kim'}

// type Name =  string[] | number
// let 이름 : Name = 123


// // 이 함수는 파라미터로 number, return 값으로 number
// function 함수(x : number) : number{
//     return x * 2
// }
// type Member = [number, boolean];
// let john : Member = [123, true]

// type Member2 = {
//     [key : string] : string // 모든 object 속성 타입은 string
// }
// let john2 : Member2 = {
//     name : 'kim'
// }

// let 이름 : string = '창현'
// let 나이 : number = 31
// let 출생지역 : string = '부산'

// let 자료형 : {song : string, singer : string} = {
//     song : '안아줘',
//     singer : '정준일'
// }

// let project : {member : string[], days : number , started : boolean} = {
//     member : ['kim','park'],
//     days : 30,
//     started : true
// }

// Union Type(타입2개 이상 합친 새로운 타입만들기)
// let 회원 : (number | string)[] = [1,'2',3]
// let 오브젝트 : {a : string | number} = { a: '123'}

// let 나이 : unknown = 1

// let user : string = 'kim'
// let age : number | undefined = undefined;
// let married : boolean = false;
// let 철수 : (string | number | undefined| boolean)[] = [user, age, married]


// let 학교 : {score : (number|boolean)[], teacher:string, friend : string | string[]} = {
//     score : [100, 97, 84],
//     teacher : 'Phil',
//     friend : 'John'
// }

// 학교.score[4] = false
// 학교.friend = ['Lee', 학교.teacher]


// void는 실수로 뭔가 return 하는걸 사전에 막을수 있음
// function 함수(x : number | string){
//   let array : number[] = []
//   if(typeof x === 'number'){
//     array[0] = x 
//   } else if ( typeof x ==='string'){
//     array[1] = 2
//   } else {
//     return 0;
//   }
// }

// function 내함수(x : number | string){
//    let array : number[] = []
//    array[0] = x as number // assertion 문법( 타입 덮어쓰기)
// }

// 내함수(123)



// function 숙제1(x? : string) : void{
//  if (x) {
//     console.log('안녕하세요' + x)
//  } else {
//     console.log('이름이 없습니다')
//  }
// }
// 숙제1('이창현')


// function 숙제2(x : string | number) : number{
//  return x.toString().length
// }
// 숙제2(123)

// function 결혼가능하냐(money : number , house : boolean, good : string){
//  let score : number = 0;
//  score += money;

//  if(house === true){
//     score += 500
//  }
//  if(good === "상"){
//     score += 100
//  }
//  if(score >= 600){
//     return "결혼가능"
//  }
// }

// 변수 재정의가 가능
// declare let a : number;

// import {Age} from './types/common/test'
// let 이름 : string = 'kim'
// type 판별 = false
// let b : Dog = 'puppy'
// let a = 20;
// console.log(a + 1)

// let age : Age

interface CarType {
    model : string,

}


class Car implements CarType {
    model : string;
    price : number = 1000;
    constructor(a: string){
        this.model = a
    }
}
let 붕붕이 = new Car('morning')

interface UserType  {
    // 모든 문자로 된 속성
   [key : string] : string
}


let user : UserType = {
    0 : 'kim',
    1 : '31',
    2 : 'busan'
}
console.log(user[0])

interface MyType {
   'font-size': MyType | number
}

let css : MyType = {
    'font-size' : {
        'font-size' : {
            'font-size': 14
        }
    }
}

console.log(css['font-size']['font-size']['font-size'])

// 숙제1
interface OType {
    [key : string] : string  | number
}


let obj : OType = {
    model : 'k5',
    barnd : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장'

}
// 숙제2
interface O2Type {
    'font-size' : number
   [key : string] : O2Type | number
}

let obj2 : O2Type= {
    'font-size' : 10,
    'secondary' : {
        'font-size' : 12,
        'third' : {
            'font-size' : 14
        }
    }
}

let obj3 = {name : 'kim', age : 20}
console.log(Object.keys(obj3))

interface Person {
  [key : string] : number
}

type PersonKeys = keyof Person
let aa : PersonKeys = 'name'

type Car2 = {
    color : boolean,
    model : boolean,
    price  : boolean | number
}

// 타입변환기
type TypeChanger<MyType> = {
    [key in keyof MyType] : string
}
type newType = TypeChanger<Car2>

let 새로운거 : newType = {
    color : 'red',
    model : 'kia',
    price : '300'
}

// 숙제1
type Bus = {
    color : string,
    model : boolean, 
    price : number
}
type TypeChanger2<MyType> = {
    [key in keyof MyType] : string | number
}

type newType2 = TypeChanger2<Bus>

// 숙제2
type TypeChanger3<MyType, T> = {
    [key in keyof MyType] : T
}
type NewBus = TypeChanger3<Bus, boolean>
type NewBus2 = TypeChanger3<Bus, string[]>

// 조건문으로 타입만들기 & infer
3 > 1 ? console.log('맞음') : console.log('틀림')

type Age<T> = T extends string ? string : unknown 

let a1 : Age<string>
let a2 : Age<number>

// Q1
type FirstItem<T> = T extends any[] ? T[0] : any
let x1 : FirstItem<string[]>
let x2 : FirstItem<number>

// type 타입추출<T> = T extends (infer R)[] ? R : unknown
type 타입추출<T> = T extends (()=> infer R) ? R : unknown


// type b = 타입추출<String[]>
type b = 타입추출<()=> void>  

type c = ReturnType<()=> void>

// 숙제1
type Age1<T> = T extends [string, ...any] ? T[0] : unknown

let age1 : Age1<[string, number]>
let age2 : Age1<[boolean, number]>

// 숙제2
type 타입뽑기<T> = T extends (x : infer R) => any ? R : any

type y = 타입뽑기<(x : number) => void>
type z = 타입뽑기<(x : string) => void>