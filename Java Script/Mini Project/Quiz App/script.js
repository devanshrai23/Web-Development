const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Transfer Markup Language",
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which of the following is a CSS preprocessor?",
        options: ["Sass", "Bootstrap", "JQuery", "React"],
        answer: "Sass"
    },
    {
        question: "Which programming language is primarily used for adding interactivity to web pages?",
        options: ["Java", "Python", "JavaScript", "C#"],
        answer: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which tag is used to define an internal style sheet in HTML?",
        options: ["<css>", "<style>", "<script>", "<link>"],
        answer: "<style>"
    },
    {
        question: "Which property in CSS is used to change the text color?",
        options: ["font-color", "text-style", "color", "text-color"],
        answer: "color"
    },
    {
        question: "What is the correct way to include an external JavaScript file in an HTML document?",
        options: [
            '<script src="script.js">',
            '<js src="script.js">',
            '<link href="script.js">',
            '<script href="script.js">'
        ],
        answer: '<script src="script.js">'
    },
    {
        question: "Which JavaScript function is used to select an element by its class name?",
        options: [
            "getElementById()",
            "querySelector()",
            "getElementsByClassName()",
            "querySelectorAll()"
        ],
        answer: "getElementsByClassName()"
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        options: ["margin", "padding", "spacing", "border"],
        answer: "margin"
    },
    {
        question: "What is the purpose of the 'alt' attribute in an image tag?",
        options: [
            "Defines the image's width",
            "Provides alternative text for accessibility",
            "Specifies the image's background color",
            "Links an external stylesheet"
        ],
        answer: "Provides alternative text for accessibility"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

const questionElement = document.querySelector("#question");
const optionsElement = document.querySelector("#options");
const nextButton = document.querySelector("#next-btn");
const resultContainer = document.querySelector("#result");
const scoreElement = document.querySelector("#score");

// Function to load the current question
function loadQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        showResult();
        return;
    }

    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    optionsElement.innerHTML = "";
    selectedOption = null;
    nextButton.disabled = true;  //Disable next button initially

    for (const option of currentQuestion.options) {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.onclick = () => selectAnswer(button, option, currentQuestion.answer);
        optionsElement.appendChild(button);
    }
}

// Function to handle answer selection
function selectAnswer(button, selected, correct) {
    if (selectedOption) {
        selectedOption.classList.remove("selected");
    }
    
    selectedOption = button;
    selectedOption.classList.add("selected");
    
    if (selected === correct) {
        score++;
    }

    nextButton.disabled = false;  //Enable next button after selection
}

// Function to display the final result
function showResult() {
    document.querySelector("#quiz-box").classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = `${score} / ${quizData.length}`;
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    document.querySelector("#quiz-box").classList.remove("hidden");
    loadQuestion();
}

// Load the first question when the page loads
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    loadQuestion();
});

loadQuestion();
