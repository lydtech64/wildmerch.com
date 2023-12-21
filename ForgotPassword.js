import React from "react";
import "./style.css";
import { Link as RouterLink } from 'react-router-dom';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export default function ForgotPassword() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="background-container">
      <div className="center-rectangle">
        <div className="wildcatmerchbanner"></div>
      </div>

      <div className="box">
        <div className="rectangle">
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Forgot Password
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <div>
              <br /><br />
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                placeholder="Email"
                multiline
                variant="standard"
                style={{ width: "300px" }}
                InputLabelProps={{
                    style: { color: 'white' },
                }}
                InputProps={{
                    style: { color: 'white' },
                }}
                />
              <br /><br /><br />
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{
                  borderRadius: '75px',
                  background: 'rgba(240, 139, 45, 0.90)',
                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                }}
              >
                Submit
              </Button>
              <br /><br /><br />
              <RouterLink to="/" className="RouterLink">Back to Sign In</RouterLink>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}
