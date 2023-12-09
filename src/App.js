import logo from "./logo.svg";
import "./App.css";
import Bugs from "./components/bugs";
import configureStore from "./store/configureStore";
import StoreContext from "./context/storeContext";
import { Provider } from "react-redux";
import BugsList from "./components/bugsList";

function App() {
	const store = configureStore();
	return (
		<Provider store={store}>
			<BugsList />
		</Provider>
	);
}

export default App;
