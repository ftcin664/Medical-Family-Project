import { useState } from "react";
import "./Login.scss";
import logo from "../../assets/images/logo-white.svg";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../utils/Api";
import { toast } from "react-toastify";
import { setLocalStorage } from "../../common/commonFunction/commonFunction";
import { Button } from "react-bootstrap";
import { END_POINTS } from "../../common/endPoints";

const Login = () => {
  const [isDiasbled, setIsDiasbled] = useState(false)
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("pankaj@gmail.com");
  const [password, setPassword] = useState("password");
  const [errors, setErrors] = useState({});
  const [language, setLanguage] = useState("en");
  const navigate=useNavigate()

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value); // Update selected language state
  };

  const handlePhoneNumberChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    let formErrors = {};
    if (isNaN(parseFloat(phone))) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(phone)) {
        formErrors.phone = "Email is invalid";
      }
    }
    else {
      if (!phone.trim()) {
        formErrors.phone = "Mobile number is required";
      } else if (!/^\d{10}$/.test(phone)) {
        formErrors.phone = "Invalid mobile number format";
      }

    }
    if (!password.trim()) {
      formErrors.password = "Password is required";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (validateForm()) {
        // testing purpose
        // setLocalStorage("token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzA4ZTUzODA0YmVhZDQxZjhlMTAwNzAiLCJpYXQiOjE3Mjg4MjEwNzR9.gH-gppmEWegbfoj3Hv8zEYeVFVHcCOzjlYYrCU9SeVc');
        // setLocalStorage("user", JSON.stringify({
        //   "_id": "6708e53804bead41f8e10070",
        //   "uid": 2,
        //   "fullName": "Pankaj Kushwah",
        //   "email": "pankaj@gmail.com",
        //   "phone": "6267670195",
        //   "countryCode": "+91",
        //   "isEmailVerified": true,
        //   "isPhoneVerified": true,
        //   "isVarified": false,
        //   "dob": "2001-02-18T00:00:00.000Z",
        //   "country": "Bharat",
        //   "otpCode": 2047,
        //   "profileImageUrl": "http://localhost:3001/api/v1/user/get-image/0398-Rectangle-3.svg",
        //   "relationRequests": [],
        //   "sendedRequests": [
        //     {
        //       "userId": "6708ea557d97589f6adf0b43",
        //       "relation": "wife",
        //       "_id": "6708eb13e2c1ed6eb51bd4ce",
        //       "isAccepted": true
        //     },
        //     {
        //       "userId": "67091cf6e384dbc472a3414d",
        //       "relation": "Brother",
        //       "isAccepted": false,
        //       "_id": "67091cf6e384dbc472a34151"
        //     }
        //   ]
        // }));
        // setPhone("");
        // setPassword("");
        const formData = {
          phone,
          password,
        };
        console.log("formData", formData);
        
        setIsDiasbled(true)
        
        const response = await login(phone,password);
        if (response.success) {
          toast.success(response?.message);
          setLocalStorage("token", response?.token);
          setLocalStorage("user", JSON.stringify(response?.user));
          setPhone("");
          setPassword("");
          navigate('/')
          setIsDiasbled(false)

        } else {
          let formErrors = {};
          formErrors.password = response?.message;
          setErrors(formErrors);
          setIsDiasbled(false)

        }
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.message);
    }
  };

  return (
    <>
      <h1 className="login-heading fs-4">Login</h1>
      <div className="login-language-selector">
        <select
          className="form-select w-auto mx-auto mt-3 border-0 rounded-pill"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label" htmlFor="phoneNumber">
            Email or Mobile Phone Number
          </label>
          <div className="number-with-conuntry-code d-flex align-items-center">
            <select
              value={countryCode}
              onChange={handleCountryCodeChange}
              className="form-select border-0 bg-transparent"
              style={{ maxWidth: "120px", height: "48px" }}
            >
              <option value="+1">+1 (US)</option>
              <option value="+91">+91 (IN)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (AU)</option>
              <option value="+81">+81 (JP)</option>
            </select>
            <span className="st-line">|</span>
            <div className="phone-number-input-field">
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Enter here"
                value={phone}
                onChange={handlePhoneNumberChange}
                className={`border-0 transparent-input login-input form-control phone-number-input ${errors.phoneNumber ? "is-invalid" : ""
                  }`}
              />

              {errors?.phone && (
                <div className="invalid-feedback text-danger">
                  {errors.phoneNumber}
                </div>
              )}
            </div>
          </div>
          {errors.phone && (
            <div className="invalid-feedback d-block">
              {errors.phone}
            </div>
          )}
        </div>

        {/* Password field */}
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input
            placeholder="Enter here"
            type="password"
            id="form2Example2"
            autoComplete="true"
            className={`border-0 login-input form-control login-input ${errors.password ? "is-invalid" : ""
              }`}
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        {/* Remember me and forgot password */}
        <div className="remember-me-checkbox  mb-5">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="form2Example31"
          />
          <label
            className="form-check-label ms-1"
            htmlFor="form2Example31"
          >
            Remember me
          </label>
        </div>

        {/* Submit buttons */}

        <Button
          disabled={isDiasbled}
          type="submit"
          variant="dark"
          className="w-100 login-btn btn-block mb-3 border-0"
        >
          Login
        </Button>
        <Link to="/forgot-password">
          <button
            type="button"
            className="create-account-btn btn-block mb-5 w-100 border-0 "
          >
            Forgot password?
          </button>
        </Link>
        <Link to="/signup">
          <button
            type="button"
            className="create-account-btn btn-block mb-4 w-100"
          >
            CREATE A NEW ACCOUNT
          </button>
        </Link>
      </form></>
  );
};

export default Login;
