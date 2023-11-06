var invitees = ["MAN", "JAN", "KHAN"];
var guestWhoCantMakeIt = invitees.pop() || "";
console.log("Unfortunately, ".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
var newInvitee = "ALI";
invitees.push(newInvitee);
for (var _i = 0, invitees_1 = invitees; _i < invitees_1.length; _i++) {
    var invitee = invitees_1[_i];
    console.log("Dear ".concat(invitee, ", I would like to invite you to a dinner event. Please let me know if you can make it."));
}
