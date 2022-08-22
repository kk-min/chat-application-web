import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import NameMenu from "../components/NameMenu";
import Fade from "@mui/material/Fade";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome(props) {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate("/chat");
		}, 4000);
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
				<CircularProgress size={60} />
			) : (
				<Fade in={true} timeout={3000}>
					<Typography variant='h3'>Welcome! :'{")"}</Typography>
				</Fade>
			)}
		</Grid>
	);
}
