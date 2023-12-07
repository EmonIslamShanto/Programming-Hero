const lyrics ='Tumi bondhu Kala pakhi ami jeno ki!!';
const lowerLyrics = lyrics.toLowerCase();
const searchString = 'kala';
const lowerString = searchString.toLowerCase();
const doesExist = lowerLyrics.includes(lowerString);

console.log(doesExist);
console.log(lowerLyrics.indexOf(lowerString));
console.log(lowerLyrics.startsWith(lowerString));
console.log(lowerLyrics.endsWith(lowerString));