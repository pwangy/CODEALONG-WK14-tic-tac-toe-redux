import React from 'react'
import { useDispatch } from 'react-redux'

import { game } from 'reducers/game'
import { Player } from 'components/Player'

// below 'index' refers to index of the square which has been clicked
export const Square = ({ value, index }) => {
  const dispatch = useDispatch()
  // now index will act as the payload to be updated in the store (here: game)
  const handleClick = () => {
    dispatch(game.actions.captureSquare({ index }))
  }
  // the argument 'index' above is shorthand for 'index : index'

  return (
    <button
      className={value === null ? 'square clickable' : 'square'}
      type="button"
      onClick={handleClick}>
      <Player value={value} />
    </button>
  )
}