const invitees: string[] = ["MAN", "JAN", "KHAN"];
const guestWhoCantMakeIt: string = invitees.pop() || "";
console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);
const newInvitee: string = "ALI";
invitees.push(newInvitee);
for (const invitee of invitees) {
    console.log(`Dear ${invitee}, I would like to invite you to a dinner event. Please let me know if you can make it.`);
}