import "./VerifyOtp.scss";
import { useContext, useState } from "react";
import OTPInput from "react-otp-input";
import { useSearchParams } from 'react-router-dom';
import { END_POINTS } from "../../common/endPoints";
import { postApiRequest } from "../../utils/postRequest";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/authContext";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const {login} = useContext(AuthContext);

  // Get query parameter values
  const email = searchParams.get('email'); // Replace 'paramName' with the actual query param key


  const validateOtp = () => {
    if (otp.length !== 4) {
      setError("Please enter a 4-digit OTP.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateOtp()) {
      try {
        const payload = { email, otp };
        const response = await postApiRequest(END_POINTS.VERIFY_OTP, payload);
        console.log(response)
        if (!response.error) {
          login(response.token, response.token);
          navigate('/tree')
        }
        console.log("response", response);
      } catch (error) {
        console.error("Error verifying OTP:", error);
        toast.error(error?.message);
      }
    }
  };

  return (
    <>
      <h1 className="verify-otp-heading">ENTER CODE</h1>

      <form className="mt-5" onSubmit={handleSubmit}>
        <p>Enter OTP Code here</p>
        <div className="otp-input mb-5">
          <OTPInput
          className="otpInput"
            value={otp}
            onChange={(value) => {
              setOtp(value);
              setError("");
            }}
            numInputs={4}
            renderSeparator={<span>{"  "}</span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>

        {error && <p className="error-message text-danger">{error}</p>}

        <button
          type="submit"
          className="login-btn btn-block mb-4 w-100 border-0"
        >
          CONTINUE
        </button>
      </form>
      <p className="code text-center">
        Didn’t receive a code?{" "}
        <span className="resend text-decoration-underline">Resend</span>
      </p></>
  );
};

export default VerifyOtp;
