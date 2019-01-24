import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
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
    marginBottom: '0px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0px',
      marginBottom: '8px',
    }
  },
  nextField: {
    marginTop: 0,
  }
})

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      company: '',
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

  render () {
    const { classes } = this.props

   return (
     <div className={classes.layoutStyle}>
       <Paper className={classes.paperStyle}>
        <Typography component="h1" variant="h2" color={'secondary'}>
           Register
         </Typography>
         <form onSubmit={this.handleSubmit}>

          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
           <FormControl margin="normal" required fullWidth className={classes.firstField}>
               <TextField
                 id="firstName-input"
                 label="First name"
                 type="text"
                 autoComplete="your name"
                 margin="normal"
                 value={this.state.firstName}
                 onChange={this.handleChange('firstName')}
               />
           </FormControl>
           </Grid>
           <Grid item xs={12} sm={6}>
          <FormControl margin="normal" required fullWidth className={classes.firstField}>
           <TextField
             id="lastName-input"
             label="Last name"
             type="text"
             autoComplete="your name"
             margin="normal"
             value={this.state.lastName}
             onChange={this.handleChange('lastName')}
           />
           </FormControl>
          </Grid>
           </Grid>
           <FormControl margin="normal" required fullWidth className={classes.nextField}>
             <TextField
               id="company-input"
               label="Company"
               type="company"
               autoComplete="Company name"
               margin="normal"
               value={this.state.company}
               onChange={this.handleChange('company')}
             />
           </FormControl>

           <FormControl margin="normal" required fullWidth className={classes.nextField}>
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
           <FormControl margin="normal" required fullWidth>
           <Button color="primary" variant="contained" type='submit' onClick={this.handleSubmit}>
             Register
           </Button>
           </FormControl>
         </form>
         <div>Already registered? <Link to="/login"><Button>login</Button></Link></div>
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

export default withStyles(styles)(Register)
