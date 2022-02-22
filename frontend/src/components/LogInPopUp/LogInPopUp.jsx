import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Typography, Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { StyledLoginPopup } from "./LoginPopUp.style";

const LogInPopUp = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return(
		<StyledLoginPopup>
			<Box 
				sx={{
					width: "100%",
					display: "flex",
				}}
			>
					<Paper sx={{padding: "7%", width: "100%"}}>
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
								<Button variant="contained">
									Log in
								</Button>
							</Grid>
						</Grid>
					</Paper>
			</Box>
		</StyledLoginPopup>
	)
}

export default LogInPopUp;