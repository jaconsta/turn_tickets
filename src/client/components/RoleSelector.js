import React from 'react'
import Button from '@material-ui/core/Button'

const RoleSelector = props => {
  const roleSelected = role => () => props.roleSelected(role)

  if (props.role !== null) return null

  return (
    <div>
      <h2>Which is your role?</h2>
      <Button variant="contained" color="primary" onClick={roleSelected('customer')} >
        Client
      </Button>
      <Button variant="contained" color="secondary" onClick={roleSelected('assistant')}>
        Agent
      </Button>
    </div>
  )
}

export default RoleSelector
