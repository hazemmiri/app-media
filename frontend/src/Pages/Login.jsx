import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const formValidation = () => {
    let status = true;
    let localErrors = { ...errors };

    if (email == "") {
      localErrors.email = "Emial  required";
      status = false;
    }

    if (password == "" || password.length < 8) {
      localErrors.password = "password required and min 8 caracteres";
      status = false;
    }

    setErrors(localErrors);
    // console.log(localErrors)
    return status;
  };

  const signin = async (e) => {
    e.preventDefault();
    console.log("form submited");

    if (formValidation()) {
      ///form valid

      const data = {
        email: email,
        password: password,
      };

      try {
        // const response = await UserService.register(data)
        const response = await axios.post("/users/signin", data);
        console.log("respons ===>", response);
        //      SAVE USER DATA LOCALSTORGE

        localStorage.setItem("user_data", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);

        toast.success("User login ...");

        setEmail("");
        setPassword("");

        //  redirection

        navigate("/Home");
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    } else {
      //form invalid
      console.log("from invalid");
    }
  };

  return (
    <div className="Login">
      <Toaster />
      <div className="Login-cover"></div>

      <div className="Login-content">
        <div>
          <h1> DARK SPACE </h1>
          <p>Dark Space Social Media Appliction </p>
        </div>
        <div>
          <form onSubmit={signin}>
            <div className="form-group">
              <label> Email </label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email != " " ? (
                <div style={{ textAlign: "left", color: "orangered" }}>
                  {errors.email}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <label> Password </label>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password != " " ? (
                <div style={{ textAlign: "left", color: "orangered" }}>
                  {errors.password}
                </div>
              ) : (
                ""
              )}
            </div>

            <button className="btn signin" type="submit">
              sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
