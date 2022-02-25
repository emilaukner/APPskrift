import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Typography, Button, Alert } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { StyledLoginPopup } from "./LoginPopUp.style";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import CreateUser from "../CreateUser/CreateUser";
import axios from "axios";

const LogInPopUp = ({onClose, show}) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState(false);
	const [cookie, setCookie] = useCookies(["user"])
	const [showCreateUser, setShowCreateUser] = useState(false);

	const submitLogin = async () => {
		await axios
		.post("/auth/", {
			email: email,
			password: password
		})
		.then((res) => {
			console.log("Login was successful", res)
			onClose();
			setCookie("userId", res.data.userId);
		})
		.catch((err) => {
			console.log(err)
			setError(true);
			setTimeout(function () {
				setError(false);
			}, 2000);
		})
	}

	return(
		<StyledLoginPopup show={show}>		
 				<Box sx={{ width: "30%", top: "5%", left: "37.5%", position: "fixed" }}>
					<Paper sx={{padding: "7%"}}>
					{error ? (
						<Alert severity="error">Feilet! Kunne ikke logge inn!</Alert>
					) : null}
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Typography variant="h4" component="div" gutterBottom>
									Log In
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="p" component="div" gutterBottom>
									Start creating your own recipes now!
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id="login-input"
									label="Epost"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									sx={{
										width: "100%",
									}}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id="login-input"
									type="password"
									label="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									sx={{
										width: "100%",
									}}
								/>
							</Grid>
							<Grid item xs={12}>
								<Button 
									variant="contained"
									sx={{
										width: "100%",
									}}
									onClick={submitLogin}
								>
									Log in
								</Button>
							</Grid>
							<Grid item xs={12}>
								<Link onClick={() => setShowCreateUser(true)}>Create user</Link>
							</Grid>
						</Grid>
					</Paper>
			</Box>
			<CreateUser 
				show={showCreateUser} 
				onComplete={() => setShowCreateUser(false)}
			/>
		</StyledLoginPopup>
	)
}

export default LogInPopUp;