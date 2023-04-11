module.exports = {
 add: function(a, b){
    return a + b;
 },
 subtract: function(a, b){
   return a - b;
 },
 multiply: function(a, b){
   return a * b;
},
 divide: function(a, b){
    if (b === 0){
        throw new error("Deu piti no pata");
    }
    return a / b;
}
};