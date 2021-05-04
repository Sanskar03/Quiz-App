const quizData = [
    {
        question:"Which one of the following is an ternary operator:",
        a:"?",
        b:":",
        c:"-",
        d:"+",
        correct:"a"
    },
    {
        question:"Which is the most used programming language in 2021. ",
        a:"Java",
        b:"Python",
        c:"C",
        d:"Javascript",
        correct:"d"
    },
    {
        question:" Which type of JavaScript language is",
        a:"Object-Oriented",
        b:"Object-Based",
        c:"Assembly-language",
        d:"High-level",
        correct:"b"
    },
    {
        question:"The \"function\" and \"var\" are known as:",
        a:"Keywords",
        b:"Data types",
        c:"Declaration statements",
        d:"Prototypes",
        correct:"c"
    },
    {
        question:"Which of the following variables takes precedence over the others if the names are the same?",
        a:"Global variable",
        b:"The local element",
        c:"The two of the above",
        d:"None of the above",
        correct:"b"
    }
]

const answerEls = document.querySelectorAll(".answer");
const quizScore = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const aEl = document.getElementById("a_text");
const bEl = document.getElementById("b_text");
const cEl = document.getElementById("c_text");
const dEl = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQueNo = 0;
let score = 0;

loadQuiz();

function loadQuiz()
{
    deSelectAnswers();
    const currentQuestion = quizData[currentQueNo];

    questionEl.innerText = currentQuestion.question;
    aEl.innerText = currentQuestion.a;
    bEl.innerText = currentQuestion.b;
    cEl.innerText = currentQuestion.c;
    dEl.innerText = currentQuestion.d;
}

function getSelected()
{
    let answer=undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deSelectAnswers()
{
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click" , () => {

    const answer = getSelected();

    if(answer)
    {
        if(answer===quizData[currentQueNo].correct)
        {
            score++;
        }

        currentQueNo++;

        if(currentQueNo<quizData.length)
        {
            loadQuiz();
        }
        else
        {
            quizScore.innerHTML = '<h2> Your Score : '+score+'/'+quizData.length+'</h2> <button onclick="location.reload()">Reload</button>';
            console.log(score);
        }
    }
});