// start of assignment21-25


// assignment21-25 task1
var firstname=prompt("What is your first name");
var lastname=prompt("What is your last name");
var fullname=firstname+" "+lastname;
alert("Hello! "+fullname);



// assignment21-25 task2
var input=prompt("What is your favourite mobile model");
document.write("My Favourite phone is: "+input+"<br>");
var finaloutput=input.length;
document.write("Length of string: "+finaloutput);



// assignment21-25 task3
var a=("Pakistani");
document.write("String: "+a+"<br>");
var b=a.indexOf("n")
document.write("index of 'n': "+b);


// assignment21-25 task4
var a=("Hello World");
document.write("String: "+a+"<br>");
var b=a.lastIndexOf('l');
document.write("Last index of 'l': "+b);


// assignment21-25 task5
var a=("Pakistani");
document.write("String: "+a+"<br>");
var b=a.charAt(3);
document.write("Character at index 3: "+b);


// assignment21-25 task6
var firstname=prompt("What is your first name");
var lastname=prompt("What is your last name");
var fullname=firstname.concat(" "+lastname);
alert("Hello! "+fullname);


// assignment21-25 task7
var a=("Hyderabad");
document.write("City: "+a+"<br>");
var result = a.replace("Hyder", "Islam");
document.write("After replacement: "+result);


// assignment21-25 task8
var a=("Ali and Sami are best friends. They play cricket and football together.");
document.write("Message: "+a+"<br>");
var result = a.replace(/and/g, "&");
document.write("After Replacement: "+result);


// assignment21-25 task9
var a=("472");
document.write("Value: "+a+"<br>");
var b=("String");
document.write("Type: "+b+"<br>");
var c=("472");
document.write("Value: "+c+"<br>");
var result = b.replace("String", "number");
document.write("Type: "+result);



// assignment21-25 task10
var a=prompt("Write something");
document.write("User input: "+a+"<br>");
var b=a.toUpperCase();
document.write("Upper case: "+b);


// assignment21-25 task11
var a=prompt("Write something");
document.write("User input: "+a+"<br>");
var b=a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
document.write("Title case: "+b);



// assignment21-25 task12
var num="35.36";
document.write("Number: "+num+"<br>");
var b=num.replace(".","");
var c=b.toString();
document.write("Result: "+c);


// assignment21-25 task13
var username = prompt("Enter your name: ");
var charValue;
for(var i = 0; i < username.length; i++){
    charValue = username[i].charCodeAt(0);
    if(charValue === 33 || charValue === 44 || charValue === 46 || charValue === 64){
        alert("Please enter a valid username")
    }
}


// assignment21-25 task14   
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var a = prompt("What do you want to order: ");
a = a.toLowerCase();
var check = false;
for(var i = 0; i < arr.length; i++){
    if(a === arr[i]){
        document.write(arr[i] + " is available at index " + i + " in our bakery");
        check = true;
    }
}
if (check === false){
    document.write("We are sorry. " + a+ " is not available in our bakery");
}


// assignment21-25 task15
var password = prompt("Enter your password: ");
var passwordLength = false;
var passwordChar = false;
var passwordInt = false;
var passwordStart = true;
for (i = 0; i < password.length; i++){
    var charValue = password[i].charCodeAt(0);
    if (charValue >= 65 && charValue <= 90 ){
        passwordChar = true;
    }
    else if (charValue >= 97 && charValue <= 122 ){
        passwordChar = true;
    }
}
for (i = 0; i < password.length; i++){
    var charValue = password[i].charCodeAt(0);  
    if (charValue >= 48 && charValue <= 57 ){
        passwordInt = true;
    }
}
var charValue = password.charCodeAt(0);
if (charValue >= 48 && charValue <= 57 ){
    passwordStart = false;
}
if(password.length >= 6){
    passwordLength = true;
}

if(passwordChar === false || passwordInt === false || passwordLength === false || passwordStart === false){
    alert("Enter valid Password");
}

else{
    alert("Welcome");
}
  

// assignment21-25 task16
var a = "University of Karachi";
var arr = a.split("");
for(var i=0; i<arr.length; i++){
    document.write(arr[i] + "<br>");
}


// assignment21-25 task17
var a=prompt("Enter something");
document.write("User input: "+a+"<br>");
var b=a.charAt(a.length-1);
document.write("Last Char of input: "+b);


// assignment21-25 task18
var a = "the quick brown fox jumps over the lazy dog";
var count = (a.match(/the/g) || []).length;
document.write("Text: " + a + "<br>");
document.write("There are " + count + " occurrence(s) of the word 'the'");

// end of assignment21-25







// start of assignment26-30


// assignment26-30 task1
var a=prompt("Enter any positive integer");
var b=Math.round(a);
var c=Math.ceil(a);
var d=Math.floor(a);
document.write("number: "+a+"<br>");
document.write("round of value: "+b+"<br>");
document.write("floor value: "+d+"<br>");
document.write("ciel value: "+c);


// assignment26-30 task2
var a=prompt("Enter any negative integer");
var b=Math.round(a);
var c=Math.ceil(a);
var d=Math.floor(a);
document.write("number: "+a+"<br>");
document.write("round of value: "+b+"<br>");
document.write("floor value: "+d+"<br>");
document.write("ciel value: "+c);


// assignment26-30 task3
var a=prompt("Enter any negative number");
var b=Math.abs(a);
document.write("The absolute value of "+a+" is "+b);


// assignment26-30 task4
var a=Math.random();
var b=Math.round(a*5)+1;
document.write("random dice value: "+b);


// assignment26-30 task5
var a=Math.random();
var b=Math.round(a*1)+1;
document.write(b+"<br>");
if(b===1){
document.write("random coin value: Tails");
}
else{
document.write("random coin value: Heads");
}


// assignment26-30 task6
var a=Math.random();
var b=Math.round(a*99)+1;
document.write("random number between 1 and 100: "+b);


// assignment26-30 task7
var a=prompt("Enter your wieght in kgs");
var b=parseFloat(a);
document.write("The weight of user is "+b+" kilograms");


// assignment26-30 task8
var a=Math.random();
var b=Math.round(a*9)+1;
var c=prompt("Enter a number betwwen 1 and 10");
if(c===b){
    document.write("Congartulations");
}
else{
    alert("Try again!");
}

// end of assignment26-30







// start of assignment31-34

// assignment31-34 task1
var a=new Date();
document.write(a);


// assignment31-34 task2
var monthNames = ["January", "February ", "March", "April", "May", "June", "July","August","September","October","November","December"];
var a= new Date();
var theMonth = a.getMonth();
var result = monthNames[theMonth];
alert("Current Month: "+result);


// assignment31-34 task3
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
alert("Today is: "+nameOfToday);


// assignment31-34 task4
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
if(nameOfToday===dayNames[0]||nameOfToday===dayNames[6]){
    alert("It’s Fun day”");
}
else{
    alert("Today is: "+nameOfToday);
}


// assignment31-34 task5
var a=new Date();
var b=a.getDate();
if(b<16){
document.write("First fifteen days of the month");
}
else{
document.write("Last days of the month");  
}


// assignment31-34 task6
var a=new Date();
document.write("Current Date: "+a+"<br>");
var c=a.getTime();
document.write("Elapsed milliseconds since january 1, 1970: "+c+"<br>");
var d=a.getMinutes();
document.write("Elapsed minutes since january 1, 1970: "+d);


// assignment31-34 task7
var a=new Date();
var b=a.getHours();
if(b<12){
alert("It's AM");
}
else{
alert("It's PM");  
}


// assignment31-34 task8
var a = new Date();
var laterDate = new Date("Dec 31, 2020");
document.write(laterDate);


// assignment31-34 task9
var a = new Date();
var b = a.getTime();
var c = new Date("Apr 24, 2020");
var d = c.getTime();
var e = b - d;
var res = e/(1000*60*60*24);
res = Math.floor(res);
document.write(res + " days have passed since 1st Ramazan, 2020");


// assignment31-34 task10
var a = new Date();
var b = a.getTime();
var c = new Date("Jan 01, 2015");
var d =c.getTime();
var e = b - d;
var res = e/(1000);
res = Math.floor(res);
document.write("On reference date: " + a + "<br>")
document.write(res + " seconds had passed since beginning of 2015");


// assignment31-34 task11
var a = new Date();
var b = a.getHours();
b = b-1
document.write("current date: " + a + "<br>");
a.setHours(b);
document.write("1 hour ago, it was " + a);


// assignment31-34 task12
var a = new Date();
var b= a.getFullYear();
b = b-100;
document.write("current date: " + a + "<br>");
a.setFullYear(b);
document.write("100 years back, it was " + a);



// assignment31-34 task13
var age = +prompt("Enter your age");
var a = new Date();
var b = a.getFullYear();
var res = b- age;
document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + res);


// assignment31-34 task14
var a= "Ranjeet";
var b = new Date();
c = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
var d = b.getMonth();
var e = 410;
var f = 16;
var g = e * f;
var h = 350;
var i = g + h;
document.write("K-Electric Bill" + "<br>" + "<br>");
document.write("Customer Name: " + a+ "<br>");
document.write("Month: " + c[d] + "<br>");
document.write("No of units: " + e + "<br>");
document.write("Charges per unit: " + f + "<br>" + "<br>");
document.write("Net Amount Payable (within Due Date): " + g+ "<br>");
document.write("Late Payment Surcharge: " + h+ "<br>");
document.write("Gross Amount Payable (after Due Date): " + i + "<br>");

// end of assignment31-34 






// start of assignment35-38


// assignment35-38 task1
function distime(){
var a=new Date();
return a;
}
document.write(distime());


// assignment35-38 task2
function add(){
    var a=prompt("Enter First name");
    var b=prompt("Enter Last name");
    var c=(a+" "+b);
    return c;
}
alert("Hello "+add());



// assignment35-38 task3
function add(){
    var a=parseFloat(prompt("Enter First number"));
    var b=parseFloat(prompt("Enter second number"));
    var c=(a+b);
    return c;
}
alert("Sum of two numbers is: "+add());


// assignment35-38 task4
function calcu(){
    var a=parseFloat(prompt("Enter First number"));
    var b=parseFloat(prompt("Enter second number"));
    var c=prompt("Enter operator which you want to perform");
    if(c==="+"){
        var d=(a+b);
        return d;
    }
    else if(c==="*"){
        var d=(a*b);
        return d;
    }
    else if(c==="/"){
        var d=(a/b);
        return d;
    }
    else if(c==="-"){
        var d=(a-b);
        return d;
    }
    else{
        return console.error();   
    }
}
document.write("Calculated Result : "+calcu());



// assignment35-38 task5
function squares(){
    var a=parseFloat(prompt("Enter any number"));
    var b=a*a;
    return b;
}
alert("Square of inputted number is: "+squares());

         

// assignment35-38 task6
function fact(){
    var factans=1;
    var a=parseInt(prompt("Enter any number"));
    for(var i=1; i<=a; i++){
        factans=factans*i;
    }
    return factans;
}
alert("Factorial of inputted number is: "+fact());



// assignment35-38 task7
function count(){
var a=prompt("Enter the starting number");
var b=prompt("Enter the ending number");
var result=0;
for(var i=a; i<=b; i++){
   result +=i;
}
return(result);
}
alert("Counting from a to b is: "+count());


// assignment35-38 task8
var base=prompt("Enter base value to calculate right angle triangle");
var perp=prompt("Enter perpendicular value to calculate right angle triangle");
var hyp1;
var hyp2;
function calculateHypotenuse(){
  hyp1=((base*base)+(perp*perp));
function calculatesquare(){
    hyp2=Math.sqrt(hyp1);
  }
  calculatesquare();
  return hyp2;
}
document.write("Result: "+calculateHypotenuse());


// assignment35-38 task9
var b=4;
var a=prompt("Enter hieght to calculate area of triangle where width is 4");
var ans;
function triangle(){
  ans=b*a;
  return ans;
}
alert("area of triangle is "+triangle());


// assignment35-38 task10
var s=prompt("Enter any word to check whether it is palindrome or not?")
function isPalindrome () {
  var sRev = '';
  for (var i=s.length; i>0; i--) {
      sRev += s[i-1] ;
  }
  return s==sRev;
}
alert("result : "+isPalindrome());



// assignment35-38 task11
var str=prompt("Enter any sentence");
function uppercase()
{
  var array1 = str.split(' ');
  var newarray1 = [];   
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write("Example string : "+str+"<br>");
document.write("Expected outcome : "+uppercase());



// assignment35-38 task12
var text=prompt("Enter any sentence");
function longestWord() {
  let wordArray = text.split(' ')
  let maxLength = 0
  let result = ''

  for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i].length > maxLength) {
          maxLength = wordArray[i].length
          result = wordArray[i]
      }
  }

  return result
}
document.write("Example string : "+text+"<br>");
document.write("Expected outcome : "+longestWord());



// assignment35-38 task13
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
alert(char_count('JSResourceS.com', 'o'));




// assignment35-38 task14
var r=prompt("Enter radius");
var pie=3.14;
var ans1;
var ans2;
function calcCircumference(){
  ans1=(2*pie*r);
  return ans1;
}
function calcArea(){
  ans2=(pie*(r*r));
  return ans2;
}
document.write("The circumference is: "+calcCircumference()+"<br>");
document.write("The area is: "+calcArea());

// end of assignment35-38 