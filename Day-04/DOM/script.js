const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border= '3px solid steelblue';
    section.style.marginBottom= '5px';
    section.style.borderRadius = '5px';
    section.style.backgroundColor = 'lightgray';
    section.style.paddingLeft = '7px';
}

const places = document.getElementById('place-container');
places.style.backgroundColor = 'yellow';
places.classList.add('name');
places.classList.remove('lerge-text');
console.log(places.childNodes);
console.log(places.childNodes[2].nextSibling);

const placeUl = document.querySelector('#place-container ul');
const newLi = document.createElement('li');
newLi.innerText = 'kushtia';
placeUl.append(newLi);
console.log(placeUl.parentNode);