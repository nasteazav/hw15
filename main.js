myNum=10;
console.log(myNum);
myStr='строка';
console.log(myStr);
myBool= true;
console.log(myBool);
myArr=[1,2,3,4,5];
console.log(myArr);
myObj= {first: 'First Name', last: 'Last Name'};
console.log(myObj);

var decimal2 =myNum.toFixed(2);
console.log(decimal2);

var i = 10;
console.log(i++);
console.log(++i);
console.log(i--);
console.log(--i);
console.log(i);

var myTest = 20;
myTest += myNum;
console.log('+=', myTest);
myTest -= 10;
console.log('-=', myTest);
myTest *= 2;
console.log(' *=', myTest);
myTest /= 4;
console.log(' /=', myTest);
myTest %= 5;
console.log(' %=', myTest);

var myPi = Math.PI;
console.log('myPi:', myPi);
var myRound =Math.round(89.279)
console.log('myRound:', myRound);
var myRandom =Math.random () * 10;
console.log('myRandom:', myRandom);
var myPow = Math.pow(3,5);

var strObj = {str: 'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;
console.log('strObj = ', strObj);

var isRamaPos = strObj.str.indexOf('рама');
console.log('isRamaPos:', isRamaPos);

var strReplace = strObj.str.replace('мыла', 'моет');

strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log('strReplace:', strReplace);
var myString = 'string'
var myString2='string2'
console.log(myString.toUpperCase());
console.log(myString2.toLowerCase());

