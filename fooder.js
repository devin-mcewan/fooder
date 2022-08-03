console.log('initial commit');

const foods = ['asparagus', 'artichoke', 'cheese', 'cupcakes', 'honey', 'hot dogs'];
const sensoryVerbs = ['looks', 'feels', 'smells', 'tastes'];
const adjectives = ['bad', 'empty', 'air', '', 'colorful', 'dark', 'dull', 'filthy', 'pungent', 'magnificent', 'nasty', 'crusty', 'artificial', 'frigid', 'horizontal', 'safe', 'available', 'ilicit', 'spiritual'];

const randomInteger = (arr) => {
    let random = Math.floor(Math.random() * arr.length);
    return random;
}

let randomFoodIndex = randomInteger(foods);
let randomSensoryVerbIndex = randomInteger(sensoryVerbs);
let randomAdjectiveIndex= randomInteger(adjectives);

console.log(`${foods[randomFoodIndex]} ${sensoryVerbs[randomSensoryVerbIndex]} ${adjectives[randomAdjectiveIndex]}`);

export default test = () => 'hello world'