let correct = ""
let yourAns = ""
let score = 0
let currentCard = 0

//ARRAY OF POKEMON OBJECTS
const cards = [
  {
    image: "assets/images/pokemon1.png",
    answers: ['Eevee', 'Vulpix', 'Bulbasaur', 'Deer'],
    correctAnswer: 'Eevee'
  },
  {
    image: "assets/images/pokemon2.png",
    answers: ['Great Ball', 'Master Ball', 'Ultra Ball', 'Super Ball'],
    correctAnswer: 'Master Ball'
  },
  {
    image: "assets/images/pokemon3.png",
    answers: ['Six', 'Seven', 'Eight', 'Five'],
    correctAnswer: 'Eight'
  },
  {
    image: "assets/images/pokemon4.png",
    answers: ['Pokedock', 'Pokefind', 'Pokephone', 'Pokedex'],
    correctAnswer: 'Pokedex'
  },
  {
    image: "assets/images/pokemon5.png",
    answers: ['Poke Mart', 'Pokemon Center', 'Gym', 'Costco'],
    correctAnswer: 'Poke Mart'
  },
  {
    image: "assets/images/pokemon6.png",
    answers: [`Psychic, Fighting and Ghost`, `Dragon, Flying and Normal`, `Electric, Ground, Poison`, `Fire, Water, Grass`],
    correctAnswer: 'Fire, Water, Grass'
  },

  {
    image: "assets/images/pokemon7.png",
    answers: ['Fighting', 'Ghost', 'Fire', 'Dark'],
    correctAnswer: 'Ghost'
  },
  {
    image: "assets/images/pokemon8.png",
    answers: ['Registeel', 'Celebi', 'Keldeo', 'Suicune'],
    correctAnswer: 'Suicune'
  },
  {
    image: "assets/images/pokemon9.png",
    answers: ['Lickitung', 'Nidoking', 'Hitmonchan', 'Slowbroe'],
    correctAnswer: 'Suicune'
  },
  {
    image: "assets/images/pokemon10.png",
    answers: ['Naruto', 'Ash', 'Greg', 'Brock'],
    correctAnswer: 'Ash'
  }
]
//END ARRAY


// DISPLAYS OBJECT INFO ON CARD
const assignCard = () => {
  document.getElementById('pokeImage').src = cards[currentCard.valueOf()].image
  for (let i = 0; i < cards[0].answers.length; i++) {
    document.getElementById(`ans${i + 1}`).innerHTML = cards[currentCard.valueOf()].answers[i].valueOf()
  }
}
assignCard()

//CHECKS YOUR ANSWER AGAINST CORRECT ANSWER
document.addEventListener('click', event => {
  if (event.target.classList.contains("ans")) {
    yourAns = event.target.innerHTML
    if (yourAns === cards[0].correctAnswer.valueOf()) {
      alert("you're right!")
      currentCard++
      score++
      assignCard()
    } else if (yourAns !== cards[0].correctAnswer.valueOf()) {
      alert('nope!')
      currentCard++
      assignCard()
    }
  }

})

