'use strict'

export const gameTypes = {
  easy: {
    size: [9, 9],
    mines: 10
  },
  medium: {
    size: [16, 16],
    mines: 40
  },
  master: {
    size: [30, 16],
    mines: 40
  }
}

export let config = {
  HIDDEN_FIELD: 'H',
  GAMETYPE: gameTypes.master
}

function isMinePlanted(minesPositions, currentPosition) {
  return minesPositions.some(minePosition => minePosition[0] === currentPosition[0] && minePosition[1] === currentPosition[1])
}

function minePlant() {
  const rows = config.GAMETYPE.size[1]
  const columns = config.GAMETYPE.size[0]
  return [Math.floor((Math.random() * rows) + 1), Math.floor((Math.random() * columns) + 1)]
}

function createMines() {
  let minesPositions = []
  let minePosition = []
  const mines = config.GAMETYPE.mines
  for(let i = 0; i < mines; i++) {
    minePosition = minePlant()
    while(isMinePlanted(minesPositions, minePosition)){
      minePosition = minePlant()
    }
    minesPositions.push(minePosition)
  }
  return minesPositions
}

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

function calculatePositionIndicatorValue(currentPosition, minesIndicatorsPositions){
  let indicatorValue = 0
  minesIndicatorsPositions.forEach(position =>
    {
      if (position[0] === currentPosition[0] && position[1] === currentPosition[1]){
        indicatorValue++
      }
    }
  )
  return indicatorValue
}

export function generateEmptyGame(){
  const range = (length) => Array.from({length}, (e, i) => i)
  const _ = config.HIDDEN_FIELD
  const rows = config.GAMETYPE.size[1]
  const colomns = config.GAMETYPE.size[0]
  return range(rows).map(() => range(colomns).fill(_))
}

export function generateGameTable(){
  const rows = config.GAMETYPE.size[1]
  const columns = config.GAMETYPE.size[0]
  const mines = createMines()
  const minesIndicatorsPositions = createMinesIndicators(mines)
  let fieldType = 0
  let gameTable = []
  for(let row = 0; row < rows; row++){
    gameTable.push([])
    for(let column = 0; column < columns; column++){
      if(isMinePlanted(mines, [row, column])){
        fieldType = 'x'
      }
      else{
        fieldType = calculatePositionIndicatorValue([row, column], minesIndicatorsPositions)
      }
      gameTable[row].push(fieldType)
    }
  }
  return gameTable
}
