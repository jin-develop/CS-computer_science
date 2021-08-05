
// // 객체는 
// let user = {
//     name : "john doe",
//     age : 30
// };

// // 객체 property에 할당된 함수를 method라고 한다.
// // user에 할당된 sayHi는 메서드


// user.sayHi = function() {
//     console.log("HIHIHIIHIHIHI");
// };


// user.sayHi();



let ladder = {
    step : 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep : function() {
        console.log(this.step);
        return this;
    }
}



// // 호출 체이닝
// ladder.up().up().showStep().down().showStep();

function User(name) {
    this.name = name;
    this.isAdmin = false;

}

// 생성자 함수의 사용
// 1 new 키워드를 통하여 생성자 함수 호출;

let user = new User('보라');

console.log(user.name);
console.log(user.isAdmin);


function Big() {
    this.name = '원숭이';
    return {name : '고릴라'};

}
let bb = new Big();
let bb1 = {
    name : '원숭이'
}

console.log(Big().name);
Big();

console.log(new Big().name);
new Big();


function Accumulator(first){
    this.a = first + 1;
    this.b = first = 2;

    this.value = function() {
        return this.a + this.b;
    };
}



let accumulator = new Accumulator(1);


console.log(accumulator.value());


let arr99 = ['사과', {name:'이루아'},true,function() {console.log(555)}];
console.log(arr99.length);
console.log(arr99[1].name);

arr99[3]();

let arr11 = new Array;
console.log(arr11);
arr11['gogo'] = 1;
arr11['gogo1'] = 2;
console.log(arr11);
console.log(arr11.length);

for (let key in arr99) {
    console.log(key, arr99[key]);
}


let arr88 = [1,2,3,4,5];
arr88.length = 2;

console.log(arr88);

arr88.length = 5;
console.log(arr88);

console.log(Object.entries(accumulator));



function makeCounter() {
    let count = 0;
    this.gg = 1;
    return function() {
        return count++;
    }
}

let counter = new makeCounter();

console.log(counter.gg);
console.log(counter());
console.log(counter());


console.log("********************")
let head = {
    glasses: 1
};
  
let table = {
    pen: 3,
    __proto__ : head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__ : table
};

let pockets = {
    money: 2000,
    __proto__ : bed
};

console.log(pockets.pen);
console.log(bed.glasses);



