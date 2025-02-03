import './index.css';
import loginPage from './components/loginPage';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
	<BrowserRouter>
		<Route
			exact
			path="/login"
			component={loginPage}
		/>
	</BrowserRouter>;
};
export default App;
