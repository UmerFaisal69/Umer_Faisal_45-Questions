var guests = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log("I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
    }
}
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("You're still invited, ".concat(guest, "!"));
}
guests.pop();
guests.pop();
console.log("My guest list is now empty:", guests);
