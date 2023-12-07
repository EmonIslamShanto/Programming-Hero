const lyrics ='Tumi bondhu Kala pakhi ami jeno ki!!';
const words = lyrics.split(' ');
const letters = lyrics.split('');
console.log(words);
console.log(letters);

const parts = lyrics.slice(10,15);
console.log(parts);

const part = lyrics.substring(10,15);
console.log(part);

const index = lyrics.lastIndexOf('e');
console.log(index);

const wordsArray = [
    'Tumi', 'bondhu',
    'Kala', 'pakhi',
    'ami',  'jeno',
    'ki!!'
  ]

  const newSong = wordsArray.join(' ');
  console.log(newSong);