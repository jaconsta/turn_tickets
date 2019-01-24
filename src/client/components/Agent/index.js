import React from 'react'

import AddOneButton from './AddOneButton'

class Assistant extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <AddOneButton style={this.props.elementStyle}/>
      </div>
    )
  }
}

export default Assistant
