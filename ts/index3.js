// let 제목 = document.querySelector("#title");
// // if(제목 != null){
// //     제목.innerHTML = "반갑습니다"
// // }
// // if (제목 instanceof Element){
// //     제목.innerHTML = "반갑습니다"
// // }
// // if(제목?.innerHTML != undefined){
// //     제목.innerHTML = "반가워요"
// // }
// // as로 무조건 element 타입으로 간주하기
// // let 제목 = document.querySelector('#title') as Element;
// // 제목.innerHTML = "반갑습니다"
// // let 버튼 = document.querySelector("#button");
// // 버튼?.addEventListener("click", function () {
// //   let 이미지 = document.querySelector("#image");
// //   if (이미지 instanceof HTMLImageElement) {
// //     이미지.src = "change.jpg";
// //   }
// // });
// let 링크 = document.querySelectorAll('.link')
// // 링크.forEach((a)=>{
// //  if(a instanceof HTMLAnchorElement){
// //     a.href = "https://kakao.com"
// //  }
// // })
// for(let i = 0; i < 3; i++){
//     let a = 링크[i]
//   if(a instanceof HTMLAnchorElement){
//     a.href = "https://kakao.com"
//   }
// }
// class Person2 {
//     name : string;
//   constructor(a : string){
//     this.name = a
//   }
//   함수(a : string){
//     console.log('안녕' + a)
//   }
// }
// let 사람1 = new Person2("kim")
// let 사람2 = new Person2("park")
// // 숙제 1
// class Car{
//     model : string
//     price : number
//     constructor(model : string, price : number){
//         this.model = model;
//         this.price = price;
//     }
//     tax(){
//        return this.price/10
//     }  
// }
// let car1 = new Car('소나타', 3000)
// console.log(car1)
// console.log(car1.tax())
// // 숙제 2
// class Word {
//     num;
//     str;
//     constructor(...param){
//         let 숫자들  : number[] = []
//         let 문자들 : string[] = []
//         param.forEach((i)=>{
//             if(typeof i === "string"){
//                 문자들.push(i)
//             } else {
//                 숫자들.push(i)
//             }
//         })
//         this.num = 숫자들;
//         this.str = 문자들;
//     }
// }
// let obj = new Word('kim', 3, 5, 'park')
// console.log(obj.num)
// console.log(obj.str)
// interface Semo {
//     color : string;
//     width : number
// }
// let 세모 : Semo = {color : 'red', width : 200}
// // interface 장점 : extends로 복사가능 , 중복선언 가능
// interface Student { name : string}
// interface Teacher extends Student { age : number} 
// let 학생 : Student = { name : 'kim'}
// let 선생 : Teacher = { name : 'kim',age : 30}
// type Animal2 = { name : string}
// type Cat = { age : number} & Animal2 // & 기호(intersection type) 두 타입을 전부 만족하는 타입이라는 뜻
// let 고먕이 : Cat = {name : 'kim' , age: 30}
// // 숙제 1 
// interface Product { brand : string, serialNumber : number, model :string[]}
// let 상품 : Product = { brand : 'Apple', serialNumber : 321, model : ['TV', 'phone']}
// // 숙제 2
// interface bagoni {product : string, price : number}
// interface Card  extends bagoni {card : boolean}
// let 장바구니 : Card[] = [ { product : '청소기', price : 8000, card : false}, {product : '삼다수', price : 5000, card : true}]
// // 숙제 3
// interface Num { 
//     plus : (a : number, b: number)=>number , 
//     minus : (a : number, b: number)=>number}
// let obj2 : Num = {
//     plus(a,b){
//         return a+b
//     },
//     minus(a,b){
//         return a-b
//     }
// }
// function 함수(...a : number[]) {
//     console.log(a)
// }
// 함수(1,2,3,4,5,6)
// let arr = [1,2,3]
// let arr2 = [4,5]
// let arr3 = [...arr, ...arr2]
// console.log(arr3)
// let [변수1, 변수2] = ['안녕', 100]
// console.log(변수1)
//  let {student, age} = { student : true, age : 20}
// function 예시({student, age} : {student : boolean , age : number}){
//     console.log(student, age)
// }
// 예시({student : true ,age : 20})
// //숙제 1
// function 최대값(...a : number[]){
//  let result = 0;
//  a.forEach((i)=>{
//     if(result < i) {
//         result = i
//     }
//  })
//  return result
// }
// console.log(최대값(6,3,7,2))
// //숙제2
// function 함수3({user, comment, admin} : {user: string , comment : number[], admin : boolean}){
//     console.log(user, comment, admin)
// }
// 함수3({user : 'kim', comment : [3,5,4], admin : false})
// //숙제3
// function 함수4([a, b, c] : [a : number, b : string , c : boolean]){
//     console.log(a,b,c)
// }
// 함수4([40, 'wine', false])
// && 연산자로 null & undefined 타입체크하기
// function 함수(a : string | undefined){
//     if( a && typeof a === 'string'){ // a가 undefined면 if문 실행 x , a가 string이면 if문 실행 o
//     }
// }
// // in 키워드로 object narrowing 가능(속성명 in object자료)
// type Fish = { swim : string}
// type Bird = { swim : string ,fly : string}
// function 함수2(animal : Fish | Bird){
//     if('fly' in animal){
//         animal.fly
//     }
// }
// type Car = {
//     wheel : '4개',
//     color : string
// }
// type Bike = {
//     wheel : '2개',
//     color : string
// }
// function 함수3(x : Car | Bike){
//     if(x.wheel === "2개"){
//         console.log('x는 Bike타입')
//     }
// }
// function 함수() : void {
//     throw new Error()
//     while(true){
//     }
// }
// function 함수(param : string){
//     if(typeof param === 'string'){
//         console.log(param)
//     } else {
//         console.log(param)
//     }
// }
let 함수 = function () {
    throw new Error();
};
