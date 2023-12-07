const names = ['abul', 'babul', 'kabul', 'dabul', 'abul', 'kabul', 'babul', 'gabul'];

function removeDuplicate(names){
    const uniqe = [];

    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(uniqe.includes(name) === false){
            uniqe.push(name);
        }
    }
    return uniqe;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);