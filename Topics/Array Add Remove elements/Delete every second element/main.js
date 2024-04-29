function deleteEverySecond() {
    const myArray = ['John', 'Kate', 'Igor', 'Sam', 'Stan', 'William'];
    // write your code here
    return myArray.filter((element, index) => index % 2 === 0);
}
