// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

function writeCards(arrayOfNames, eventName) {
    let ArrayOfThankYouMessages = []
      for(let i = 0; i <arrayOfNames.length; i++){
        ArrayOfThankYouMessages.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
      }
    return ArrayOfThankYouMessages
}

function countDown(x) {
    while (x >= 0) {
        console.log(x);
        x--;
    }
}