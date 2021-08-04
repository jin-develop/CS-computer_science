class Person{
    // method를 만들때 함수를 정의 function을 안씀
    //  sum() {

    //  }
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;

        console.log('constru11');
    } // 객체가 생성되는 과정에서 실행되었다.
    //객체가 만들어지기전에 실행되도록 약속된 (초기상태를 지정하기 위한)
    sum() {
        return this.first + this.second;
    }// 안에다 넣는 방법 (권장)
}
Person.prototype.sum = function(){
    return this.first + this.second;
} // 바깥에 넣는 방법


var kim = new Person('kim', 10, 20); //객체로 지정
//객체가 생성됨// 클래스는 객체를 만드는 공장이다.

//객체를 만들때 초기상태를 만들기 위해 
console.log(kim); // Person {}
console.log(kim.sum());


kim.sum = function(){
    return this.first;
} // 함수 바꾸는 방법

console.log(kim.sum());




// var kim1 = new Person('kim', 10, 20, 30);
// kim1.sum = function () {
//     return 'modified ' + (this.first + this.second + this.third);
//   }
// var lee1 = new Person('lee', 10, 10, 90);
// console.log(kim1.sum());
// console.log(lee1.sum());