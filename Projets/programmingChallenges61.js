// 1: New Insults
let randomBodyParts = [

    'Brain',
    'Heart',
    'Lungs',
    'Eyes',
    'Ears',
    'Mouth',
    'Skin',
    'Liver',
    'Kidneys',
    'Stomach'
];
let randomAdjectives =[
    'Stupid',
    'Ugly',
    'Lazy',
    'Coward',
    'Liar',
    'Idiot',
    'Ignorant',
    'Rude',
    'Selfish',
    'Arrogant'
];
let randomWords = [
    'Nebula',
    'Cactus',
    'Banjo',
    'Space',
    'Helicopter',
    'Coffee',
    'Bicycle',
    'Whisper',
    'Snowflake',
    'Pineapple'
];

let randomAnimals = [
    'Dog',
    'Cat',
    'Elephant',
    'Lion',
    'Tiger',
    'Monkey',
    'Giraffe',
    'Zebra',
    'Kangaroo',
    'Penguin'
  ];

  let randomAnimalBodyParts = [
    'Tail',
    'Whiskers',
    'Trunk',
    'Claws',
    'Mane',
    'Fur',
    'Beak',
    'Wings',
    'Ears',
    'Nose'
  ];

let randomBodyPart = randomBodyParts [Math.floor(Math.random()*10)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 10)];
let randomWord = randomWords[Math.floor(Math.random() * 10)];
let randomAnimal = randomAnimals[Math.floor(Math.random() * 10)];
let randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * 10)];

// 2: More Sophisticated Insults
let randomInsult =  `Your ${randomBodyPart} is more ${randomAdjective} than a ${randomAnimal}'s ${randomAnimalBodyPart}.`;

console.log(randomInsult);

//3: Use + or join?

//4: Joining Numbers
/* 
let numbers = [3, 2, 1];
let joinedNumbers = numbers.join(' is bigger than ');
console.log(joinedNumbers); 
*/