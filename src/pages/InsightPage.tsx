// filepath: /E:/React Vite - TradeMate/scrollinspire/src/pages/InsightPage.tsx
import React, { useState } from 'react';
import { flattradeLogin, fetchTradebook } from '../api';

const InsightPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [tradebook, setTradebook] = useState([]);

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = await flattradeLogin(username, password);
        setToken(data.token);
        fetchTradebookData(data.token);
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

// import React, { useEffect, useState } from 'react';
// import { getItems, createItem } from '../api';

// const InsightPage = () => {
//     const [items, setItems] = useState([]);
//     const [newItem, setNewItem] = useState({ name: '', description: '' });

//     useEffect(() => {
//         fetchItems();
//     }, []);

//     const fetchItems = async () => {
//         const data = await getItems();
//         setItems(data);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await createItem(newItem);
//         fetchItems();
//         setNewItem({ name: '', description: '' });
//     };

//     return (
//         <div>
//             <h1>Items</h1>
//             <ul>
//                 {items.map((item) => (
//                     <li key={item.id}>{item.name}: {item.description}</li>
//                 ))}
//             </ul>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     value={newItem.name}
//                     onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Description"
//                     value={newItem.description}
//                     onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
//                 />
//                 <button type="submit">Add Item</button>
//             </form>
//         </div>
//     );
// };

// export default InsightPage;
