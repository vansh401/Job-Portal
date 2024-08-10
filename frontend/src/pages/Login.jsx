import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormControlLabel, FormLabel, RadioGroup, Radio } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Navbar from "@/components/Navbar";
import useAuth from "../context/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { api, auth, setAuth } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(`${api}/user/login`, {  email, password },{
        headers:{
          Authorization : auth.token
        }
      });
     console.log(res)
      if (res && res.data.success) {
        setAuth({ ...auth,  token: res.data.token, user: res.data.user._id});
        localStorage.setItem("auth", JSON.stringify({token: res.data.token,user: res.data.user._id}));
        toast.success(res.data.message)
        navigate("/");
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  useEffect(()=>{
if(auth.token){
  console.log()
  navigate("/")
}
  },[auth,api])
  return (
    <>
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>
        <img
          src={"https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?w=740&t=st=1720768314~exp=1720768914~hmac=a427b1063aee75564f0afa70017f3a824f83a5d213c6d33e1bb31cf4c978fb42"}
          style={{ marginLeft: 150, width: "70%", height: "100%" }}
          alt="Signup"
        />
      </div>
      <div style={{ width: "50%" ,marginTop:"9vh",marginLeft:"8vw" }}>
        <form onSubmit={handleSubmit} style={{ width: "400px",marginTop:"10vh" }}>
          {/* <h1 style={{ textAlign: "center", padding: "5px 40px" }}>Register Yourself</h1> */}
          
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
           
          <FormControl
            sx={{ m: 1, width: "400px", marginLeft: "-0.1px", marginTop: "0px", marginBottom: "40px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
          <span className="text-sm">Don't have an account? <Link to="/signup" className="text-blue-600">SignUp</Link> </span>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
