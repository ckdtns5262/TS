function 숙제11(x) {
    var 클리닝후함수 = [];
    x.forEach(function (b) {
        if (typeof b === "string") {
            클리닝후함수.push(parseFloat(b));
        }
        else {
            클리닝후함수.push(b);
        }
    });
    return 클리닝후함수;
}
console.log(숙제11([123, '3']));
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function 만들함수(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return null;
    }
}
console.log(만들함수({ subject: 'math' }));
console.log(만들함수({ subject: ['science', 'art', 'korean'] }));
console.log(만들함수({ subject: ['english', 'art'] }));
var 새거 = { name: '곤충', age: 20, age2: 30 };
var 동물 = { name: 'fox', age: 20 };
var 출생지역 = { region: 'seoul' };
출생지역.region = 'busan';
var 친구 = {
    name: '홍길동'
};
친구.name = '홍이동';
var postion = { x: 10, y: 20 };
var 네모 = {
    width: 400
};
var 숙제2변수 = {
    size: 300,
    position: [1, 2, 3]
};
var 유저정보 = {
    name: 'kim',
    phone: 123123,
    email: 'ckdgus5262@gmail.com'
};
var 유정정보2 = {
    name: 'kim',
    phone: 123123,
    email: 'ckdgus5262@gmail.com',
    adult: true
};