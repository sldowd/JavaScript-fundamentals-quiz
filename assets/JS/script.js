//assign variables for display containers
var questionDiv = document.querySelector("#quiz-questions");
var answerDiv = document.querySelector("#answer-choices");
var gradeDiv = document.querySelector("#grade");
var pageContentEl = document.querySelector("#page-content");
//create an array of questions 
var questions = [
    {
        q: 'JavaScript code is linked to HTML via which HTML tag?',
        options: [
            '<body>',
            '<head>',
            '<script>',
            '<link>'
        ],
        answer: '<script>'
    },
    {
        q: 'Which of the following is NOT an example of a primitive data type?',
        options: [
            'number',
            'string',
            'null',
            'object'
        ],
        answer: 'object'
    },
    {
        q: 'A function must be _____ before it is called.',
        options: [
            'concatenated',
            'defined',
            'blended',
            'valued'
        ],
        answer: 'defined'
    },
    {
        q: 'In JavaScript an array index begins at ___',
        options: [
            'a',
            'z',
            '0',
            '1'
        ],
        answer: '0'
    },
    {
        q: 'Values that are passed through parameters into a function are known as _______',
        options: [
            'arguments',
            'callbacks',
            'statements',
            'conditionals'
        ],
        answer: 'arguments'
    },
    {
        q: 'Which of the following is not a useful tool for fixing bugs in your JavaScript?',
        options: [
            'debugger',
            'Chrome DevTools',
            'event listener',
            'console'
        ],
        answer: 'event listener'
    },
    {
        q: 'Which of the following is used to observe a user behavior?',
        options: [
            'event listener',
            'for loop',
            'switch',
            'variable'
        ],
        answer: 'event listener'
    },
    {
        q: 'A variable that is defined within a function has a scope that is described as ________',
        options: [
            'global',
            'functional',
            'local',
            'spatial'
        ],
        answer: 'local'
    },
    {
        q: 'Which operator could be used to shorten this line of code: n = n + 1?',
        options: [
            '+=',
            '*=',
            '--',
            '++'
        ],
        answer: '++'
    },
    {
        q: 'DOM is an accronym for:',
        options: [
            'Directed Oblong Markup',
            'Durable Orientation Modules',
            'Document Object Model',
            'Dynamic Object Model'
        ],
        answer: 'Document Object Model'
    }
]
//display initial page before quiz
var startScreen = function() {
    var heading = document.createElement("h1");
    heading.textContent = "JavaScript Quiz Challenge"
    heading.className = "";

    questionDiv.appendChild(heading);

    var rules = document.createElement("p");
    rules.innerHTML = "Try to answer the following JavaScript related questions within the time limit. <br> Keep in mind that the incorrect answers will penalize your time by 10 seconds! <br> Good Luck!";

    questionDiv.appendChild(rules);

    var startButton = document.createElement("button");
    startButton.textContent = "Start Quiz";
    startButton.setAttribute("button-name", "start-button");

    questionDiv.appendChild(startButton);
}
//start game score at 0
var score = 0

//start timer when game starts


//loop over everyquestion
var startQuiz = function(event) {
    for (var i = 0; i < questions.length; i++);
    //display questions and answers

}
//compare answers


//if correct increase score
    //show "correct!" under questions


//if wrong subtract time
    //show "Wrong!" under questions

//create handler for buttons
var buttonHandler = function(event) {
    var targetEl = event.target;
    var buttonId = targetEl.getAttribute("button-name");

    if (buttonId === "start-button") {
        console.log("start button");
        questionDiv.innerHTML = "";
        startQuiz();
    }
}
//function to clear content
var clearcontent = function() { 
    document.getElementById().innerHTML = ""; 
} 
//show score at the end of game


//give option to restart game


//call function to load startscreen
window.onload = startScreen();

//event listener for whole page
pageContentEl.addEventListener("click", buttonHandler);