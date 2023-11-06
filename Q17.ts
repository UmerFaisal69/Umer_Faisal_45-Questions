

let guests: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];


console.log("I can only invite two people for dinner.");


while (guests.length > 2) {
    const removedGuest = guests.pop(); 
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
    }
}

for (const guest of guests) {
    console.log(`You're still invited, ${guest}!`);
}

guests.pop();
guests.pop();

console.log("My guest list is now empty:", guests);