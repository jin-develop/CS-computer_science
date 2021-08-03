var kim = {
    first : 10,
    second : 20,
    sum : function() {
        return this.first + this.second;
    }
};

var park = {
    first : 50,
    second : 20,
    sum : function() {
        return this.first + this.second;
    }
};

console.log(kim.sum());