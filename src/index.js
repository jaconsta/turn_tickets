import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/components';
import * as serviceWorker from './serviceWorker'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './client/theme'

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
