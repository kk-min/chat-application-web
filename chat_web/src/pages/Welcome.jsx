import React from "react";
import { CircularProgress, Grid, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

export default function Welcome(props) {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				console.log("Authorization granted.");
				props.setLoggedIn(true);
				setLoading(false);
				setTimeout(() => {
					navigate("/chat");
				}, 3500);
			} else {
				// User is signed out
				console.log("Not authorized.");
				setLoading(false);
			}
		});
	}, []);

	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justifyContent='center'
			sx={{ minHeight: "100vh", bgcolor: "background.default" }}
		>
			{loading ? (
				<></>
			) : props.loggedIn ? (
				<Fade in={true} timeout={3000}>
					<Typography variant='h3'>Welcome 💖</Typography>
				</Fade>
			) : props.loggedIn == null ? (
				<Grid
					container
					spacing={0}
					alignItems='center'
					justifyContent='center'
					sx={{ minHeight: "100vh", bgcolor: "background.default" }}
				/>
			) : (
				<Grid
					container
					spacing={0}
					alignItems='center'
					justifyContent='center'
					sx={{ minHeight: "100vh", bgcolor: "background.default" }}
				>
					<Typography
						id='title'
						variant='h3'
						sx={{
							padding: 3,
							fontWeight: "bold",
						}}
					>
						Nice Try
					</Typography>
				</Grid>
			)}
		</Grid>
	);
}
