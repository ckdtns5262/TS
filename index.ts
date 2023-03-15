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
function 함수(x : number | string){
  let array : number[] = []
  if(typeof x === 'number'){
    array[0] = x 
  } else if ( typeof x ==='string'){
    array[1] = 2
  } else {
    return 0;
  }
}

function 내함수(x : number | string){
   let array : number[] = []
   array[0] = x as number // assertion 문법( 타입 덮어쓰기)
}

내함수(123)



function 숙제1(x? : string) : void{
 if (x) {
    console.log('안녕하세요' + x)
 } else {
    console.log('이름이 없습니다')
 }
}
숙제1('이창현')


function 숙제2(x : string | number) : number{
 return x.toString().length
}
숙제2(123)

function 결혼가능하냐(money : number , house : boolean, good : string){
 let score : number = 0;
 score += money;

 if(house === true){
    score += 500
 }
 if(good === "상"){
    score += 100
 }
 if(score >= 600){
    return "결혼가능"
 }
}


