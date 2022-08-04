import React, { useState } from "react";
import { TextField, Grid } from "@mui/material";

const handleEnter = (event) => {
	console.log("In handleEnter");
	if (event.key == "Enter" && event.shiftKey) {
		console.log("Detected Shift+Enter key");
	} else if (event.key == "Enter") {
		console.log("Detected Enter key");
	}
};

export default function ChatScreen() {
	const [value, setValue] = React.useState("");

	const handleChatBoxChange = (event) => {
		setValue(event.target.value);
	};
	return (
		<Grid container>
			<TextField
				id='chatBox'
				multiline
				maxRows={90}
				value={value}
				onChange={handleChatBoxChange}
				variant='filled'
				onKeyDown={handleEnter}
			></TextField>
		</Grid>
	);
}
