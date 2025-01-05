import React, { useEffect, useState } from 'react';
import { getItems, createItem } from '../api';

const InsightPage = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', description: '' });

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await getItems();
        setItems(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createItem(newItem);
        fetchItems();
        setNewItem({ name: '', description: '' });
    };

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}: {item.description}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newItem.description}
                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default InsightPage;
