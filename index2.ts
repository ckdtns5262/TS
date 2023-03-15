function 숙제11(x : (number|string)[]){
 let 클리닝후함수 : number[] = []

 x.forEach((b)=>{
    if(typeof b === "string"){
        클리닝후함수.push(parseFloat(b))
    } else {
        클리닝후함수.push(b)
    }
 })
 return 클리닝후함수
}

console.log(숙제11([123, '3']))

let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }


function 만들함수(x : {subject : string | string[]}){
    if (typeof x.subject === "string"){
        return x.subject
    } else if(Array.isArray(x.subject)){
        return x.subject[x.subject.length-1]
    } else {
        return null
    }
}

console.log(만들함수( { subject : 'math' } )  )
console.log(만들함수( { subject : ['science', 'art', 'korean'] } ) )
console.log(만들함수({subject : ['english','art']}))


// type 변수 만드는 법
type Animal = { name : string , age : number}
type Insect = { name : string , age2 : number}
type New = Animal & Insect
let 새거 : New = {name : '곤충', age : 20, age2 : 30}
let 동물 : Animal = {name : 'fox' , age : 20}

const 출생지역 = { region : 'seoul'}
출생지역.region = 'busan'


type Friend = {
    name? : string // === name : string | undifinend
}
const 친구 : Friend = {
    name : '홍길동'
}
친구.name = '홍이동'

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x : number};
type PositionY = { y : number};
// & 연산자로 object 타입 extend 하기
type NewType = PositionX & PositionY; 

let postion : NewType = {x : 10 , y : 20}

// 속성 몇개가 선택사항일때
type Square = {
    color? : string,
    width : number
}
let 네모 : Square = {
    width : 400
}

// 숙제 2
type 숙제2 = {color? : string, size : number, readonly position : number[]}
let 숙제2변수 : 숙제2 = {
    size : 300,
    position : [1,2,3]
}

// 숙제 3
type MyType = {name : string , phone : number , email : string, }
let 유저정보 : MyType = {
    name : 'kim',
    phone : 123123,
    email : 'ckdgus5262@gmail.com'
}
type Adult = {adult : boolean}

type NewUser = MyType & Adult

let 유정정보2 : NewUser = {
    name : 'kim',
    phone : 123123,
    email : 'ckdgus5262@gmail.com',
    adult : true
}