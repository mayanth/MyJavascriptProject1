//Ex11: Javascript Strings
//Ex11.1: Strings Double Quotes and Single Quotes
var heroName1 = "Iron Man";
var heroName2 = 'Captain American';
document.getElementById("ex11-1").innerHTML = "I like " + heroName1 + 'and ' + heroName2 + ".";

//Ex11.2: Strings using Backslash
var question = 'What\'s your name?';
var answer = "you can call me \"May Ano\", and you?";
let response = "JavaScript \
Manpower.";
document.getElementById("ex11-2").innerHTML = question + "<br>" + answer + "<br>" + response;

//Ex11.3: Strings Methods
let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nobis magni, corrupti dolorem rem dolorum corporis sunt ad excepturi fugiat facere ipsum. Inventore, illum laboriosam est unde obcaecati labore nesciunt.";
let eng_alphabet = "ABCDE";
let thai_alphabet = "กขคง";

//(1) Length
document.getElementById("ex11-3-1").innerHTML = "lorem = " + lorem.length + "<br>" + "eng_alphabet = " + eng_alphabet.length + "<br>" + "thai_alphabet =" + thai_alphabet.length;

//(2) Position IndexOf() start 0,1,2,...,n
document.getElementById("ex11-3-2").innerHTML = "\"ipsum\" position = " + lorem.indexOf("ipsum") + "<br>" + "\"D\" position = " + eng_alphabet.indexOf("D") + "<br>" + "\"ค\" position = " + thai_alphabet.indexOf("ค");

//(3) match(/txt/g) g is global
document.getElementById("ex11-3-3").innerHTML ="\"ipsum\" match = " + lorem.match(/ipsum/g);

//(4) replace("old text", "new text") or /old text/ g แทนที่ทั้งหมด
document.getElementById("ex11-3-4").innerHTML = lorem.replace("sit", "แทนที่แล้ว");
document.getElementById("ex11-3-5").innerHTML = lorem.replace(/ipsum/g, "แทนที่แล้ว");

//(5) toUpperCase()
document.getElementById("ex11-3-6").innerHTML = lorem.toUpperCase();

//(6) toLowerCase()
document.getElementById("ex11-3-7").innerHTML = lorem.toLowerCase();