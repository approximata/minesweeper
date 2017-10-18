'use strict'

import renderGame from './render.js'
import {generateEmptyGame, generateGameTable} from './game.js'

const gameRoot = document.querySelector('.game-root')

const gameState = generateGameTable()

renderGame(gameRoot, gameState)
