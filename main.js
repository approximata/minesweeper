"use strict"

const gameTypes = {
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

let config = {
  EMPTY_FIELD: 0,
  MINE_FIELD: 1,
  GAMETYPE: gameTypes.master
}

function isMinePlanted(minesPositions, position){
  return minesPositions.some(minePosition => minePosition[0] === position[0] && minePosition[1] === position[1])
}

function minePlant(){
  const rows = config.GAMETYPE.size[0]
  const columns = config.GAMETYPE.size[1]
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

function generateTable(){
  const rows = config.GAMETYPE.size[0]
  const columns = config.GAMETYPE.size[1]
  const mines = createMines()
  let gameTable = []
  for(let row = 0; row < rows; row++){
    gameTable.push([])
    for(let column = 0; column < columns; column++){
      let fieldType = isMinePlanted(mines, [row, column]) ? 1 : 0
      gameTable[row].push(fieldType)
    }
  }
  return gameTable
}

console.log(generateTable());
