import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBugs, getUnresolvedBugs, resolveBug } from "../store/bugs";

const BugsList = () => {
	const dispatch = useDispatch();
	// const bugs = useSelector((state) => state.entities.bugs.list);
	const bugs = useSelector(getUnresolvedBugs);

	useEffect(() => {
		dispatch(loadBugs());
		return () => {
			console.log("---Clean up----");
		};
	}, []);

	const resolveBugs = (id) => {
		dispatch(resolveBug(id));
	};

	return (
		<ul>
			{bugs.map((bug) => (
				<>
					<li key={bug.id}>{bug.description}</li>
					<button onClick={() => resolveBugs(bug.id)}>Resolve</button>
				</>
			))}
		</ul>
	);
};

export default BugsList;
