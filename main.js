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
  GAMETYPE: gameTypes.easy
}


function generateEmpty(){
  const range = (length) => Array.from({length}, (e, i) => i)

  const _ = config.EMPTY_FIELD
  const rows = config.GAMETYPE.size[0]
  const colomns = config.GAMETYPE.size[1]
  return range(rows).map(() => range(colomns).fill(_))
}


function generateMinesField(type) {

}
