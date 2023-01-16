const Question = [
    {
        question: "what comes after 2",
        answer: 3,
        pointGiven: false,
    },
    {
        question: "what is 2*3",
        answer: 6,
        pointGiven: false,
    },
    {
        question: "what comes before 2",
        answer: 1,
        pointGiven: false,
    },
    {
        question: "what is 2 times 3",
        answer: 6,
        pointGiven: false,
    }
]

// warning
let warning = document.querySelector('.warning');
// score;
let currentScore = 0;
let QuestionIndex = 0;

// quesiton display
let questionText = document.querySelector('#question');
questionText.innerHTML = `${Question[QuestionIndex]['question']}`;

// score and question number display
let score = document.querySelector('.score');
let questionNumber = document.querySelector('.questionNumber');
questionNumber.innerText = `${QuestionIndex + 1}/${Question.length}`





// question navigation
let navigationNext = document.querySelector('#next');
let navigationPrev = document.querySelector('#prev');

function next() {
    return function () {
        if (QuestionIndex + 1 === Question.length) {
            addEndQuizButton();
        }
        let answer = document.querySelector('.answerInput').value;
        answer = "";
        if (QuestionIndex != Question.length - 1) {

            warning.innerText = '';
            QuestionIndex++;
        }
        // question number update
        questionNumber.innerText = `${QuestionIndex + 1}/${Question.length}`;
        // question text update
        questionText.innerText = Question[QuestionIndex]['question'];

    };
}

navigationNext.addEventListener('click', next())

navigationPrev.addEventListener('click', function () {
    if (QuestionIndex != 0) {
        warning.innerText = '';

        QuestionIndex--;
    }
    //question nhumber update
    questionNumber.innerText = `${QuestionIndex + 1}/${Question.length}`
    //question text update
    questionText.innerText = Question[QuestionIndex]['question'];
})





// answer accept

let form = document.querySelector('.userInput');
form.addEventListener('submit', function (event) {

    event.preventDefault();
    let answer = document.querySelector('.answerInput').value;
    if (answer == Question[QuestionIndex]['answer'] && Question[QuestionIndex]['pointGiven'] === false) {
        // console.log('correct answer');
        Question[QuestionIndex]['pointGiven'] = true;
        currentScore++;
        score.innerText = `score: ${currentScore}`;

        if (QuestionIndex != Question.length - 1) {

            warning.innerText = '';
            QuestionIndex++;
        }
        // question number update
        questionNumber.innerText = `${QuestionIndex + 1}/${Question.length}`;
        // question text update
        questionText.innerText = Question[QuestionIndex]['question'];

    }
    else if (Question[QuestionIndex]['answer'] == answer) {
        // warning.style.color = rgb(255, 0, 0);
        warning.innerText = 'YOU HAVE ALREADY ANSWERED';
    }
    let attempted = 0;
    Question.forEach(element => {
        if (element.pointGiven === true) {
            attempted++;
        }
    });
    if (attempted === Question.length) {
        addEndQuizButton();
    }
    return next();


})


let endQuiz = document.querySelector('')

function addEndQuizButton() {
    let endQuiz = document.createElement('button');
    endQuiz.classList.add('btn');
    endQuiz.classList.add('endButton');
    endQuiz.innerText = 'end';
    let container = document.querySelector('.container');
    container.appendChild(endQuiz);
}


let endButton = document.querySelector('.endButton');
endButton.addEventListener('click', function () {
    window.location.assign('./end.html');
})
