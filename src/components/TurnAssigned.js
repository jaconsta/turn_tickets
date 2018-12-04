import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TurnAssigned extends Component {
  static propTypes = {
    turnNumber: PropTypes.number
  }
  
  render() {
    const { turnNumber } = this.props
    if (turnNumber === null) return null
    const turnContainerStyle = {
      textAlign: 'center'
    }
    const turnNumberStyle = {
      fontSize: '8em'
    }

    return (
      <div style={turnContainerStyle}>
        <div style={turnNumberStyle}>{turnNumber}</div>
        <div>My turn is</div>
      </div>
    )
  }
}

export default TurnAssigned
