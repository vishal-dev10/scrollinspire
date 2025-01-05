import React, { useState } from 'react';
import { flattradeLogin, fetchTradebook, generateAccessToken } from '../api';

const InsightPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [panOrDob, setPanOrDob] = useState('');
    const [token, setToken] = useState('');
    const [tradebook, setTradebook] = useState([]);

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = await flattradeLogin(username, password, panOrDob);
        const requestCode = data.request_code;
        const accessTokenData = await generateAccessToken(requestCode);
        setToken(accessTokenData.token);
        fetchTradebookData(accessTokenData.token);
    };

    const fetchTradebookData = async (token) => {
        const data = await fetchTradebook(token);
        setTradebook(data);
    };

    return (
        <div>
            <h1>Flattrade Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="PAN/Year of Birth"
                    value={panOrDob}
                    onChange={(e) => setPanOrDob(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>

            <h1>Tradebook</h1>
            <table>
                <thead>
                    <tr>
                        <th>Trade ID</th>
                        <th>Symbol</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tradebook.map((trade) => (
                        <tr key={trade.id}>
                            <td>{trade.id}</td>
                            <td>{trade.symbol}</td>
                            <td>{trade.quantity}</td>
                            <td>{trade.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InsightPage;
