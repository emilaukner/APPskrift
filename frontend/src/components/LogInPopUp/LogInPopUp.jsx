import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Typography, Button, Alert } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { StyledLoginPopup } from "./style";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import CloseIcon from "@mui/icons-material/Close";
import CreateUser from "../CreateUser/CreateUser";
import axios from "axios";
import { grid } from "@mui/system";

const LogInPopUp = ({onClose, onSuccess, show, alertMessage}) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState(false);
	const [showCreateUser, setShowCreateUser] = useState(false);

	const submitLogin = async () => {
		await axios
		.post("/auth/", {
			email: email,
			password: password
		})
		.then((res) => {
			onSuccess(res.data);
		})
		.catch((err) => {
			console.log(err)
			setError(true);
			setTimeout(function () {
				setError(false);
			}, 2000);
		})
	}

  const onCreateUserClose = () => {
    setShowCreateUser(false);
    onClose();
  };

	return(
		<StyledLoginPopup show={show}>
 				<Box sx={{ width: "30%", top: "5%", left: "37.5%", position: "fixed", zIndex: 99 }}>
					<Paper sx={{padding: "7%"}}>	
					{error ? (
						<Alert severity="error">Feilet! Kunne ikke logge inn!</Alert>
					) : null}
					{alertMessage ? (
						<Alert severity="error">{alertMessage}</Alert>
					) : null}
						<Grid container spacing={2}>
							<Grid item xs={11}>
								<Typography variant="h4" component="div" gutterBottom>
									Logg Inn
								</Typography>
							</Grid>
							<Grid item xs={1}>
								<CloseIcon 
								style={{
									fill: "red",
									cursor: "pointer",
								}}
								onClick={onClose}
								/>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="p" component="div" gutterBottom>
									Begynn å lag dine egne oppskrifter nå!
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
									label="Passord"
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
									Logg inn
								</Button>
							</Grid>
							<Grid item xs={12}>
								<Link onClick={() => setShowCreateUser(true)}>Lag en bruker</Link>
							</Grid>
						</Grid>
					</Paper>
			</Box>
			<CreateUser 
				show={showCreateUser} 
				onComplete={() => setShowCreateUser(false)}
				onClose={onCreateUserClose}
			/>
		</StyledLoginPopup>
	)
}

export default LogInPopUp;
