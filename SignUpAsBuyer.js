import React, { useState } from "react";
import "./style.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

const FlexboxContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
`;

export default function SignUpAsBuyer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    course: "",
    collegeYear: 1,
    contactNumber: "",
    idNumber: "",
    instituteEmail: "",
    password: "",
    organization: "",
    acceptTerms: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/Buyer/insertBuyer",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name === "idNumber" ? "IDNum" : name]: type === "checkbox" ? checked : value,
    }));
  };    

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prevFormData) => ({
      ...prevFormData,
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 2,
            }}
          >
            <RouterLink to="/" className="RouterLink">
              Back to Sign In
            </RouterLink><br/>
            <Typography component="h1" variant="h5">
              Sign up As A Buyer
            </Typography><br/>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <FlexboxContainer justifyContent="space-between">
                <TextField
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  name="firstName"
                  autoComplete="firstName"
                  placeholder="First Name"
                  multiline
                  variant="standard"
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  InputProps={{
                    style: { color: "white" },
                  }}
                  style={{ marginRight: "10%" }}
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  name="lastName"
                  label="Last Name"
                  type="last name"
                  id="lastname"
                  autoComplete="lastName"
                  placeholder="Last Name"
                  multiline
                  variant="standard"
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  InputProps={{
                    style: { color: "white" },
                  }}
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </FlexboxContainer><br/>
              <FlexboxContainer justifyContent="space-between">
                <Box sx={{ minWidth: 200 }}>
                  <InputLabel htmlFor="course" style={{ color: 'white' }}>Course</InputLabel>
                  <NativeSelect
                    required
                    defaultValue=""
                    inputProps={{
                      name: 'course',
                      id: 'course',
                    }}
                    onChange={handleSelectChange}
                  >
                    <option value="" disabled>Select Course</option>
                      <option value="BS Architecture">BS Architecture</option>
                      <option value="BS Chemical Engineering">BS Chemical Engineering</option>
                      <option value="BS Civil Engineering">BS Civil Engineering</option>
                      <option value="BS Computer Engineering">BS Computer Engineering</option>
                      <option value="BS Electrical Engineering">BS Electrical Engineering</option>
                      <option value="BS Electronics Engineering">BS Electronics Engineering</option>
                      <option value="BS Industrial Engineering">BS Industrial Engineering</option>
                      <option value="BS Mechanical Engineering">BS Mechanical Engineering</option>
                      <option value="BS Mining Engineering">BS Mining Engineering</option>
                      <option value="BS Accountancy">BS Accountancy</option>
                      <option value="BS Accounting Information Systems">BS Accounting Information Systems</option>
                      <option value="BS Management Accounting">BS Management Accounting</option>
                      <option value="BS Business Administration">BS Business Administration</option>
                      <option value="BS Hospitality Management">BS Hospitality Management</option>
                      <option value="BS Tourism Management">BS Tourism Management</option>
                      <option value="BS Office Administration">BS Office Administration</option>
                      <option value="BS Public Administration">BS Public Administration</option>
                      <option value="AB Communication">AB Communication</option>
                      <option value="AB English Language"> AB English Language</option>
                      <option value="Bachelor of Elementary Education">Bachelor of Elementary Education</option>
                      <option value="Bachelor of Secondary Education">Bachelor of Secondary Education</option>
                      <option value="Bachelor of Multimedia Arts">Bachelor of Multimedia Arts</option>
                      <option value="BS Biology">BS Biology</option>
                      <option value="BS Mathemamtics">BS Mathematics</option>
                      <option value="BS Psychology">BS Psychology</option>
                      <option value="BS Nursing">BS Nursing</option>
                      <option value="BS Pharmacy">BS Pharmacy</option>
                      <option value="BS Computer Science">BS Computer Science</option>
                      <option value="BS Information Technology">BS Information Technology</option>
                      <option value="BS Criminology">BS Criminology</option>
                      </NativeSelect>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                  <InputLabel htmlFor="cYear" style={{ color: 'white' }}>Year</InputLabel>
                  &nbsp;&nbsp;&nbsp;
                  <NativeSelect
                    required
                    defaultValue={1}
                    inputProps={{
                      name: "collegeYear",
                      id: "year",
                    }}
                    onChange={handleChange}
                  >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      </NativeSelect>
                </Box>
              </FlexboxContainer><br/>
              <FlexboxContainer justifyContent="space-between">
                <TextField
                  fullWidth
                  name="contactNumber"
                  label="Contact Number"
                  type="tel"
                  id="contactNumber"
                  autoComplete="contactNumber"
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
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  name="idNumber"
                  label="ID Number"
                  type="text"
                  id="idNumber"
                  autoComplete="idNumber"
                  placeholder="ID Number"
                  multiline
                  variant="standard"
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  InputProps={{
                    style: { color: 'white' },
                  }}
                  value={formData.IDNum}  // Changed from formData.idNumber
                  onChange={handleChange}
                />
              </FlexboxContainer><br/>
              <FlexboxContainer justifyContent="space-between">
                <TextField
                  required
                  fullWidth
                  name="instituteEmail"
                  label="Institute Email"
                  type="email"
                  id="instituteEmail"
                  autoComplete="instituteEmail"
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
                  value={formData.instituteEmail}
                  onChange={handleChange}
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
              </FlexboxContainer><br/>
              <TextField
                required
                fullWidth
                name="organization"
                label="Organization"
                type="text"
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
                value={formData.organization}
                onChange={handleChange}
              /><br/><br/>
              <FormControlLabel
                control={<Checkbox name="acceptTerms" color="primary" onChange={handleChange} />}
                label="I accept Terms of Use"
              /><br/><br/>
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