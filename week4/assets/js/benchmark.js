const questions = [
  {
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    question: "Is Javascript case sensitive?",
    correct_answer: "Yes",
    incorrect_answers: [
      "No",
      "Only in function names",
      "Only in function and variable names",
    ],
  },
  {
    question: "What is the first parameter of element.addEventListener",
    correct_answer: "Event Type",
    incorrect_answers: ["Callback", "Caller", "None of the above"],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    correct_answer: "&ltscript&gt",
    incorrect_answers: ["&ltjavascript&gt", "&ltjs&gt", "&ltscripting&gt"],
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    correct_answer: "The &lthead&gt section",
    incorrect_answers: [
      "The &ltbody&gt section",
      "Both of &ltbody&gt and &lthead&gt are fine",
    ],
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    correct_answer: "alert('Hello World')",
    incorrect_answers: [
      "msg('Hello World')",
      "alertBox('Hello World')",
      "msgBox('Hello World')",
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    correct_answer: "function = myFunction()",
    incorrect_answers: [
      "function : myFunction()",
      "function myFunction()",
      "function is like myFunction",
    ],
  },
  {
    question: "How do you call a function named 'myFunction'?",
    correct_answer: "myFunction() ",
    incorrect_answers: [
      "call myFunction()",
      "call function myFunction",
      "myFunction(call)",
    ],
  },
  {
    question: "How does a WHILE loop start?",
    correct_answer: "while (i &lt= 10; i++)",
    incorrect_answers: [
      "while (i &lt= 10)",
      "while i &lt= 10, i++",
      "while loop i &lt= 10",
    ],
  },
  {
    question: "How does a FOR loop start?",
    correct_answer: "for (i = 0; i &lt 5; i++)",
    incorrect_answers: [
      "for (i = 0; i &lt 5)",
      "for i = 1 to 5",
      "for (i &lt= 5; i++)",
    ],
  },
  {
    question: "How can you add a comment in a JavaScript?",
    correct_answer: "// This is a comment",
    incorrect_answers: [
      "/* This is a comment",
      "&lt!-- This is a comment --&gt",
      "...This is a comment...",
    ],
  },
  {
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const questionTitle = document.getElementById("question"); // Titolo domanda
const questionAnswer = document.getElementById("answers"); // Risposta
const nxtBtn = document.getElementById("nxtBtn"); // Bottone prossima domanda
const questionNumber = document.getElementById("question-number"); // Numero domanda attuale
const questionTotal = document.getElementById("total-questions"); // Numero domande totali
const timer = document.getElementById("timeLeft");
const timerCircle = document.querySelector("svg > circle + circle");
var answerBtns = [];
const res = [];
var allAnswers = [];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timerInterval = null;

//estrazione domande
const chooseRandom = () => {
  for (let i = 0; i < 10; ) {
    const random = Math.floor(Math.random() * questions.length);
    if (!res.includes(questions[random])) {
      res.push(questions[random]);
      i++;
    }
  }
  return res;
};

//composizione + far comparire domanda
function showQuestion() {
  questionAnswer.innerHTML = "";
  nxtBtn.setAttribute('disabled', 'true');
  answerBtns = [];
  currentQ = res[currentQuestion]; // Ottieni la domanda corrente dall'array questions
  questionTitle.innerText = currentQ.question; // Mostra il testo della domanda corrente
  allAnswers = currentQ.incorrect_answers.concat(currentQ.correct_answer); //array delle risposte alla domanda attuale
  allAnswers.sort(() => Math.random() - 0.5);
  // Creo un input per ogni risposta e aggiungo alla pagina
  allAnswers.forEach((answer) => {
    const answerBtn = document.createElement("input");
    answerBtn.type = "radio";
    answerBtn.name = "answers";
    answerBtn.id = answer;
    if (answer === currentQ.correct_answer) {
      answerBtn.value = 1;
    } else {
      answerBtn.value = 0;
    }
    const answerText = document.createElement("label");
    answerText.classList.add('risposte');
    answerText.htmlFor = answerBtn.id;
    answerText.innerHTML = answer;
    questionAnswer.appendChild(answerBtn);
    questionAnswer.appendChild(answerText);
    answerBtns.push(answerBtn);
  });
  questionNumber.innerText = currentQuestion + 1;
  answerBtns.forEach((btn) => {
    btn.addEventListener("change", () => {
      nxtBtn.removeAttribute('disabled');
      nxtBtn.addEventListener("click", next);
    });
  });
  setNextBtnText();
  clearInterval(timerInterval); // elimina il timer precedente
  runTimer(); // avvia il timer per la nuova domanda
}

const next = function () {
  const selectedAnswer = answerBtns.find((btn) => btn.checked);
  if (selectedAnswer && parseInt(selectedAnswer.value) === 1) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion >= res.length) {
    localStorage.setItem("score", score);
    window.location.href = "../../result.html";
  } else {
    showQuestion();
  }
};

//cambio testo del button durante l'ultima domanda
function setNextBtnText() {
  if (currentQuestion === res.length - 1) {
    nxtBtn.value = "SHOW RESULTS";
    nxtBtn.innerText = "SHOW RESULTS";
  } else {
    nxtBtn.value = "NEXT QUESTION";
    nxtBtn.innerText = "NEXT QUESTION";
  }
}

window.addEventListener("load", function () {
  chooseRandom();
  showQuestion();
  setNextBtnText();
});

//* Funzione per eseguire il timer
function runTimer() {
  timerCircle.classList.add("animatable");
  timerCircle.style.strokeDashoffset = 1;

  timeLeft = 30;
  timerInterval = null;

  timerInterval = setInterval(function () {
    if (timeLeft > -1) {
      let timeRemaining = 0;
      timeRemaining = timeLeft--;
      const normalizedTime = (timeRemaining - 30) / 30;
      // const normalizedTime = (30 - timeRemaining) / 30; ---> Senso antiorario
      timerCircle.style.strokeDashoffset = normalizedTime;
      timer.innerHTML = timeRemaining;
    } else {
      // Passa automaticamente alla prossima domanda quando il timer raggiunge lo 0
      next();
    }
  }, 1000);
}
