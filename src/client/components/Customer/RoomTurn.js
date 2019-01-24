import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

import {separateTurn} from '../../services/sockets'

class RoomTurn extends Component {
  bookTurn = () => {
    separateTurn()
  }

  render () {
    if (this.props.turnNumber) return null

    return (
      <div>
        <Button variant="contained" color="secondary" onClick={this.bookTurn}>
          Get a new Turn
        </Button>
      </div>
    )
  }
}

RoomTurn.propTypes = {
  turnNumber: PropTypes.number
}

export default RoomTurn
