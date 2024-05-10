import React, { useState, useEffect } from 'react';
const Product = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [sendCategories, setSendCategories] = useState([]);

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handlePrice = (event) => {
        setPrice(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const payload = {
            name: name,
            price: price,
            categorylist: sendCategories
        }
        console.log(payload);
    }

    const handleCheck = (event) => {
        const { name, checked } = event.target;
        const clone = [...categories];
        const modified = clone.map((cat) => {
            if(cat.name === name){
                cat.ischecked = checked;
            }
            return cat;
        })
        setSendCategories(modified);
    }

    useEffect(() => {
        try {
            const levels = [{ id: "1", name: "Household", ischecked: false }, { id: "2", name: "Fashion", ischecked: false }, { id: "3", name: "Technology", ischecked: false }];
            setCategories(levels);
        }
        catch (err) {
            console.log(err.message);
        }

    }, [])

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label htmlFor='prodName'>Name</label>
                <input type='text' id='prodName' onChange={(e) => handleName(e)} />
            </div>
            <div style={{ marginTop: "5px" }}>
                <label htmlFor='price'>Price</label>
                <input type='text' id='price' onChange={(e) => handlePrice(e)} />
            </div>
            {categories.map((c, i) => {
                return (
                    <div key={i}>
                        <input type='checkbox' name={c.name} id={c.id} defaultChecked={c.ischecked} onChange={(e) => handleCheck(e)}/>
                        <label htmlFor={c.id}>{c.name}</label>
                    </div>
                )
            })}
            <button type='sumit'>Submit</button>
        </form>
    );
};

export default Product;