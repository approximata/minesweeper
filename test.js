let config = {
  X_TOKEN: 'X',
  O_TOKEN: 'O',
  EMPTY_TOKEN: '.',
  GAME_SIZE: 3
}

// const range = (length) => Array.from({length}, (e, i) => i)
// console.log(range(4));
//
// function generateEmptyGame() {
//   const _ = config.EMPTY_TOKEN
//   const SIZE = config.GAME_SIZE
//   return range(SIZE).map(() => range(SIZE).fill(_))
// }

// console.log(generateEmptyGame())


function checkElementIsUnique(minesPlaces, newPlace) {
  return !minesPlaces.some(minePlace => minePlace[0] === newPlace[0] && minePlace[1] === newPlace[1])
}


// const minesPlaces = [[1,2],[3,4],[4,5]]
const minesPlaces = []


const newPLace1 = [3,4]

console.log(checkElementIsUnique(minesPlaces, newPLace1))
