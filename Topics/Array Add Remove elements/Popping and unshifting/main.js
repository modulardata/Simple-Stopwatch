function changeArray(x){
    const myArray = ['John', 'Kate', 'Igor', 'Sam', 'Stan', 'William'];
    // write your code here
    const removedElement = myArray.pop();
    myArray.unshift(x);
    return myArray;
}
