const myArr = [1, 2, 3];
myArr.push(2);
console.log(myArr);
const mystr = 'this is a stRing';
console.log(mystr.toUpperCase());
console.log(mystr);
const yourArr = [1, 2, 3, 2];
console.log(yourArr == myArr);
const myObj = { apple: 2, banana: 3 };
const yourObj = myObj;
myObj.watermelon = 4;
yourObj.pear = 5;
console.log(myObj);
console.log(myObj == yourObj);
