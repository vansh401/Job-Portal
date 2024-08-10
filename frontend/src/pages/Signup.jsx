import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControlLabel,
  RadioGroup,
  Radio,
  Input,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Navbar from "@/components/Navbar";
import useAuth from "../context/auth";
import { toast } from "react-toastify";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [file, setFile] = useState(null);
  const { api, auth, setAuth } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changeFileHandler = (e) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("fullname", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phoneNumber", phoneNumber);
      formData.append("role", role);
      if (file) {
        formData.append("photo", file);
      }

      const res = await axios.post(`${api}/user/register`, formData);

      console.log(res);
      if (res && res.data.success) {
        setAuth({ ...auth,  token: res.data.token, user: res.data.user._id});
        localStorage.setItem("auth", JSON.stringify({token: res.data.token,user: res.data.user._id}));
        toast.success(res.data.message);
        navigate("/");
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <img
            src={
              "https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?w=740&t=st=1720768314~exp=1720768914~hmac=a427b1063aee75564f0afa70017f3a824f83a5d213c6d33e1bb31cf4c978fb42"
            }
            style={{ marginLeft: 150, width: "70%", height: "100%" }}
            alt="Signup"
          />
        </div>
        <div style={{ width: "50%", marginTop: "9vh", marginLeft: "8vw" }}>
          <form onSubmit={handleSubmit} style={{ width: "400px" }}>
            <TextField
              id="outlined-name"
              label="Name"
              value={name}
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", marginBottom: "30px" }}
            />
            <TextField
              id="outlined-email"
              label="Email"
              value={email}
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", marginBottom: "30px" }}
              autoComplete="email"
            />
            <input
              type="text"
              name="username"
              value={email}
              autoComplete="username"
              style={{ display: "none" }}
              readOnly
            />
            <TextField
              id="outlined-name"
              label="Phone Number"
              value={phoneNumber}
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{ width: "100%", marginBottom: "30px" }}
            />
            <FormControl
              sx={{
                m: 1,
                width: "400px",
                marginLeft: "-0.1px",
                marginTop: "0px",
                marginBottom: "40px",
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                value={password}
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                autoComplete="new-password"
              />
            </FormControl>
            <FormControl component="fieldset">
              <div style={{ display: "flex", alignItems: "center" }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{position: "relative", top: "-2.5vh" }}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <FormControlLabel
                    value="student"
                    control={<Radio />}
                    label="Student"
                  />
                  <FormControlLabel
                    value="recruiter"
                    control={<Radio />}
                    label="Recruiter"
                  />
                </RadioGroup>
                <label htmlFor="profile-upload" className="left-5">
                  <Input
                    accept="image/*"
                    type="file"
                    onChange={changeFileHandler}
                    id="profile-upload"
                    style={{ display: "none" }}
                  />
                  <IconButton sx={{position:'relative',top:'-2.5vh'}}
                    component="span"
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: "50%",
                      backgroundColor: "#B4B4B8",
                      color: "white",
                      marginLeft: "20px",
                    }}
                  >
                    <AccountCircleIcon/>
                  </IconButton>
                </label>
              </div>
            </FormControl>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "17px",
                backgroundColor: "black",
                color: "white",
                fontSize: "15px",
                borderRadius: "7px",
              }}
            >
              Submit
            </button>
            <span className="text-sm">Already have an account? <Link to="/login" className="text-blue-600">Login</Link> </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
