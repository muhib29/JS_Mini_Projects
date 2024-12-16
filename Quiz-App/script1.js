const questions = [
    {
        question: "What is the capital city of France?",
        answers: [
            {text: "Paris", correct : true},
            {text: "Berlin", correct : false},
            {text: "NewYork", correct : false},
            {text: "London", correct : false}
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Whale", correct : true},
            {text: "Gorilla", correct : false},
            {text: "Lion", correct : false},
            {text: "Elephant", correct : false}
        ]
    },
    {
        question: "Who is the CEO of Tesla?",
        answers: [
            {text: "Elon Musk", correct : true},
            {text: "Jeff Bezos", correct : false},
            {text: "Mark Zuckerberg", correct : false},
            {text: "Bill Gates", correct : false}
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            {text: "Vatican City", correct : true},
            {text: "Monaco", correct : false},
            {text: "San Marino", correct : false},
            {text: "Liechtenstein", correct : false}
        ],  
    }
];
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

function startQuiz (){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML = "Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber =  currentQuestionIndex + 1;
    // questionElement.textContent = questionNumber+ ". " + currentQuestion.question;
    questionElement.textContent =  questionNumber + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answers =>{
        let button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn")
        answerButtonsElement.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click" ,(selectAnswer))

    })
    
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtonsElement.firstChild)
        {answerButtonsElement.removeChild(answerButtonsElement.firstChild)}
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtonsElement.children).forEach(button =>{
           if(button.dataset.correct === "true"){
            button.classList.add("correct")
           }
           button.disabled = "true"
    })
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML =  `You scored ${score} out of ${questions.length}!`
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz()
    }
})

startQuiz()