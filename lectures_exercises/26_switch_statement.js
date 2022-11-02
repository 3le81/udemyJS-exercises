// 26. The Switch Statement and challenge else/if:
const day = "monday";
switch (day) {
    case "monday":
        console.log("Plan to study course");
        console.log("Do js exercises!");
        break;
    case "tuesday":
        console.log("Study theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Watch js videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend!!");
        break;
    default:
        console.log("Not a valid day!😅");
}
//  Now change the switch statements with the else/if:
// if (day === "monday") {
//     console.log("Plan to study course");
//     console.log("Do js exercises!");
// } else if (day === "tuesday") {
//     console.log("Study theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//     console.log("Study theory videos");
// } else if (day === "friday") {
//     console.log("Watch js videos");
// } else if (day === "saturday" || day === "sunday") {
//     console.log("Enjoy the weekend!!");
// } else {
//     console.log("Not a valid day!");
// };