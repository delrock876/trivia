let correct = ""
let yourAns = ""
let score = 0
let currentCard = 0


//ARRAY OF POKEMON OBJECTS
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
//END ARRAY


// DISPLAY OBJECT INFO ON CARD FUNCTION
const assignCard =()=> {

  if(currentCard < 10){

    //displays image
  document.getElementById('pokeImage').src = cards[currentCard].image
  
//displays answers on buttons
  for (let i = 0; i < cards[currentCard].answers.length; i++) {
    document.getElementById(`ans${i + 1}`).innerHTML = cards[currentCard].answers[i]
  }
}else {
  alert('you ded')
  reset()
}
}
//END FUNCTION

//RESET FUNCTION
const reset = () => {
  currentCard = 0
  yourAns = ""
  score = 0
  correct = ""
  assignCard()
}

//CHECKS YOUR ANSWER AGAINST CORRECT ANSWER
document.addEventListener('click', event => {
  
  if (event.target.classList.contains("ans")) {
    yourAns = event.target.innerHTML

    if (yourAns === cards[currentCard].correctAnswer) {
      alert("you're right!")
      console.log(currentCard++)
      assignCard()
      score++
    } else if (yourAns !== cards[currentCard].correctAnswer) {
      alert('nope!')
      console.log(currentCard++)
      assignCard()
    }
  }

})

window.onload = assignCard()