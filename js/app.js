let correct = ""
let yourAns = ""

//ARRAY OF POKEMON OBJECTS
const cards = [
{
  num: 1,
  image: "assets/images/pokemon1.png",
  answers: ['Raichu', 'Charmander', 'Bulbasaur', 'Unicorn'],
 correctAnswer: 'Raichu'
},
{
  num: 2,
  image:"assets/images/pokemon2.png",
  answers: ['Great Ball', 'Master Ball', 'Ultra Ball', 'Super Ball'],
  correctAnswer: 'Master Ball'
},
{
  num: 3,
  image: "assets/images/pokemon3.png",
  answers: ['Six', 'Seven', 'Eight', 'Five'],
  correctAnswer: 'Eight'
},
{
  num: 4,
  image:"assets/images/pokemon4.png",
  answers: ['Pokedock','Pokefind','Pokephone', 'Pokedex'],
  correctAnswer: 'Pokedex'
},
{
  num: 5,
  image: "assets/images/pokemon5.png",
  answers: ['Poke Mart', 'Pokemon Center', 'Gym', 'Costco'],
  correctAnswer: 'Poke Mart'
},
{
  num: 6,
  image: "assets/images/pokemon6.png",
  answers: [`Psychic, Fighting and Ghost`, `Dragon, Flying and Normal`, `Electric, Ground, Poison`, `Fire, Water, Grass`],
  correctAnswer: 'Fire, Water, Grass'
},

{
  num: 7,
  image: "assets/images/pokemon7.png",
  answers: ['Fighting', 'Ghost', 'Fire', 'Dark'],
  correctAnswer: 'Ghost'
},
{
  num: 8,
  image: "assets/images/pokemon8.png",
  answers: ['Registeel', 'Celebi', 'Keldeo', 'Suicune'],
  correctAnswer: 'Suicune'
},
{
  num: 9,
  image: "assets/images/pokemon9.png",
  answers: ['Lickitung', 'Nidoking', 'Hitmonchan', 'Slowbroe'],
  correctAnswer: 'Suicune'
},
{
  num: 10,
  image: "assets/images/pokemon10.png",
  answers: ['Naruto', 'Ash', 'Greg', 'Brock'],
  correctAnswer: 'Ash'
}
]
//END ARRAY


document.addEventListener('click', function(event){
  if(event.target.id === "ans"){
yourAns = document.getElementById(event.target.).innerHTML

})

// for(let i = 0; i< cards.length; i++){
// console.log(cards)
// }