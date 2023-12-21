import { useState } from "react";
import "./style.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from 'react-router-dom';
import Grid from "@mui/material/Grid";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const idNumRegex = /^(\d{2})-(\d{4})-(\d{3})$/;
    if (!idNumRegex.test(credentials.email)) {
      console.error('Invalid ID Number format. Please use the format XX-XXXX-XXX');
      return;
    }
    handleLogin();
  };

  const handleLogin = () => {
    fetch('http://localhost:8080/account/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Handle success (redirect, set authentication state, etc.)
      })
      .catch((error) => {
        console.error('Error during login:', error.message);
        // Handle error (show an error message, enable a retry, etc.)
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
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
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <div>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="ID Number"
                  type="id number"
                  id="idnum"
                  autoComplete="idnum"
                  placeholder="ID Number"
                  multiline
                  variant="standard"
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  InputProps={{
                    style: { color: 'white' },
                  }}
                  value={credentials.email}
                  onChange={handleChange}
                />
                <br /><br />
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  variant="standard"
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  InputProps={{
                    style: { color: 'white' },
                  }}
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <br /><br />
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
                Sign In
              </Button>
              <br /><br />
              <Grid container spacing={2} justifyContent="flex-start">
                <Grid item xs>
                  <RouterLink to="/forgot-password" variant="body2" className="RouterLink">
                    Forgot password?
                  </RouterLink>
                  <Grid item>
                    <p>Don't have an account? Sign Up as a...</p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <RouterLink to="/SignUpAsBuyer" variant="body2" className="RouterLink">
                        Buyer
                      </RouterLink>
                      <RouterLink to="/SignUpAsSeller" variant="body2" className="RouterLink">
                        Seller
                      </RouterLink>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}
