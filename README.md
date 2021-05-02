# quizApp
This is a quiz app made with HTML, CSS, and JS

This project made a quiz game which can be loaded with questions made up or imported. Future improvements would be setting it up with an API to be loaded with questions dynamically.

This project helped me to better practice and understand the following:
1) Working with arrays and objects
2) DOM manipulation
3) Creating & implementing functions


A general walkthrough of the JavaScript is below:

First an array of objects containing the questions, answer choices, and correct answer were created. Five questions were initially created. Better practice would be to pull the questions from a db. Something for later.. 
```JavaScript
const quizData = [
    {
        question: 'Who was the legendary Benedictine monk who invented champagne?',
        a: 'Lord Banshee',
        b: 'Saint Valentine',
        c: 'Lucifer',
        d: 'Dom Perignon',
        correct: 'd'
    },
```

Create the element tags.
```JavaScript
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
```

Create the loadQuiz function.
```JavaScript
let currentQuiz = 0;
loadQuiz();
function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuestion++;
}
```

At this point the quiz should load up the question and answers from the array object. Create an event listener for the submit button.
```JavaScript
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(){
    currentQuiz++;
    loadQuiz();
})
```

Create the getSelected function.
```JavaScript
function getSelected(){
    const answerEls = document.querySelectorAll('.answer');
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        // console.log(answer.checked);
        if(answerEl.checked){
           answer = answerEl.id;
        }
    });
    return answer;
};
```

Create the deselectAnswers function.
```JavaScript
function deselectAnswers(){
    answerEls.forEach((answerEl) => {
       answerEl.checked = false;
    });
}
```

Add in additional parameters and functionality, including a reload button.
```JavaScript
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
```

***End walkthrough
