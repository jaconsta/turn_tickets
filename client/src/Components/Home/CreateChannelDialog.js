import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const CreateChannelDialog = props => {
  const [isOptionsOpen, setOptionsOpen] = useState(false)

  const toggleOptionsOpen = () => setOptionsOpen(!isOptionsOpen)

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
    >
      <DialogTitle>You are about to create a channel</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This will create a new queue,
          If you close the window you cannot access it anymore.
        </DialogContentText>
        <DialogContentText onClick={toggleOptionsOpen}>Options <ArrowDownwardIcon fontSize="inherit" /></DialogContentText>
        { isOptionsOpen &&
          <Paper>
            No options at the moment
          </Paper>
        }
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="secondary">No</Button>
        <Button onClick={props.accept} color="primary">Yes</Button>
      </DialogActions>
    </Dialog>
  )
}

CreateChannelDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  accept: PropTypes.func,
}

export default CreateChannelDialog
