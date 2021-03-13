import './App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { routes } from './routes';
import Home from './scenes/Home';
import PhotoChooser from './scenes/PhotoChooser';
import history from './history';

function App() {
	return (
		<Router history={history}>
			<Switch>
        <Route exact path={routes.HOME} component={Home} />
				<Route exact path={routes.SELECT} component={PhotoChooser} />
				<Redirect to={routes.HOME} />

			</Switch>
		</Router>
	);
}

export default App;
