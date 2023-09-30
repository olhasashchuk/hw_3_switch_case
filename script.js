let numOrStr = prompt('Input number or string');
console.log(numOrStr);

switch (numOrStr) {
    case null:
        console.log('You canceled');
        break;
    case ' ':
        console.log('Empty String');
        break;
    case String():
        console.log('Number is Ba_NaN');
        break;
    default:
        console.log('OK!')
}
