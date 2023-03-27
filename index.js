// let 이름1 : string[] = ['kim', 'park']
class Car {
    constructor(a) {
        this.price = 1000;
        this.model = a;
    }
}
let 붕붕이 = new Car('morning');
let user = {
    0: 'kim',
    1: '31',
    2: 'busan'
};
console.log(user[0]);
let css = {
    'font-size': {
        'font-size': {
            'font-size': 14
        }
    }
};
console.log(css['font-size']['font-size']['font-size']);
let obj = {
    model: 'k5',
    barnd: 'kia',
    price: 6000,
    year: 2030,
    date: '6월',
    percent: '5%',
    dealer: '김차장'
};
let obj2 = {
    'font-size': 10,
    'secondary': {
        'font-size': 12,
        'third': {
            'font-size': 14
        }
    }
};
let obj3 = { name: 'kim', age: 20 };
console.log(Object.keys(obj3));
let aa = 'name';
let 새로운거 = {
    color: 'red',
    model: 'kia',
    price: '300'
};
// 조건문으로 타입만들기 & infer
3 > 1 ? console.log('맞음') : console.log('틀림');
let a1;
let a2;
let x1;
let x2;
let age1;
let age2;
