import "./styles/App.scss";
import Header from "./component/Header";
import Menu from "./component/Menu";
import Search from "./component/Search";
import BottomNav from "./component/BottomNav";

function App() {
	return (
		<div className="container">
			<Header />
			<Search />
			<Menu />
			<BottomNav />
		</div>
	);
}

export default App;
