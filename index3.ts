let 제목 = document.querySelector("#title");

// if(제목 != null){
//     제목.innerHTML = "반갑습니다"
// }

// if (제목 instanceof Element){
//     제목.innerHTML = "반갑습니다"
// }

// if(제목?.innerHTML != undefined){
//     제목.innerHTML = "반가워요"
// }

// as로 무조건 element 타입으로 간주하기
// let 제목 = document.querySelector('#title') as Element;
// 제목.innerHTML = "반갑습니다"

// let 버튼 = document.querySelector("#button");
// 버튼?.addEventListener("click", function () {
//   let 이미지 = document.querySelector("#image");
//   if (이미지 instanceof HTMLImageElement) {
//     이미지.src = "change.jpg";
//   }
// });




let 링크 = document.querySelectorAll('.link')

// 링크.forEach((a)=>{
//  if(a instanceof HTMLAnchorElement){
//     a.href = "https://kakao.com"
//  }
// })

for(let i = 0; i < 3; i++){
    let a = 링크[i]
  if(a instanceof HTMLAnchorElement){
    a.href = "https://kakao.com"
  }
}

class Person2 {
    name : string;
  constructor(a : string){
    this.name = a
  }
  함수(a : string){
    console.log('안녕' + a)
  }
}

let 사람1 = new Person2("kim")
let 사람2 = new Person2("park")


// 숙제 1
class Car{
    model : string
    price : number
    constructor(model : string, price : number){
        this.model = model;
        this.price = price;
    }
    tax(){
       return this.price/10
    }  
}
let car1 = new Car('소나타', 3000)
console.log(car1)
console.log(car1.tax())

// 숙제 2
class Word {
    num;
    str;
    constructor(...param){
        let 숫자들  : number[] = []
        let 문자들 : string[] = []
        param.forEach((i)=>{
            if(typeof i === "string"){
                문자들.push(i)
            } else {
                숫자들.push(i)
            }
        })
        this.num = 숫자들;
        this.str = 문자들;
    }
}
let obj = new Word('kim', 3, 5, 'park')
console.log(obj.num)
console.log(obj.str)


interface Semo {
    color : string;
    width : number
}
let 세모 : Semo = {color : 'red', width : 200}

// interface 장점 : extends로 복사가능 , 중복선언 가능
interface Student { name : string}
interface Teacher extends Student { age : number} 

let 학생 : Student = { name : 'kim'}
let 선생 : Teacher = { name : 'kim',age : 30}

type Animal2 = { name : string}
type Cat = { age : number} & Animal2 // & 기호(intersection type) 두 타입을 전부 만족하는 타입이라는 뜻
let 고먕이 : Cat = {name : 'kim' , age: 30}

// 숙제 1 
interface Product { brand : string, serialNumber : number, model :string[]}
let 상품 : Product = { brand : 'Apple', serialNumber : 321, model : ['TV', 'phone']}
// 숙제 2
interface bagoni {product : string, price : number}
interface Card  extends bagoni {card : boolean}
let 장바구니 : Card[] = [ { product : '청소기', price : 8000, card : false}, {product : '삼다수', price : 5000, card : true}]
// 숙제 3
interface Num { 
    plus : (a : number, b: number)=>number , 
    minus : (a : number, b: number)=>number}

let obj2 : Num = {
    plus(a,b){
        return a+b
    },
    minus(a,b){
        return a-b
    }

}