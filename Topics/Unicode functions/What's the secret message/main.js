function decodeSecretMessage(codePoints) {
    /* Do not change code above */

    //Write your code here
    return String.fromCodePoint(...codePoints);
    /* Do not change code below */

}

process.stdin.setEncoding('utf8');

let input = '';

process.stdin.on('data', (data) => {
    input += data;
});

process.stdin.on('end', () => {
    const codePoints = input.trim().split(/,\s*/).map(Number);
    const decodedMessage = decodeSecretMessage(codePoints);
    process.stdout.write(decodedMessage);
});
