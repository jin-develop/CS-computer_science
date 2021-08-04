var kim = {
    name : 'kim',
    first : 10,
    second : 20,
    sum : function(){
        return this.first + this.second;
    }
}

// 자바스크립트의 객체 - 속성(Attribute)과 행위(Method)를 정의할수 있다.


var park = {
    name : 'park',
    first : 10,
    second : 70,
    sum : function(){
        return this.first + this.second;
    }
}

console.log('kim.sum() : ', kim.sum());
console.log('kim.sum() : ', lee.sum());


//만약 위의 sum을 바꾸고싶다면 다 같이 일일이 바꿔야 한다.


var d2 = new Date('2019-4-19');

//Date 같은 것을 만들기

console.log('Date', Date);
console.log(kim);

// --------------------------------------------

function Person(name, first, second, third){
    this.name = name,
    this.first = first,
    this.second = second,
    this.third = third,
    this.sum = function(){
        return this.first + this.second + this.third;
    }
}

console.log(Person);
console.log(new Person);

// new라는 키워드를 붙이면 객체를 생성하는 생성자가 된다.
// constructor(생성자); 함수;



var kim1 = new Person('kim', 10, 20, 30);
var lee1 = new Person('lee', 10, 10, 90);

//위 함수에 인자를 받을수있게 한다.


console.log(kim1.name);
console.log(lee1.sum());




