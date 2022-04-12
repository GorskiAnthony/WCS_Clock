import React, { useState, useEffect } from "react";
import Clock from "./components/Clock";

function App() {
	const [showClock, setShowClock] = useState(false);

	function handleClick() {
		setShowClock(!showClock);
	}

	return (
		<div className="app">
			<button type="button" onClick={handleClick}>
				Display date : {showClock ? "ON" : "OFF"}
			</button>
			{showClock ? <Clock /> : null}
		</div>
	);
}

export default App;
