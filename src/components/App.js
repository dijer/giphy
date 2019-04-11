import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Main from "./Main";
import History from "./History";

class App extends Component {
	render() {
		return (
			<div className="page">
				<Router>
					<Menu />
					<Switch>
						<Route path="/" component={Main} exact />
						<Route path="/history" component={History} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
