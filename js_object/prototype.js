function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    

}

Person.prototype.sum = function(){
    return this.first + this.second;
}
var park = new Person('park',1,2,3);
var jun = Person('jun', 6,2,4)

console.log(park.sum())