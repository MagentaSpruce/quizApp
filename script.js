'use strict';


const quizData = [
    {
        question: 'Who was the legendary Benedictine monk who invented champagne?',
        a: 'Lord Banshee',
        b: 'Saint Valentine',
        c: 'Lucifer',
        d: 'Dom Perignon',
        correct: 'd'
    },
    {
        question: 'Where would you find the Sea of Tranquility?',
        a: 'Nigeria',
        b: 'Your mother',
        c: 'The Moon',
        d: 'Central Michigan',
        correct: 'c'
    },
    {
        question: 'What kind of weapon is a falchion?',
        a: 'Sword',
        b: 'Num-Chuks',
        c: 'Halberd',
        d: 'pike',
        correct: 'a'
    },
    {
        question: 'What color is a Himalayan poppy?',
        a: 'Did you say poppy?',
        b: 'Babylon Blue',
        c: 'Blue',
        d: 'Pink with it?',
        correct: 'c'
    },
    {
        question: 'Who else, besides Floyd Mayweather, is the only boxer to retire undefeated?',
        a: 'Muhammaed Ali',
        b: 'Rocky Marciano',
        c: 'Marvin Hagler',
        d: 'George Foreman',
        correct: 'b'
    }
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');



let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

};

function getSelected(){
    
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        // console.log(answer.checked);
        if(answerEl.checked){
           answer = answerEl.id;
        }
    });
    return answer;
};

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
       answerEl.checked = false;
    });
}


submitBtn.addEventListener('click', function(){
    //check to see answer
    const answer = getSelected();
    if(answer)
        {
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
            currentQuiz++;
            if(currentQuiz < quizData.length){
                loadQuiz();
            } else{
                quiz.innerHTML = `<h2> You answered correctly ${score} out of ${quizData.length} questions! 👨‍💻</h2> <button onClick="location.reload()">Reload</button>`
            }
        }
});

