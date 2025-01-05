import React from "react";

const InsightPage = () => {
  const handleLogin = () => {
    const apiKey = "f1f4f51b37a3427689cbb4bfbb21785e"; // Replace with your actual API key
    const authorizationUrl = `https://auth.flattrade.in/?app_key=${apiKey}`;
    window.location.href = authorizationUrl; // Redirect to Flattrade login
  };

  return <button onClick={handleLogin}>Login with Flattrade</button>;
};

export default InsightPage;



// import React, { useState, useEffect } from 'react';
// import { fetchTradebook, generateAccessToken } from '../api';

// const InsightPage = () => {
//     const [token, setToken] = useState('');
//     const [tradebook, setTradebook] = useState([]);

//     useEffect(() => {
//         const urlParams = new URLSearchParams(window.location.search);
//         const requestCode = urlParams.get('request_code');
//         console.log('Request code from URL:', requestCode);
//         if (requestCode) {
//             handleTokenGeneration(requestCode);
//         }
//     }, []);

//     const handleLogin = () => {
//         const API_KEY = 'f1f4f51b37a3427689cbb4bfbb21785e';
//         console.log('Redirecting to Flattrade login with API key:', API_KEY);
//         window.location.href = `https://auth.flattrade.in/?app_key=${API_KEY}`;
//     };

//     const handleTokenGeneration = async (requestCode) => {
//         console.log('Generating access token with request code:', requestCode);
//         const accessTokenData = await generateAccessToken(requestCode);
//         console.log('Access token data received:', accessTokenData);
//         setToken(accessTokenData.token);
//         fetchTradebookData(accessTokenData.token);
//     };

//     const fetchTradebookData = async (token) => {
//         console.log('Fetching tradebook data with token:', token);
//         const data = await fetchTradebook(token);
//         console.log('Tradebook data received:', data);
//         setTradebook(data);
//     };

//     return (
//         <div>
//             <h1>Flattrade Login</h1>
//             <button onClick={handleLogin}>Login</button>

//             <h1>Tradebook</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Trade ID</th>
//                         <th>Symbol</th>
//                         <th>Quantity</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tradebook.map((trade) => (
//                         <tr key={trade.id}>
//                             <td>{trade.id}</td>
//                             <td>{trade.symbol}</td>
//                             <td>{trade.quantity}</td>
//                             <td>{trade.price}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default InsightPage;
