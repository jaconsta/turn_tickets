import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Paper from '@material-ui/core/Paper'
import Snackbar from '@material-ui/core/Snackbar'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  layoutStyle: {
     width: 'auto',
     display: 'block', // Fix IE11 issue.
  },
  paperStyle: {
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    }
  },
  firstField: {
    marginBottom: '0px'
  },
  nextField: {
    marginTop: 0,
  }
})


class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      rememberMe: false,
      snackbarOpen: false
    }
  }

  handleChange = name => event => {
     this.setState({
       [name]: event.target.value
     })
  }

  handleCheck = name => event => {
     this.setState({
       [name]: event.target.checked
     })
  }

  requestLogin = (e) => {
    e.preventDefault()
    const {username, password } = this.state
    if (!(username === 'a@mail.com' && password === 'a')) return

    const { history } = this.props
    history.replace("/")
  }

  render () {
    const { classes } = this.props

    return (
     <div className={classes.layoutStyle}>
       <Paper className={classes.paperStyle}>
         <Typography variant="h2" color={'secondary'}>
           Login
         </Typography>
         <form onSubmit={this.handleSubmit}>
           <FormControl margin="normal" required fullWidth  className={classes.firstField}>
             <TextField
               id="email-input"
               label="Email"
               type="email"
               autoComplete="your email"
               margin="normal"
               value={this.state.email}
               onChange={this.handleChange('username')}
             />
           </FormControl>
           <FormControl margin="normal" required fullWidth className={classes.nextField}>
             <TextField
               id="password-input"
               label="Password"
               type="password"
               autoComplete="current-password"
               margin="normal"
               value={this.state.password}
               onChange={this.handleChange('password')}
             />
           </FormControl>
           <FormControl margin="normal" required fullWidth className={classes.nextField}>
           <FormControlLabel
             control={<Checkbox value="remember" onChange={this.handleCheck('rememberMe')} checked={this.state.rememberMe} color="primary" />}
             label="Remember me"
           />
           <Button color="primary" variant="contained" type='submit' onClick={this.requestLogin}>
             Login
           </Button>
           </FormControl>
         </form>
         <div>Not registered? <Link to="/register"><Button>register</Button></Link></div>
       </Paper>
       <Snackbar
         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         open={this.state.snackbarOpen}
         onClose={this.handleSnackbarClose}
         ContentProps={{
           'aria-describedby': 'message-id',
         }}
         message={<span id="message-id">Error on login</span>}
       />

     </div>
   )
  }
}

export default withStyles(styles)(Login)
