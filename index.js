/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge = 21;
if (votingAge > 18) {
    console.log(true)
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var a = 3;
var b = 5;
if (a > 1) {
    var a = a + b;
    console.log(a)
}




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

var year = "1999";
var intyear = parseInt(year);
console.log(intyear)



//Task d: Write a function to multiply a*b 

function taskd () {
    var answer = a * b;
    console.log(a);
    console.log(b);
    console.log(answer);
}
taskd ();


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
var MyAge = 48

function AgeInDogYears () {
    var DogYears = MyAge * 7;
    console.log(DogYears)
}

AgeInDogYears ();



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
var weightInPounds = 15;
var ageInYears = 1;
var puppiesAgeInMonths = 4
if (ageInYears >= 1 && weightInPounds <= 5) {
    var feedingRequirements = weightInPounds * 0.05;
} else if (ageInYears >= 1 && weightInPounds >= 6 && weightInPounds <= 10) {
    var feedingRequirements = weightInPounds * 0.04;
} else if (ageInYears >= 1 && weightInPounds >= 11 && weightInPounds <= 15) {
    var feedingRequirements = weightInPounds * 0.03;
} else if (ageInYears >= 1 && weightInPounds >= 15) {
    var feedingRequirements = weightInPounds * 0.02;
} else if (ageInYears < 1 && puppiesAgeInMonths <= 4) {
    var feedingRequirements = weightInPounds * .10;
} else if (ageInYears < 1 && puppiesAgeInMonths > 4 && puppiesAgeInMonths <= 7) {
    var feedingRequirements = weightInPounds * .05;
} else if (ageInYears < 1 && puppiesAgeInMonths > 7 && puppiesAgeInMonths <= 11) {
    var feedingRequirements = weightInPounds * .04;
}
    
console.log(ageInYears);
console.log(weightInPounds);
console.log(feedingRequirements);




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

var myChoice = "Rock";
console.log(myChoice);
var computer = Math.random();
console.log(computer);

function rockPaperScissors () {
    if (computer <= 0.33) {
        computer = "Rock";
    } else if (computer <= 0.66) {
        computer = "Paper";
    } else {
        computer = "Scissors";
    }
    console.log(computer);
    if (myChoice === computer) {
        console.log("It's a Push")
    } else if (myChoice === "Rock" && computer === "Paper"){
        console.log("Paper covers rock!  Computer wins!");
    } else if (myChoice === "Paper" && computer === "Rock"){
        console.log("Paper covers rock!  I win!");
    } else if (myChoice === "Rock" && computer === "Scissors") {
        console.log("Rock crushes scissors!  I win!");
    } else if (myChoice === "Scissors" && computer === "Paper") {
        console.log("Scissors cut paper! I win!")
    } else if (myChoice === "Paper" && computer === "Scissors") {
        console.log("Scissors cut paper! Computer wins!")
    }

}

rockPaperScissors();




  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

var KM = 1000;
var Miles = KM / 1.609;
var Miles = Math.round(Miles, 2); 
console.log(KM + " Kilometers is equal to " + Miles + " Miles");



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
var feet = 1000;
var CM = feet * 30.48;
var CM = Math.round(CM, 2);
console.log(feet + " feet is equal to " + CM + " Centimeters")



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  

function annoyingSong () {
    var i;
    for (i = 99; i > 0; i--){
        bottlesLeft = i - 1;
        if (bottlesLeft == 0){
            console.log(i + " bottle of soda on the wall! " + i + " bottle of soda! Take it down, pass it around, no bottles of soda on the wall!");
        } else {
            console.log(i + " bottles of soda on the wall! " + i + " bottles of soda! Take one down, pass it around, " + bottlesLeft + " bottles of soda on the wall!");
        }
    }
}

annoyingSong();



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  


function gradeBook (grade){
    var studentGrade;
    if (grade >= 90){
        var studentGrade = "A";
    } else if (grade >= 80 && grade <= 89){
        var studentGrade = "B";
    } else if (grade >= 70 && grade <= 79){
        var studentGrade = "C";
    } else if (grade >= 60 && grade <= 69){
        var studentGrade = "D";
    } else {
        var grade = "F";
    }
    console.log("This student's letter grade is a " + studentGrade);
}
  
gradeBook(86);
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
function countingVowels (vowelString) {
    var vowels = 'aeiouAEIOU';
    var vowelCount = 0;

    for (var i = 0; i < vowelString.length; i++) {
        if (vowels.indexOf(vowelString[i]) !== -1) {
            vowelCount += 1;
        }
    }
    console.log(vowelCount + " is the number of vowels in this string");
}
countingVowels("The Beast in the East is the Bomb!");





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object


var myChoice = prompt ("Please enter Rock, Paper, or Scissors");
console.log(myChoice);
var computer = Math.random();
console.log(computer);

function rockPaperScissors () {
    if (computer <= 0.33) {
        computer = "Rock";
    } else if (computer <= 0.66) {
        computer = "Paper";
    } else {
        computer = "Scissors";
    }
    console.log(computer);
    if (myChoice === computer) {
        console.log("It's a Push")
    } else if (myChoice === "Rock" && computer === "Paper"){
        console.log("Paper covers rock!  Computer wins!");
    } else if (myChoice === "Paper" && computer === "Rock"){
        console.log("Paper covers rock!  I win!");
    } else if (myChoice === "Rock" && computer === "Scissors") {
        console.log("Rock crushes scissors!  I win!");
    } else if (myChoice === "Scissors" && computer === "Paper") {
        console.log("Scissors cut paper! I win!")
    } else if (myChoice === "Paper" && computer === "Scissors") {
        console.log("Scissors cut paper! Computer wins!")
    }

}

rockPaperScissors();

