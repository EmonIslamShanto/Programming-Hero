var shoppintCart = {
    books : 4,
    pen : 10,
    noteBook : 7,
    pencil : 13
}

var propertyName = Object.keys(shoppintCart);
console.log(propertyName);
var propertyValue = Object.values(shoppintCart);
console.log(propertyValue);

for(var i = 0; i < propertyName.length; i++){
    var name = propertyName[i];
    var value = shoppintCart[name];
    console.log(name , value);
}

for(var Name in shoppintCart){
    console.log(Name);
}

for(var Name in shoppintCart){
    const Value = shoppintCart[Name];
    console.log(Name, Value);
}

var newThings = Object.entries(shoppintCart);
console.log(newThings);