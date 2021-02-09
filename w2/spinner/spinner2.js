let spinner2 = "|\r/\r-\\r|";
let delay = 0;

const spinner = function() {
    for (let char of spinner2) { //loop through sentence
        setTimeout(() => { // set timeout to delay 50 milliseconds per char
            process.stdout.write(char);
        }, delay)
        delay += 100;
        //console.log('\r')

    }
};

spinner(); //call the function to execute