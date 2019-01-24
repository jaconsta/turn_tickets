import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  sideMenuPaper: {
    top: 'auto'
  }
 }

const SideMenu = props => {
  const menuLinks = [
    ['Company', '/company'],
    ['Manage Agents', '/agents']
  ]
  return (
    <div>
      <Drawer
        open={props.open}
        variant="persistent"
        anchor="left"
        classes={
          {paper: props.classes.sideMenuPaper}
        }
      >
        <List>
          {
            menuLinks.map(([item, link]) => (
              <ListItem button key={item}>
                <Link to={link}>
                  <ListItemText>{item}</ListItemText>
                </Link>
              </ListItem>)
            )
          }
        </List>
      </Drawer>
    </div>
  )
}

 SideMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

const ClippedSideMenu = withStyles(styles)(SideMenu);

const UserMenu = props => (
  <Menu
    anchorEl={props.anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={Boolean(props.isMenuOpen)}
    onClose={props.onClose}
  >
    <MenuItem onClick={props.onClose}>Profile</MenuItem>
    <MenuItem onClick={props.logoutUser}>Log out</MenuItem>
  </Menu>
);


class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: false,
      userMenuOpen: false
    }
  }

  toggleSideBar = menuName => {
    this.setState({sidebarOpen: !this.state.sidebarOpen})
  }

  toggleMenu = menuName => (e) => {
    this.setState({[menuName]: e.currentTarget})
  }

  closeMenu = menuName => () => {
    this.setState({[menuName]: null})
  }

  logoutUser = () => {
    const { history } = this.props
    history.push("/login")
  }

  render () {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton style={styles.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleSideBar}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h5" style={styles.grow}>
              Trimmer
            </Typography>
            <IconButton
              aria-haspopup="true"
              onClick={this.toggleMenu('userMenuOpen')}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <ClippedSideMenu open={this.state.sidebarOpen}/>
        <UserMenu
          anchorEl={this.state.anchorEl}
          isMenuOpen={this.state.userMenuOpen}
          logoutUser={this.logoutUser}
          onClose={this.closeMenu('userMenuOpen')}
        />
      </div>
    )
  }
}

export default Layout
