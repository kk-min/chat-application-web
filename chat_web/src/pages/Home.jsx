import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const connectToIP = (ip) => {};

export default function Home() {
	const [targetIP, setTargetIP] = useState();
	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justifyContent='center'
			sx={{ minHeight: "100vh", bgcolor: "background.default" }}
		>
			<Typography
				id='title'
				variant='h3'
				sx={{ padding: 3, fontWeight: "bold" }}
			>
				Min's Chat Web App
			</Typography>
			<TextField
				label='Enter IP:'
				type='search'
				onChange={(event) => {
					setTargetIP(event.target.value);
				}}
			></TextField>
			<Button
				sx={{ margin: 2 }}
				color='primary'
				variant='contained'
				onAction={connectToIP(targetIP)}
			>
				Connect
			</Button>
		</Grid>
	);
}
