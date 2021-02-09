//process.stdout.write('hello from spinner1.js... \rheyyy\n');
// \r starts node cursor back at the beginning and replaces the existing characters

setTimeout(() => {
    process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
    process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
    process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
    process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
    process.stdout.write('\r|   ');
}, 1100);

setTimeout(() => {
    process.stdout.write('\r/   ');
}, 1300);

setTimeout(() => {
    process.stdout.write('\r-   ');
}, 1500);

setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
}, 1700);

setTimeout(() => {
    process.stdout.write('\r|   ');
}, 1900);

//
//git