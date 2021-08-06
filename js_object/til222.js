class Myclass{
    constructor() {}
    method1() {    }
    method2() {}
}


class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
}

let user = new User("John");
user.sayHi();

// 클래스는 함수의 한 종류;




