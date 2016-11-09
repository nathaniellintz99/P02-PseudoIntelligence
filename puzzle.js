// Nathaniel Lintz: p02: Psuedo Intelligence Test

//Solution-Game 1: a^2 - b^2 = c;
function validate1(){
  var input1 = document.getElementById("input1").value;
  var game1 = 140;
  var noGuess = "Enter in a number.";
  var wrongChar = "Numbers Only!";
  var correct = "You're Correct!";
  var wrongGuess = "Wrong Answer!";
  if(input1 == game1){
    document.getElementById("output1").innerHTML = correct;
    document.getElementById("verdict1").classList.add("output1good");
    document.getElementById("verdict1").classList.remove("output1bad");
    cookieTrue();
  }
  else if(/[a-zA-Z\-_"'*%$&:;#@!,~`=+<>{}|?()^]/.test(input1)){
    document.getElementById("output1").innerHTML = wrongChar;
    document.getElementById("verdict1").classList.add("output1bad");
    document.getElementById("verdict1").classList.remove("output1good");
    cookieFalse();
  }
  else if(input1 == null || input1 == ""){
    document.getElementById("output1").innerHTML = noGuess;
    document.getElementById("verdict1").classList.add("output1bad");
    document.getElementById("verdict1").classList.remove("output1good");
  }
  else if(input1 !== game1){
    document.getElementById("output1").innerHTML = wrongGuess;
    document.getElementById("verdict1").classList.add("output1bad");
    document.getElementById("verdict1").classList.remove("output1good");
    cookieFalse();
  }
  else{
    document.getElementById("output1").innerHTML = noGuess;
    document.getElementById("verdict1").classList.add("output1bad");
    document.getElementById("verdict1").classList.remove("output1good");
  }
}
//Solution: Number + sum of Letter's numerical place in alphabet
//10 + CAT (3+1+20=24) = 34
function validate2(){
  var input2 = document.getElementById("input2").value;
  var game2 = 69;
  var noGuess = "Enter in a number.";
  var wrongChar = "Numbers only!";
  var correct = "You're Correct!";
  var wrongGuess = "Wrong Answer!";
  if(input2 == game2){
    document.getElementById("output2").innerHTML = correct;
    document.getElementById("verdict2").classList.add("output1good");
    document.getElementById("verdict2").classList.remove("output1bad");
    cookieTrue();
  }
  else if(/[a-zA-Z\-_"'%*$&:;#@!~`,=+<>{}|?()^]/.test(input2)){
    document.getElementById("output2").innerHTML = wrongChar;
    document.getElementById("verdict2").classList.add("output1bad");
    document.getElementById("verdict2").classList.remove("output1good");
    cookieFalse();
  }
  else if(input2 == null || input2 == ""){
    document.getElementById("output2").innerHTML = noGuess;
    document.getElementById("verdict2").classList.add("output1bad");
    document.getElementById("verdict2").classList.remove("output1good");
  }
  else if(input2 !== game2){
    document.getElementById("output2").innerHTML = wrongGuess;
    document.getElementById("verdict2").classList.add("output1bad");
    document.getElementById("verdict2").classList.remove("output1good");
    cookieFalse();
  }
  else{
    document.getElementById("output2").innerHTML = noGuess;
    document.getElementById("verdict2").classList.add("output1bad");
    document.getElementById("verdict2").classList.remove("output1good");
  }
}

var game3;
function practiceNum(){
  var myArray = [];
  var myArray2 = [];
  for (var i = 0; i < 12; i++){
    myArray.push(Math.floor(Math.random()*9+1));
  }
  for (var i = 0; i < 12; i++){
    myArray2.push(Math.pow(myArray[i], 3)+Math.pow(myArray[i+=1], 2));
  }
  // I couldn't figure out how to write a function to automatically write out the generated numbers to the page
  game3 = myArray2[5];
  document.getElementById("randomNum1").innerHTML = myArray[0];
  document.getElementById("randomNum2").innerHTML = myArray[1];
  document.getElementById("randomNum3").innerHTML = myArray[2];
  document.getElementById("randomNum4").innerHTML = myArray[3];
  document.getElementById("randomNum5").innerHTML = myArray[4];
  document.getElementById("randomNum6").innerHTML = myArray[5];
  document.getElementById("randomNum7").innerHTML = myArray[6];
  document.getElementById("randomNum8").innerHTML = myArray[7];
  document.getElementById("randomNum9").innerHTML = myArray[8];
  document.getElementById("randomNum10").innerHTML = myArray[9];
  document.getElementById("randomNum11").innerHTML = myArray[10];
  document.getElementById("randomNum12").innerHTML = myArray[11];
  document.getElementById("randomAnswer1").innerHTML = myArray2[0];
  document.getElementById("randomAnswer2").innerHTML = myArray2[1];
  document.getElementById("randomAnswer3").innerHTML = myArray2[2];
  document.getElementById("randomAnswer4").innerHTML = myArray2[3];
  document.getElementById("randomAnswer5").innerHTML = myArray2[4];
}
function validate3(){
  var input3 = document.getElementById("input3").value;
  var noGuess = "Enter in a number.";
  var wrongChar = "Numbers only!";
  var correct = "You're Correct!";
  var wrongGuess = "Wrong Answer!";
  if(input3 == game3){
    document.getElementById("output3").innerHTML = correct;
    document.getElementById("verdict3").classList.add("output1good");
    document.getElementById("verdict3").classList.remove("output1bad");
    cookieTrue();
  }
  else if(/[a-zA-Z\-_"'%*$&:;#@!~`,=+<>{}|?()^]/.test(input3)){
    document.getElementById("output3").innerHTML = wrongChar;
    document.getElementById("verdict3").classList.add("output1bad");
    document.getElementById("verdict3").classList.remove("output1good");
    cookieFalse();
  }
  else if(input3 == null || input3 == ""){
    document.getElementById("output3").innerHTML = noGuess;
    document.getElementById("verdict3").classList.add("output1bad");
    document.getElementById("verdict3").classList.remove("output1good");
  }
  else if(input3 !== game3){
    document.getElementById("output3").innerHTML = wrongGuess;
    document.getElementById("verdict3").classList.add("output1bad");
    document.getElementById("verdict3").classList.remove("output1good");
    cookieFalse();
  }
  else{
    document.getElementById("output3").innerHTML = noGuess;
    document.getElementById("verdict3").classList.add("output1bad");
    document.getElementById("verdict3").classList.remove("output1good");
  }
}
function cookieTrue(){
  if(cookieVal === null){
    Cookie.set('scoreTrue', '1',  { expires: 7, path: '/' } );
    cookieVal = 1;
  }
  if(cookieVal > 1){
    cookieVal++;
    Cookie.set("scoreTrue", cookieValue,  { expires: 7, path: '/' } );
  }
}
function cookieFalse(){
  if(cookieVal === null){
    Cookie.set('scoreFalse', '1',  { expires: 7, path: '/' } );
    cookieVal = 1;
  }
  if(cookieVal > 1){
    cookieVal++;
    Cookie.set("scoreFalse", cookieValue,  { expires: 7, path: '/' } );
  }
}

function score(){
  var scoreTrue = Cookies.get("scoreTrue");
  var scoreFalse = Cookies.get("scoreFalse");
  document.getElementById("scoreTrue").innerHTML = scoreTrue;
  document.getElementById("scoreFalse").innerHTML = scoreFalse;
}
