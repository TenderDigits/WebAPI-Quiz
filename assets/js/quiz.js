var taskIdCounter = 0;

// create student var to collect points logged
var studentName = window.prompt("What is your name?");
var studentTime = 15000;
var studentPoints = 0;

console.log(studentName, studentPoints);

// create arrays for questions with 4 multiple choice answers
var 
// question 1
var q1 = "A memory location that holds a single letter or number?";
// question 1 answers
var q1 = "Char"; // correct answer
var q1 = "Double";
var q1 = "Int";
var q1 = "Word";

// question 2
var q2 = "Which data structure uses LIFO?";
// question 2 answers
var q2 = "Array";
var q2 = "Int";
var q2 = "Stacks"; // correct answer
var q2 = "Queues"; 

// question 3
var q3 = "Entering Comment is a useless task, it will not help in any way.";

// question 3 answers
var q3 = "True";
var q3 = "False"; // correct answer

    // question 4
var q4 = "Int holds decemal numbers.";
// question 4 answers
var q4 = "True";
var q4 = "False"; // correct answer

//question 5
var q5 = "One loop inside the body of another loop is called?";
// question 5 answers
var q5 = "Loop in loop";
var q5 = "Double loops";
var q5 = "Nested loops"; // correct answer
var q5 = "Stacked loops";

// question 6
var q6 = "What is a short section of code that is written to complete a task?";
// question 6 answers
var q6 = "Buffer";
var q6 = "Function"; // correct answer
var q6 = "Array";
var q6 = "DOM";

// question 7 
var q7 = "What is a syntax error?";
// question 7 answers
var q7 = "An error you will never find";
var q7 = "An err you find at the end when the program gives out a wrong value due to logic error";
var q7 = "An error due to user error";
var q7 = "An error caused by language rules being broken"; // correct answer

// question 8 
var q8 = "What if FIFO?";
// question 8 answers
var q8 = "First in Few out";
var q8 = "Few in Few out";
var q8 = "First in First out"; // correct answer
var q8 = "Few in First out"; 

// question 9
var q9 = "A do loop and a while loop are the same";
// question 9 answers
var q9 = "True";
var q9 = "Fales"; // correct answer

// question 10
var q10 = "What is an HTML attribute?";
// question 10 answers
var q10 = "Provides additional information about an element";
var q10 = "A true or false variable";
var q10 = "A control flow statement";
var q10 = "None of the above";


// start quiz button
var buttonEl = document.querySelector("#start-quiz");
console.log(buttonEl);


// // clear the rules page and present the first question from the array (multiple choice)

// start 15 second timer for each question


// give student 2 points for each correct answer logged
var correct = function() {
    window.alert("Correct! 😃 🙌");
    studentPoints = studentPoints + 2;

    console.log(studentName + "now has" + studentPoints + "!");
}

// subtract 2 seconds for inccorect answer
var incorrect = function () {
    window.alert("Incorrect! Try again!")

    if (studentTime === 0) {
        console.log("Next Question...")
    }
    else {
        console.log("timer will coninute until time runs out or question is answered correctly")
    }
}

// start button eventListener - create function!
buttonEl.addEventListener("click", function() {
    alert("button clicked");
  });
