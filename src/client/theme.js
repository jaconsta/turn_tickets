import { createMuiTheme } from '@material-ui/core/styles'
import amber from '@material-ui/core/colors/amber'
import deepOrange from '@material-ui/core/colors/deepOrange'

const theme = createMuiTheme(
  {
    palette: {
      primary: amber,
      secondary: deepOrange,
    },
    typography: {
      useNextVariants: true,
    }
  }
)

export default theme
