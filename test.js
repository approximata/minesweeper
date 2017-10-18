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


// function calculateMinesPositionsIndicators(minesPositions){
//   const steps = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [0, -1], [1, 1], [1, 0], [1, -1]]
//   let minesIndicatorsPositions = []
//   minesPositions.forEach(minePosition => steps.forEach(step =>
//     minesIndicatorsPositions.push([minePosition[0]+step[0],minePosition[1]+step[1]])))
//   return minesIndicatorsPositions
// }

function createStepsAround() {
  const stepsAround = []
  for(let i = -1; i <= 1; i++){
    for(let j = -1; j <= 1; j++){
      if(i !== 0 || j !== 0){
        stepsAround.push([i,j])
      }
    }
  }
  return stepsAround
}

function createMinesIndicators(minesPositions) {
  const minesIndicatorsPositions = []
  const stepsAround = createStepsAround()

  minesPositions.forEach(minePosition =>
    stepsAround.forEach(step =>
        {
          if(minePosition[0] + step[0] >= 0 && minePosition[1] + step[1] >= 0)
            {
              minesIndicatorsPositions.push([minePosition[0] + step[0], minePosition[1] + step[1]])
            }
        }
      ))
  return minesIndicatorsPositions
}


console.log(createMinesIndicators([[0,0], [5,6]]))

// const steps = []
// for(let i = -1; i <= 1; i++){
//   for(let j = -1; j <= 1; j++){
//     if(i !== 0 || j !== 0){
//       steps.push([i,j])
//     }
//   }
// }
//
// console.log(steps);
