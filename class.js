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
// 무조건 첫번째 string, boolean 튜플타입
let 멍멍 = ['강아지', true];
function 함수21(...x) {
    console.log(x);
}
function 함수22(a, b) {
    console.log([a, b]);
}
함수21(1, '222');
let arr = [1, 2, 3];
let arr2 = [4, 5];
// array 들어오는데 아직 몇개인지 알지못함
let arr3 = [4, 5, ...arr];
console.log(arr3);
// 숙제1
let 음식 = ['담배', 4500, true];
// 숙제2
let arr4 = ['담배', 4500, true, false, true, true, false, false];
// 숙제3
function 함수33(...rest) {
}
// 숙제4
function 분류기(...rest) {
    let 문자들 = [];
    let 숫자들 = [];
    let result = [[], []];
    rest.forEach((a) => {
        if (typeof a === 'string') {
            result[0].push(a);
        }
        else {
            result[1].push(a);
        }
    });
    return result;
}
console.log(분류기('b', 5, 6, 7, 'a'));
