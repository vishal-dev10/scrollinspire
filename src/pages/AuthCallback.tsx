
import React, { useEffect, useState } from "react";
import axios from "axios";

const AuthCallback = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const processAuth = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const requestCode = urlParams.get("code"); // Extract `code`
      const clientId = urlParams.get("client"); // Extract `client`

      if (!requestCode) {
        setStatus("Authorization failed. No code provided.");
        return;
      }

      try {
        // Call backend to exchange `requestCode` for a token
        const response = await axios.post(
          "https://trademate-backend.onrender.com/api/get-token/",
          { request_code: requestCode, client: clientId }
        );

        if (response.data.token) {
          setStatus(`Login successful! Token: ${response.data.token}`);
          // Optionally, save the token in local storage
          localStorage.setItem("auth_token", response.data.token);
        } else {
          setStatus("Login failed. Please try again.");
        }
      } catch (error) {
        console.error(error);
        setStatus("Failed to process authorization.");
      }
    };

    processAuth();
  }, []);

  return <div>{status}</div>;
};

export default AuthCallback;
