var shoppintCart = {
    books : 4,
    pen : 10,
    noteBook : 7,
    pencil : 13
}

console.log(shoppintCart);

var numBooks = shoppintCart.books;
var numPen = shoppintCart['pen'];

var propertyName = 'noteBook';
var numNoteBook = shoppintCart[propertyName];
console.log(propertyName , numNoteBook);

console.log(numBooks);
console.log(numPen);

var propertise = Object.keys(shoppintCart);
var propertyValue = Object.values(shoppintCart);

console.log(propertise);
console.log(propertyValue);

shoppintCart.pencil = 30;
shoppintCart['books'] = 25;
shoppintCart[propertyName] = 20;

console.log(shoppintCart);

