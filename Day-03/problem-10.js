const friend1 = { name: "abul", friend: "babul" };
const friend2 = { name: "babul", friend: "abul" };
const friend3 = { name: "kabul", friend: "sabul" };
const friend4 = { name: "doe", friend: "alex" };
const friend5 = { name: "john", friend: "doe" };

function isBestFriend(person1, person2){
    if(person1.friend == person2.name && person1.name == person2.friend){
        return true;
    }
    else{
        return false;
    }
}

const result = isBestFriend(friend1, friend2);

console.log(result);

