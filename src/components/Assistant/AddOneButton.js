import React, {Component} from 'react'
import Button from '@material-ui/core/Button'

import {incrementCounter} from '../../services/sockets'

class AddOneButton extends Component {
  addOne = () => {
    incrementCounter()
  }

  render () {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.addOne}>
          Next turn
        </Button>
      </div>
    )
  }
}

export default AddOneButton
