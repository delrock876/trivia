let yourAns = ""
let score = 0
let currentCard = 0
let currentGif = 0
let sound = new Audio(`assets/sound.mp3`)


//Array of pokemon object
const cards = [
  {
    image: "assets/images/pokemon0.png",
    answers: ['Eevee', 'Vulpix', 'Bulbasaur', 'Deer'],
    correctAnswer: 'Eevee'
  },
  {
    image: "assets/images/pokemon1.png",
    answers: ['Charizard', 'Torchic', 'Charmander', 'Fire Lizard'],
    correctAnswer: 'Charmander'
  },
  {
    image: "assets/images/pokemon2.png",
    answers: ['Advanced Fire Lizard', 'Flareon', 'Entei', 'Charizard'],
    correctAnswer: 'Charizard'
  },
  {
    image: "assets/images/pokemon3.png",
    answers: ['Mew', 'Mewtwo', 'Meowth', 'Meowie'],
    correctAnswer: 'Mewtwo'
  },
  {
    image: "assets/images/pokemon4.png",
    answers: ['Psychic', 'Golduck', 'Psyduck', 'Slowpoke'],
    correctAnswer: 'Psyduck'
  },
  {
    image: "assets/images/pokemon5.png",
    answers: [`Jigglypuff`, `Snorlax`, `Snorbro`, `Munchlax`],
    correctAnswer: 'Snorlax'
  },

  {
    image: "assets/images/pokemon6.png",
    answers: ['Lapras', 'JigglyPuff', 'Chansey', 'Clefable'],
    correctAnswer: 'JigglyPuff'
  },
  {
    image: "assets/images/pokemon7.png",
    answers: ['Arbok', 'Seviper', 'Dragonair', 'Ekans'],
    correctAnswer: 'Ekans'
  },
  {
    image: "assets/images/pokemon8.png",
    answers: ['Gloom', 'Oddish', 'Bellsprout', 'Muk'],
    correctAnswer: 'Gloom'
  },
  {
    image: "assets/images/pokemon9.png",
    answers: ['Kadabra', 'Slowpoke', 'Abra', 'Machop'],
    correctAnswer: 'Abra'
  }
]

//Object of gifs
const gifs = {
  correctGifs: ['assets/gifs/right1.gif', 'assets/gifs/right2.gif', 'assets/gifs/right3.gif', 'assets/gifs/right4.gif', 'assets/gifs/right5.gif'],
  wrongGifs: ["assets/gifs/wrong1.gif", "assets/gifs/wrong2.gif", "assets/gifs/wrong3.gif", "assets/gifs/wrong4.gif", "assets/gifs/wrong5.gif"]
}


const rightGif = () => {
  if (currentGif < 5) {
    document.getElementById("pokeModal").src = gifs.correctGifs[currentGif]
    document.getElementById('rightwrong').innerHTML = `Correct!`
    currentGif++
  } else {
    currentGif = 0
  }
}
const wrongGif = () => {
  if (currentGif < 5) {
    document.getElementById("pokeModal").src = gifs.wrongGifs[currentGif]
    document.getElementById('rightwrong').innerHTML = `Wrong!`
    currentGif++
  } else {
    currentGif = 0
  }
}

//Display Modal if Correct
const displayCorrect = () => {
  rightGif()
  $(".modal").modal()
  setTimeout(function () {
    assignCard()
    $(".modal").modal("hide")
  }, 2000);
}
//Display modal if incorrect
const displayWrong = () => {
  wrongGif()
  $(".modal").modal()
  setTimeout(function () {
    assignCard()
    $(".modal").modal("hide")
  }, 2000);
}


// Displays object info on cards
const assignCard = _ => {
  if (currentCard < 10) {
    //displays image
    document.getElementById('pokeImage').src = cards[currentCard].image

    //displays answers on buttons
    for (let i = 0; i < cards[currentCard].answers.length; i++) {
      document.getElementById(`ans${i + 1}`).innerHTML = cards[currentCard].answers[i]
    }
  } else {
    alert('Thanks for playing')
    reset()
  }
}

window.onload = assignCard()

//Resets game
const reset = () => {
  sound.play()
  currentCard = 0
  yourAns = ""
  score = 0
  correct = ""
  currentGif = 0
  assignCard()
}

//Checks your answer against correct answer and displays corresponding gif ,
document.addEventListener('click', event => {

  if (event.target.classList.contains("ans")) {
    yourAns = event.target.innerHTML

    if (yourAns === cards[currentCard].correctAnswer) {
      displayCorrect()
      currentCard++
      score++
    } else if (yourAns !== cards[currentCard].correctAnswer) {
      displayWrong()
      currentCard++
    }
  }
})
