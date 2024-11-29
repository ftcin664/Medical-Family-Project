import "./ForgotPassword.scss";
import logo from "../../assets/images/logo-white.svg";
import { useState } from "react";
import { postApiRequest } from "../../utils/postRequest";
import { END_POINTS } from "../../common/endPoints";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhone(e.target.value);
  };

  const validateForm = () => {
    const errors = {};
    const phoneRegex = /^[0-9]{7,15}$/;

    if (!phone) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Enter a valid phone number";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      const formData = {
        email: phone,
      };
      try {
        const response = await postApiRequest(
          END_POINTS.FORGOT_PASSWORD,
          formData
        );
        if (response.success) {
          navigate("/verify-otp");
        }
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  return (
    <div className="forgot-password-box bg_secondary">
    <h1 className="forgot-heading">FORGOT PASSWORD</h1>

    <form className="mt-5" onSubmit={handleSubmit}>
      <div>
        <label className="form-label" htmlFor="phoneNumber">
          Email or Mobile Phone Number
        </label>
        <div className="number-with-conuntry-code d-flex align-items-center mb-4">
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
              className={`border-0 transparent-input login-input form-control phone-number-input ${
                errors.phoneNumber ? "is-invalid" : ""
              }`}
            />

            {errors?.phone && (
              <div className="invalid-feedback text-danger">
                {errors.phoneNumber}
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="login-btn btn-block mb-4 w-100 border-0"
      >
        CONTINUE
      </button>
    </form>
  </div>
  );
};

export default ForgotPassword;
