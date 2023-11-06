const invitees: string[] = ["Elon Musk", "Jackma", "Mark Zuckerburg", "Mukesh Ambani"];
const guestWhoCantMakeIt: string = invitees.pop() || "";
console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);

const newInvitee: string = "Nikola Tesla";
invitees.push(newInvitee);

invitees.push("Galileo Galilei", "Isaac Newton", "Albert Einstein");

console.log("Good news! We've found a bigger dinner table, so more guests are welcome.");

invitees.unshift("Thomas Edison");
const middleIndex: number = Math.floor(invitees.length / 2);
invitees.splice(middleIndex, 0, "Winston Churchill");
invitees.push("Amelia Clarke");
for (const invitee of invitees) {
    console.log(`Dear ${invitee}, I would like to invite you to a dinner event. Please let me know if you can make it.`);
}