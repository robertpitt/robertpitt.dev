import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './browser/registerServiceWorker';
import { ThemeProvider } from './themes/robertpitt.dev';
import Home from './views/Home';
import NotFound from './views/NotFound';

/**
 * Application Definition 
 */
const Application = () => (
  <React.Fragment>
    <CssBaseline />
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  </React.Fragment>
)

/**
 * Configure Environment 
 */
serviceWorker.unregister();

/**
 * Render View
 */
ReactDOM.render(<Application />, document.getElementById('root'));