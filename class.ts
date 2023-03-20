// class User {
//     name : string;  // private 붙으면 class 안에서만 수정, 이용가능
//     private familyName : string = 'kim'
//     constructor(a){
//         this.name = a + this.familyName
//     }
//     이름변경함수(){
//         this.familyName = 'park'
//     }

// }
// let 유저1 = new User('금지')
// console.log(유저1.name)
// 유저1.이름변경함수()
// console.log(유저1)

// class Person {
//     constructor(public name : string){
//     }
// }
// let 자식 = new Person('aa')
// console.log(자식)

// class User {
//   protected x = 10;
// }

// class NewUser extends User {
//     doThis(){
//         this.x = 20;
//     }
// }

// class User {
//   static  x = 10; // static 붙이면 부모 class에 직접 부여됨
//     y = 20;
// }
// let 자식 = new User();
// console.log(User.x)


// class User {
//    private skill : string = "전문가입니다"
//     constructor(a){
//         this.skill =  a + this.skill
//     }
//     skillChange(){

//     }
// }

// let 철수 = new User('react')
// console.log(철수)

// let 철수2 = new User('java');
// console.log(철수2)


// class User {
//     private static x = 10;
//     public static y= 20;
//    static addOne(a : number){
//         console.log(User.x + a)
//     }
// }
// User.addOne(3)
// User.addOne(4)


// // 숙제3 = > 네모.draw() 할때마다 HTML에 배경색 'red' <div>박스가 무작위로 배치되게끔
// class Square {
//     constructor(
//         public width : number,
//         public height : number,
//         public color : string){

//     }
//     draw(){
//         let a = Math.random();
//         let square = `<div style="position:relative;
//         top : ${a * 400}px;
//         left : ${a * 400}px;
//         width : ${this.width}px;
//         height : ${this.height}px;
//         background : ${this.color}"</div>`
//         document.body.insertAdjacentHTML('beforeend',square)
//     }
// }

// let 네모 = new Square(30,30, 'red')
// 네모.draw()
// 네모.draw()
// 네모.draw()
// 네모.draw()

// import {Name, 나이, aa , ObjFunction} from './a'

// let 변수 : Name = 'park'
// let 함수 : ObjFunction = function(a){
//     console.log(a)
// }
// 함수({abc : '안녕'})

// function 함수1<MyType>(x : MyType[]): MyType{
//     return x[0]
// }

// let a = 함수1<number>([4,2])
// let b = 함수1<string>(['4','2'])

// console.log(a)
// console.log(b)


interface LengthCheck {
    length : number
}

function 함수1<MyType extends LengthCheck>(x : MyType){
    return x.length
}

let a = 함수1<string[]>(['100'])

// 숙제1
function 함수2<T extends string | string[]>(x : T){
    return console.log(x.length)
}
함수2<string>('hello')
함수2<string[]>(['kim', 'park'])

// 숙제2
interface Animal {
    name : string;
    age : number
}
let data = '{"name" : "dog", "age" : 1 }'

function 함수3<T extends Animal>(x : string) : T{
    return JSON.parse(x)
}
console.log(함수3<Animal>(data))

// 숙제3
class Person <T> {
    name;
    constructor(a : T){
        this.name= a
    }
}
let aa= new Person<string>('어쩌구')
aa.name