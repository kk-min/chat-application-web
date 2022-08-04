import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@material-ui/core/styles/";

export const themeOptions = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "rgba(224,103,104,0.67)",
		},
		secondary: {
			main: "#0099f5",
		},
		background: {
			default: "#cff7f3",
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={themeOptions}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
