import React, { useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function NameFail(props) {
	const returnButton = useRef(null);
	useEffect(() => {
		returnButton.current.focus();
	});
	return (
		<Box container>
			<Typography
				variant='h4'
				sx={{ fontWeight: "bold", color: "secondary.main" }}
			>
				You cannot use that name!
			</Typography>
			<Button
				ref={returnButton}
				sx={{ margin: 2 }}
				color='primary'
				variant='contained'
				onClick={() => {
					props.setInvalidName(false);
				}}
			>
				<b>Return</b>
			</Button>
		</Box>
	);
}
