// 자바스크립트의 프로토타입은 매우중요!!!
// 자바스크립트를 prototype based language라고 부르기도 한데
// 자바스크립트 기반




function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}
Person.prototype.sum = function(){
    return this.first + this.second + this.third;
}


Person.prototype.good = function(){
    return this.name + '님 안녕하세요';
}
Person.prototype.sum = function(){
    return this.first + this.second + this.third;
}
// 위 생성자 안에 함수가 정의하지 않고 있고, Person을 실행할때마다 부를때마다 실행된다.
// --> 메모리 절약

var park = new Person('park',2,4,7);
console.log(park.name);
console.log(park.first);
console.log(park.sum());
console.log(park.good());
var kim = new Person('kim', 10, 20, 30);
var lee1 = new Person('lee', 10, 10, 90);
console.log(kim.good());
console.log(lee1.sum());

//이렇게 되면 생성자가 생성 될때마다 함수가 계속 만들어진다.
// -->  생성하는 시간이 들고 메모리 낭비, -> 성능 저하


var kim1 = new Person('kim', 10, 20, 30);
kim1.sum = function () {
    return 'modified ' + (this.first + this.second + this.third);
  }
var lee1 = new Person('lee', 10, 10, 90);
console.log(kim1.sum());
console.log(lee1.sum());


