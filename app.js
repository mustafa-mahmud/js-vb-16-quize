'use strict';

const quize = document.getElementById('quiz');
const questionEl = document.querySelector('#question');
const answersEl = document.querySelectorAll('.answer');
const questionA = document.getElementById('a_text');
const questionB = document.getElementById('b_text');
const questionC = document.getElementById('c_text');
const questionD = document.getElementById('d_text');
const submit = document.getElementById('submit');

const quizeData = [
  {
    question: 'Which is the best browser language?',
    a: 'Javascript',
    b: 'Python',
    c: 'Php',
    d: 'C',
    correct: 'a',
  },
  {
    question: 'Which is the best server language?',
    a: 'Javascript',
    b: 'Python',
    c: 'Php',
    d: 'C',
    correct: 'c',
  },
  {
    question: 'Which is the best data stracture language?',
    a: 'Javascript',
    b: 'Python',
    c: 'Php',
    d: 'C',
    correct: 'b',
  },
  {
    question: 'Which is the mother of programming  language?',
    a: 'Javascript',
    b: 'Python',
    c: 'Php',
    d: 'C',
    correct: 'd',
  },
  {
    question: 'Javascript made in?',
    a: 1993,
    b: 1995,
    c: 1994,
    d: 1990,
    correct: 'b',
  },
  {
    question: 'Javascript creator?',
    a: 'Doglus Crokod',
    b: 'Alex Brendan',
    c: 'Brendan Eich',
    d: 'John Doe',
    correct: 'c',
  },
];

let currentIndex = 0;
let score = 0;

function loadQuize() {
  const data = quizeData[currentIndex];

  answersEl.forEach((el) => {
    el.checked = false;
  });

  questionEl.textContent = data.question;
  questionA.textContent = data.a;
  questionB.textContent = data.b;
  questionC.textContent = data.c;
  questionD.textContent = data.d;
}

loadQuize();

function getAnswer() {
  let checked;
  answersEl.forEach((el) => {
    if (el.checked) checked = el.id;
  });

  return checked;
}

function calcQuiz() {
  const userAnswer = getAnswer();

  if (!userAnswer) return;

  if (userAnswer === quizeData[currentIndex].correct) {
    score++;
  }

  if (currentIndex >= quizeData.length - 1) {
    quize.innerHTML = `
		<h2>You got ${score}/${quizeData.length}</h2>
		<button onclick="location.reload()">Reload</button>
		`;
    return;
  }

  currentIndex++;
  loadQuize();
}

submit.addEventListener('click', calcQuiz);
