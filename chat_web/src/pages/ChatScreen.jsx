import React, { useState, useEffect, useCallback } from "react";
import { Grid, Typography, Box, Stack } from "@mui/material";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import ChatBox from "../components/ChatBox";
import ChatWindow from "../components/ChatWindow";
import { useNavigate } from "react-router-dom";
import EscapeDialog from "../components/EscapeDialog";

export default function ChatScreen(props) {
	const [dialogOpen, setDialogOpen] = useState(false);
	const [dialogOption, setDialogOption] = useState(false);
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	const handleClose = (value) => {
		setDialogOpen(false);
		setDialogOption(value);
	};

	const handleEsc = (event) => {
		if (event.key == "Escape") {
			setDialogOpen(true);
		}
	};

	useEffect(() => {
		if (dialogOption === true) {
			navigate("/");
		}
		//Set up observer on user authentication:
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				console.log("Authorization granted.");
				props.setLoggedIn(true);
				setLoading(false);
			} else {
				// User is signed out
				console.log("Not authorized.");
				props.setLoggedIn(false);
				setLoading(false);
			}
		});

		//Set up observer on keypress:
		document.addEventListener("keydown", handleEsc);

		// Don't forget to clean up
		return function cleanup() {
			document.removeEventListener("keydown", handleEsc);
		};
	}, [dialogOption]);

	return loading ? (
		<Grid
			container
			justifyContent='flex-end'
			p={0}
			sx={{ minHeight: "100vh", bgcolor: "background.default" }}
		/>
	) : props.loggedIn ? (
		<Grid
			container
			justifyContent='flex-end'
			p={0}
			sx={{ minHeight: "100vh", bgcolor: "background.default" }}
		>
			<Grid
				container
				item
				sx={{ justifyContent: "center", alignItems: "center" }}
				xs={12}
			>
				<ChatWindow userName={props.userName} />
			</Grid>
			<Grid
				container
				item
				xs={12}
				sx={{ alignItems: "flex-end" }}
				mb={5}
				ml={2}
				mr={1}
			>
				<ChatBox userName={props.userName} />
			</Grid>
			<EscapeDialog onClose={handleClose} open={dialogOpen} />
		</Grid>
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
	);
}
