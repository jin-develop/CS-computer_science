// 객체만드는 3가지 방법

// 1. 객체 리터럴
const person ={
    name: '데브코스',
    company: '그랩',
    gowhere: function(place){
        console.log(`${place}로 가기`);
    },
};

console.log(person.gowhere('강남'))

// 2. Object 생성자 함수
const person1 = new Object();
person1.name = "데브코스";
person1.company = "그랩";
person1.gowhere = function (place) {
    console.log(`${place}로 가기`);
};

console.log(person1.gowhere('서초'));

// 생성자 함수

function Person2(name, company, gowhere) {
    this.name = name;
    this.company = company;
    this.move = function(place){
        console.log(`${place}로 가기`);
    }
}


// 여기서 프로토타입이 나타나는 이유 메모리 낭비;


// 자바스크립트의 프로토타입은 매우중요!!!
// 자바스크립트를 prototype based language라고 부르기도 한데
// 자바스크립트 기반


