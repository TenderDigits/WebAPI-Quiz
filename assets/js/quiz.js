var taskIdCounter = 0;

// create student var to collect points logged
var studentName = window.prompt("What is your name?");
var studentPoints = 0;

console.log(studentName, studentPoints);

var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

// create arrays for questions with 4 multiple choice answers
var quizQuestions = [
    {
        title:"A memory location that holds a single letter or number?",
        choices:["Char", "Double", "Int", "Word"],
        answer: "Char"
    },
    {
        title:"Which data structure uses LIFO?",
        choices:["Array", "Int", "Stacks", "Queues"],
        answer: "Stacks"
    },
    {
        title:"Entering Comment is a useless task, it will not help in any way.",
        choices:["True", "False"],
        answer: "False"
    },
    {
        title:"Int holds decemal numbers.",
        choices:["True", "False"],
        answer: "False"
    },
    {
        title:"One loop inside the body of another loop is called?",
        choices:["Loop in loop", "Double loops", "Nested loops", "Stacked loops"],
        answer: "Nested loops"
    },
    {
        title:"What is a short section of code that is written to complete a task?",
        choices:["Buffer", "Function", "Array", "DOM"],
        answer: "Function"
    },
    {
        title:"What is a syntax error?",
        choices:["An error you will never find", "an error you find at the end witht the program gives out a wrong value due to logic error", "An error due to user error", "An error caused by language rules being broken"],
        answer: "An error caused by language rules being broken"
    },
    {
        title:"What if FIFO?",
        choices:["First in Few out", "Few in Few out", "First in First out", "Few in First out"],
        answer: "First in Frist out"
    },
    {
        title:"A do loop and a while loop are the same",
        choices:["True", "False"],
        answer: "False"
    },
    {
        title:"What is an HTML attribute?",
        choices:["Provides addtional iformation about an element", "A true or false variable", "A control flow statement", "None of the above"],
        answer: "First in Frist out"
    }]


// start quiz button
var buttonEl = document.getElementById("start-quiz");
console.log(buttonEl);

console.log(quizQuestions.length);

// for loop to access array of questions
for(var i = 0; i < quizQuestions.length; i++) {
    console.log(quizQuestions[i]);
}

// start 15 second timer for each question


// give student 2 points for each correct answer logge
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
    question.textContent = quizQuestions[0].title
    answer1.textContent = quizQuestions[0].choices[0]
    answer2.textContent = quizQuestions[0].choices[1]
    answer3.textContent = quizQuestions[0].choices[2]
    answer4.textContent = quizQuestions[0].choices[3]
  });
