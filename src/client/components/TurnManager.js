import React from 'react'

import Counter from './Counter'

class TurnManager extends React.Component {
  render () {
    const { Component, ...props } = this.props
    if (Component === null) return null

    const elementStyle = {
      maxWidth: '60%'
    }

    return (
      <div>
       <Component elementStyle={elementStyle} {...props} />
       <Counter style={elementStyle}/>
      </div>
    )
  }
}

export default TurnManager
