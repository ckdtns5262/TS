// class User {
//     name : string;  // private 붙으면 class 안에서만 수정, 이용가능
//     private familyName : string = 'kim'
//     constructor(a){
//         this.name = a + this.familyName
//     }
//     이름변경함수(){
//         this.familyName = 'park'
//     }
function 함수1(x) {
    return x.length;
}
let a = 함수1(['100']);
// 숙제1
function 함수2(x) {
    return console.log(x.length);
}
함수2('hello');
함수2(['kim', 'park']);
let data = '{"name" : "dog", "age" : 1 }';
function 함수3(x) {
    return JSON.parse(x);
}
console.log(함수3(data));
// 숙제3
class Person {
    constructor(a) {
        this.name = a;
    }
}
let aa = new Person('어쩌구');
aa.name;
