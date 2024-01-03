const placeslist = document.getElementById('palces-list');
console.log(placeslist);
const li = document.createElement('li');
li.innerText = 'katabon';

placeslist.appendChild(li);

const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
mainContainer.appendChild(section);
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
section.appendChild(ul);

const li1 = document.createElement('li');
li1.innerText = 'biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'noodles';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'khichuri';
ul.appendChild(li3);

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My favourite dress</h1>
<ul>
        <li>shirt</li>
        <li>pant</li>
</ul>
`;
mainContainer.appendChild(sectionDress);