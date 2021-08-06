function Person(name, first, second){
    this.name = name,
    this.first = first,
    this.second = second
    
}
Person.prototype.sum = function(){
    return this.first + this.second;
}
let kim = new Person('kim',10,20);
let park = new Person('park', 10, 50);

console.log(kim.sum());
console.log(park);