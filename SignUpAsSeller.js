import "./style.css";
import React, { useState } from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link as RouterLink } from 'react-router-dom';
import axios from "axios";

const FlexboxContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
`;

export default function SignUpAsSeller() {
  const [formData, setFormData] = useState({
    IDNum: '',
    InstituteEmail: '',
    Password: '',
    Firstname: '',
    Lastname: '',
    ContNum: '',
    Organization: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name === "idNumber" ? "IDNum" : e.target.name]: e.target.value,
    });
  };  

  // This handleChange function is missing
  const handleChange = (e) => {
    // Add the logic for handling changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Form Data:', formData);
  
    const idNumRegex = /^(\d{2})-(\d{4})-(\d{3})$/;
    if (!idNumRegex.test(formData.IDNum)) {
      console.error('Invalid ID Number format. Please use the format XX-XXXX-XXX');
      return;
    }
  
    const serializedData = {
      IDNum: formData.IDNum,
      InstituteEmail: formData.InstituteEmail,
      Password: formData.Password,
      Firstname: formData.Firstname,
      Lastname: formData.Lastname,
      ContNum: formData.ContNum,
      Organization: formData.Organization,
    };
  
    try {
      const response = await axios.post(
        'http://localhost:8080/Seller/insertSeller',
        serializedData,  // Send the serialized form data directly
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log('Server response:', response.data);
  
      if (response.data.errors) {
        // Handle errors if needed
        console.error('Server validation errors:', response.data.errors);
      } else {
        // Redirect to home or handle success
        window.location = "/home";
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
    // Reset the form data after submission
    setFormData({
      IDNum: '',
      InstituteEmail: '',
      Password: '',
      Firstname: '',
      Lastname: '',
      ContNum: '',
      Organization: '',
    });
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
              mt: 2,
            }}
          >
            <RouterLink to="/" className="RouterLink">Back to Sign In</RouterLink><br/>
            <Typography component="h1" variant="h5">
              Sign in As Seller
            </Typography><br/>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <div>
                <FlexboxContainer justifyContent="space-between">
                  <TextField
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    name="Firstname"
                    autoComplete="first name"
                    placeholder="First Name"
                    multiline
                    variant="standard"
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                    InputProps={{
                      style: { color: 'white' },
                    }}
                    style={{ marginRight: '10%' }}
                  />
                  <TextField
                    required
                    fullWidth
                    name="Lastname"
                    label="Last Name"
                    type="last name"
                    id="lastname"
                    autoComplete="last name"
                    placeholder="Last Name"
                    multiline
                    variant="standard"
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                    InputProps={{
                      style: { color: 'white' },
                    }}
                  />
                </FlexboxContainer>
              </div>
              <br/>
              <FlexboxContainer justifyContent="space-between">
                <TextField
                  fullWidth
                  name="ContNum"
                  label="Contact Number"
                  type="contact number"
                  id="contactnum"
                  autoComplete="contactnum"
                  placeholder="Contact Number"
                  multiline
                  variant="standard"
                  InputProps={{
                    style: { color: 'white' },
                  }}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  style={{ marginRight: '10%' }}
                />
                <TextField
                  required
                  fullWidth
                  name="IDNum"
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
                  value={formData.IDNum}
                  onChange={handleInputChange}
                />
              </FlexboxContainer>
              <br/>
              <FlexboxContainer justifyContent="space-between">
                <TextField
                  required
                  fullWidth
                  name="InstituteEmail"
                  label="Institute Email"
                  type="insemail"
                  id="insemail"
                  autoComplete="insemail"
                  placeholder="Institute Email"
                  multiline
                  variant="standard"
                  InputProps={{
                    style: { color: 'white' },
                  }}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  style={{ marginRight: '10%' }}
                />
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
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </FlexboxContainer>
              <br/>
              <TextField
                required
                fullWidth
                name="Organization"
                label="Organization"
                type="organization"
                id="organization"
                autoComplete="organization"
                placeholder="Organization"
                multiline
                variant="standard"
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                InputProps={{
                  style: { color: 'white' },
                }}
              />

              <br/><br/>
              <FormControlLabel
                control={<Checkbox value="acceptTerms" color="primary" />}
                label="I accept Terms of Use"
              />
              <br/><br/>
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
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}
