// option 01: direct set on html.


// option 02: 
function makered() {
    document.body.style.backgroundColor = 'red';
}
const makeBlueButton = document.getElementById('make_blue');
makeBlueButton.onclick = makeBlue;
// option 03: 
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// option 04:
const purpleButton = document.getElementById('make_purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option 05: 
const pinkButton = document.getElementById('make_pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option 06:
const makeGreenButton = document.getElementById('make_green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
});

// option 07:
document.getElementById('make_golden').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})