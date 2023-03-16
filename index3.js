var 제목 = document.querySelector("#title");
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
var 링크 = document.querySelectorAll('.link');
// 링크.forEach((a)=>{
//  if(a instanceof HTMLAnchorElement){
//     a.href = "https://kakao.com"
//  }
// })
for (var i = 0; i < 3; i++) {
    var a = 링크[i];
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
}
var Person2 = /** @class */ (function () {
    function Person2(a) {
        this.name = a;
    }
    Person2.prototype.함수 = function (a) {
        console.log('안녕' + a);
    };
    return Person2;
}());
var 사람1 = new Person2("kim");
var 사람2 = new Person2("park");
// 숙제 1
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
// 숙제 2
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                문자들.push(i);
            }
            else {
                숫자들.push(i);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);
var 세모 = { color: 'red', width: 200 };
var 학생 = { name: 'kim' };
var 선생 = { name: 'kim', age: 30 };
var 고먕이 = { name: 'kim', age: 30 };
var 상품 = { brand: 'Apple', serialNumber: 321, model: ['TV', 'phone'] };
var 장바구니 = [{ product: '청소기', price: 8000, card: false }, { product: '삼다수', price: 5000, card: true }];
var obj2 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
