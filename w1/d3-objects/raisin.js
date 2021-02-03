// declare the raisinAlarm function with cookie as param
// go through each arr elem to look for raisins
// if we find a raisin we output "Raisin alert!"
// if no raisins found we output "All good!"

const raisinAlarm = function(cookie) {
    for (let i = 0; i < cookie.length; i++) {
        if (cookie[i] === "🍇") {
            return "Raisin alert!"
        }
    }
    return "All good!"
};

const raisinAlarmArray = function(cookie) {
    let resultsArray = [];
    for (let i = 0; i < cookie.length; i++) {
        if (cookie[i].includes("🍇")) {
            resultsArray.push("Raisin Alert!");
        } else {
            resultsArray.push("All good");
        }
    }

    return resultsArray;
};


console.log(raisinAlarmArray(
    [
        ["🍫", "🍫", "🍇", "🍫"],
        ["🍫", "🍇", "🍫", "🍫", "🍇"],
        ["🍫", "🍫", "🍫"]
    ]
));