
/*Tasks Homework JavaScript 20220929 Js*/

// 1 Дается предложение в котором нужно капитализировать первые буквы всех слов
// const mySentence = "javascript and python is cool";
mySentence = "javascript and python is cool"
function myNewStr (str) {
    const words = mySentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}
alert(myNewStr(mySentence))



// 2 Создавть функцию которая меняет регистр
// К примеру из строки:  SoMe SeNtEnCe WiTh CaMeL CaSe
// сделать:
// sOmE sEnTeNcE wItH cAmEl cAsE

const mySentence2 = "SoMe SeNtEnCe WiTh CaMeL CaSe";

let text = 'SoMe SeNtEnCe WiTh CaMeL CaSe';
function myNewStr2 (text) {
    let ans = text.split('').map(function(c){
        return c === c.toUpperCase()
        ? c.toLowerCase()
        : c.toUpperCase()
      }).join('')
      
      return(ans)
}
alert(myNewStr2(text))



// 3.Создать функцию которая перевернет строку. К примеру из HELLO сделает OLLEH
// Реализация должна иметь 2 версии. Через функцию и строки. И через цикл for

// 1 variant 
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

alert(reverseString("hello"));

// 2 variant 
function reverseString(str) {
    var newString = "";

    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }

    return newString; 
}
 
console.log(reverseString('sholpan'));


