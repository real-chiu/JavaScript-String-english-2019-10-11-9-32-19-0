// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
var name_upper = name.toUpperCase();
console.log(name_upper);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var sentence_array = sentence.split(' ');
var sentence_capitalized = sentence_array.map((w) => w.charAt(0).toUpperCase() + w.substring(1)).join(" ");
console.log(sentence_capitalized);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.substring(1));