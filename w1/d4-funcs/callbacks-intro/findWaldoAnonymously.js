const findWaldo = (names, found) => {
    names.forEach((name, index) => {
        if (name === "Waldo") {
            found(index); // execute callback
        }
    })
}

const actionWhenFound = function(index) {
    console.log("Found him at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);