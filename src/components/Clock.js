import React, { useState, useEffect } from "react";
function Clock() {
	const [date, setDate] = useState(
		new Date().toLocaleDateString("fr-FR", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
		})
	);
	// 17/07/1992 11:55:22

	useEffect(() => {
		const interval = setInterval(() => {
			setDate(
				new Date().toLocaleDateString("fr-FR", {
					weekday: "long",
					year: "numeric",
					month: "long",
					day: "numeric",
					hour: "numeric",
					minute: "numeric",
					second: "numeric",
				})
			);
		}, 1000);

		return function cleanup() {
			clearInterval(interval);
		};
	}, []);

	return <div>{date}</div>;
}

export default Clock;
