var correctA = 0;
var wrongA = 0;

if (localStorage.getItem('score')) {
  correctA = localStorage.getItem('score');
  wrongA = 10 - correctA;
}

const correctPercentage = (correctA / 10) * 100;
const wrongPercentage = (wrongA / 10) * 100;

const percentualeGiuste = document.getElementById('percentualeGiuste');
const domandeCorrette = document.getElementById('domandeCorrette');
percentualeGiuste.textContent = `${correctPercentage}`;
domandeCorrette.textContent = `${correctA}/10 `;

const percentualeSbagliate = document.getElementById('percentualeSbagliate');
const domandeSbagliate = document.getElementById('domandeSbagliate');
percentualeSbagliate.textContent = `${wrongPercentage}`;
domandeSbagliate.textContent = `${wrongA}/10 `;

const Grafico = document.getElementById('grafico');
const esito = document.getElementById('esito');

const options = {
  responsive: true,
  maintainAspectRatio: false,
  width: 250,
  outerWidth: 300,
  outerHeight: 250,
  plugins: {
    legend: {
      display: false,
    }
  },
  cutout: '70%',
};


const chartData = {
  labels: ['Wrong', 'Correct'],
  datasets: [
    {
      borderWidth: 1,
      data: [wrongA, correctA],
      backgroundColor: ['#d20094','#00ffff'],
      borderColor: ['#d20094', '#00ffff'],
      hoverOffset: -3,
    }
  ]
};

const myChart = new Chart(Grafico, {
  type: 'doughnut',
  data: chartData,
  options: options,
});

var giudizio = function() {
  if (correctA > 5 ) {
    return "Congratulations!<br><span id='congrats'>You passed the exam!</span> <br> <span class='little'>We'll send you the certificate in few minutes. <br> Check your email (including promotions / spam folder)<span>"
  } else {
    return "Oh no!<br><span id='ohNo'>You have not passed the exam.</span> <br> <span class='little'>It will be better next time!</span>"
  }
}

esito.innerHTML = giudizio();