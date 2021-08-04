function Person(){

}

// ==========위랑 아래랑 같다. 함수는 자바스크립트에서 객체다. 그래서 자바스크립트 함수는 객체이기때문에 property를 가질수 있다.


var Person = new Function(); 


// 새로운 객체 생성

function man(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}


man.prototype.sum = function(){};
// man에 새로운 함수 정의

var park = new man('park',10,20);
// 그럼 여기 park에서는 1.__proto__, 2. name, 3 first, 4 second. 가 생성됨


console.log(park.name)
