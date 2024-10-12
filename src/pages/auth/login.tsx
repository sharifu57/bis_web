import React, { useState } from "react";
import InputForm from "../../components/forms/inputForm";
import { postData } from "../../services/api";
import DangerAlert from "../../components/alerts/dangerAlert";
import axios from "axios";

interface ErrorResponseData {
    description: string;
}

export default function Login() {
  const [isEmailError, setEmailError] = useState(false);
  const [isPasswordError, setPasswordError] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoggin, setIsLoggin] = useState(true);
  const [responseMessage, setResponseMessage] = useState("");
  const [showResponseMessage, setShowResponseMessage] = useState(false);

  const handleCloseButton = () => {
    setShowResponseMessage(false);
    setResponseMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailAddress || !password) {
      setEmailError(!emailAddress);
      setPasswordError(!password);
      return;
    }

    setLoading(true);
    setIsLoggin(true);

    const data = {
      email: emailAddress,
      password: password,
    };

    try {
      const response = await postData("/auth/login", data, isLoggin);
      setLoading(false);
      setResponseMessage(response);

      console.log("=====response:", response);
      console.log(response.status);
      console.log("===end response");

      if (response.status === "200") {
        setEmailAddress(""), setPassword("");
      } else {
        setEmailAddress(""), setPassword("");
        setShowResponseMessage(true);
      }
    } catch (err) {

        if(axios.isAxiosError(err)){
            const errorResponse = err.response?.data as ErrorResponseData;
            const errorMessage = errorResponse.description
            setResponseMessage(`Error: ${err.response?.status} - ${errorMessage || 'An error occurred'}`);
        }else{
            setResponseMessage("Unkown Error Occured");
        }

      setShowResponseMessage(true);
      setLoading(false);

      setTimeout(() => {
        setShowResponseMessage(false);
      }, 2000);
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen pt-8"
      style={{ backgroundColor: "#F2F2F2" }}
    >
      <div className="w-full max-w-sm p-1 bg-white shadow-md rounded-lg shadow-cyan-100">
        <form onSubmit={handleSubmit} action="" className="w-full">
          <div className="px-3 py-7 text-xl">Login</div>
          <div className="-mx-3 mb-6">
            <div className="w-full px-3 mb-6">
              <InputForm
                label="Email"
                placeholder="Enter your email address"
                type="text"
                isError={isEmailError}
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                errorMessage="Email address is required."
              />
              <div className="pt-3">
                <InputForm
                  label="PIN"
                  placeholder="Enter Password"
                  type="password"
                  isError={isPasswordError}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  errorMessage="Password is required."
                />
              </div>
            </div>
          </div>
          <div className="px-3 py-1">
            <button
              disabled={isLoading}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              {isLoading && (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG Spinner */}
                </svg>
              )}
              Submit
            </button>
          </div>
          {responseMessage && showResponseMessage && (
            <DangerAlert
              title="Error"
              description={responseMessage}
              onClickButton={handleCloseButton}
            />
          )}
        </form>
      </div>
    </div>
  );
}
