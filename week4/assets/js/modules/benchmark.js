export var yourResult = {
  correctAnswers: score,
  wrongAnswers: 10-score
}

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
      question: "What is the first parameter of element.addEventListener{",
      correct_answer: "Event Type",
      incorrect_answers: [
        "Callback",
        "Caller",
        "None of the above",
      ],
    },
    {
      question: "Inside which HTML element do we put the JavaScript?",
      correct_answer: "<script>",
      incorrect_answers: [
        "<javascript>",
        "<js>",
        "<scripting>",
      ],
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      correct_answer: "The <head> section",
      incorrect_answers: [
        "The <body> section",
        "Both of <body> and <head> are fine",
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
      correct_answer: "while (i <= 10; i++)",
      incorrect_answers: [
        "while (i <= 10)",
        "while i <= 10, i++",
        "while loop i <= 10",
      ],
    },
    {
      question: "How does a FOR loop start?",
      correct_answer: "for (i = 0; i < 5; i++)",
      incorrect_answers: [
        "for (i = 0; i < 5)",
        "for i = 1 to 5",
        "for (i <= 5; i++)",
      ],
    },
    {
      question: "How can you add a comment in a JavaScript?",
      correct_answer: "// This is a comment",
      incorrect_answers: [
        "/* This is a comment",
        "<!-- This is a comment -->",
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
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
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

  var res = [];

  const chooseRandom = (questions, num) => {
    for (let i = 0; i < num+1; ) {
      const random = Math.floor(Math.random() * questions.length);
      if(res.indexOf(questions[random]) !== -1) {
        continue;
      };
      res.push(questions[random]);
      i++;
    }
    return res;
  }
  chooseRandom(questions, 10);

  const questionTitle = document.getElementById("question"); // Titolo domanda
  const questionAnswer = document.getElementById("answers"); // Risposta
  const nxtBtn = document.getElementById("nxtBtn"); // Bottone prossima domanda
  const questionNumber = document.getElementById("question-number"); // Numero domanda attuale
  const questionTotal = document.getElementById("total-questions"); // Numero domande totali -- RIGA 82

  var currentQuestion = 0;
  var score = 0;

  function showQuestion() {
    const currentQ = res[currentQuestion]; // Ottieni la domanda corrente dall'array questions
    questionTitle.innerText = currentQ.question; // Mostra il testo della domanda corrente
    questionAnswer.innerHTML = ""; // Resetta le risposte precedenti
  
    // Crea un pulsante per ogni risposta sbagliata e aggiungilo alla pagina
    currentQ.incorrect_answers.forEach((answer) => {
      const answerBtn = document.createElement("button");
      answerBtn.innerText = answer;
      answerBtn.addEventListener("click", handleWrongAnswer);
      questionAnswer.appendChild(answerBtn);
    });
  
    // Crea il pulsante per la risposta corretta e aggiungilo alla pagina
    const correctAnswerBtn = document.createElement("button");
    correctAnswerBtn.innerText = currentQ.correct_answer;
    correctAnswerBtn.addEventListener("click", handleCorrectAnswer);
    questionAnswer.appendChild(correctAnswerBtn);
    questionNumber.innerText = currentQuestion + 1;
    questionTotal.innerText = res.length;
  }
  
  // Funzione per gestire una risposta corretta
  function handleCorrectAnswer() {
    score++; // Aumenta il punteggio di 1
    showNextQuestion();
  }
  
  // Funzione per gestire una risposta sbagliata
  function handleWrongAnswer() {
    showNextQuestion();
  }
  
  // Funzione per mostrare la prossima domanda
  function showNextQuestion() {
    currentQuestion++; // Incrementa l'indice della domanda corrente
    if (currentQuestion >= res.length) {
      console.log(score);
      window.location.href = '../../../result.html'
    } else {
      showQuestion(); // Altrimenti mostra la prossima domanda
    }
  }
  
  // Aggiungi l'evento "click" al pulsante "nxtBtn"
  nxtBtn.addEventListener("click", showNextQuestion);
  
  // Inizia mostrando la prima domanda
  showQuestion();
