'use strict'

export default function renderGame(gameRoot, gameState) {
  const mainTable = document.createElement('div')
  mainTable.className = 'main-table'
  gameState.forEach(row => renderRow(mainTable, row))
  gameRoot.appendChild(mainTable)
}

function renderRow(mainTable, row) {
  const tableRow = document.createElement('div')
  tableRow.className = 'row'
  row.forEach(cell => renderCells(tableRow, cell))
  mainTable.appendChild(tableRow)
}

function renderCells(tableRow, cell) {
  const tableCell = document.createElement('div')
  tableCell.className = 'cell ' + cell
  tableRow.appendChild(tableCell)
}
