import React, { Component } from "react";
import StoreContext from "../context/storeContext";
import { loadBugs } from "../store/bugs";
import { connect } from "react-redux";

class Bugs extends Component {
	// static contextType = StoreContext;
	// state = { bugs: [] };
	componentDidMount() {
		// const store = this.context;
		// this.unsubscribe = store.subscribe(() => {
		// 	const bugsInStore = store.getState().entities.bugs.list;
		// 	if (this.state.bugs !== bugsInStore) this.setState({ bugs: bugsInStore });
		// });
		// store.dispatch(loadBugs());

		this.props.loadBugs();
	}

	// componentWillUnmount() {
	// 	this.unsubscribe();
	// }

	render() {
		return (
			<ul>
				{this.props.bugs.map((bug) => (
					<li key={bug.id}>{bug.description}</li>
				))}
			</ul>
		);
	}
}

// Bugs.contextType = StoreContext;

const mapStateToProps = (state) => ({
	bugs: state.entities.bugs.list,
});

const mapDispatchToProps = (dispatch) => ({
	loadBugs: () => dispatch(loadBugs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);

// export default Bugs;
