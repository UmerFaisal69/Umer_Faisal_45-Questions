var invitees = ["Elon Musk", "Jackma", "Mark Zuckerburg", "Mukesh Ambani"];
var guestWhoCantMakeIt = invitees.pop() || "";
console.log("Unfortunately, ".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
var newInvitee = "Nikola Tesla";
invitees.push(newInvitee);
invitees.push("Galileo Galilei", "Isaac Newton", "Albert Einstein");
console.log("Good news! We've found a bigger dinner table, so more guests are welcome.");
invitees.unshift("Thomas Edison");
var middleIndex = Math.floor(invitees.length / 2);
invitees.splice(middleIndex, 0, "Winston Churchill");
invitees.push("Amelia Clarke");
for (var _i = 0, invitees_1 = invitees; _i < invitees_1.length; _i++) {
    var invitee = invitees_1[_i];
    console.log("Dear ".concat(invitee, ", I would like to invite you to a dinner event. Please let me know if you can make it."));
}
