import React, { useState } from 'react';

const Common = () => {
    const [filtered, setFiltered] = useState([]);
    const [status, setStatus] = useState("");


    const handleSearch = (event) => {
        if (event.target.value) {
            const languages = ["Html", "CSS", "JavaScript", "Python", "C#", "Java"];
            const filtered = languages.filter((lang) => lang.toLowerCase().includes(event.target.value));
            if (filtered.length > 0) {
                setFiltered(filtered);
                setStatus("filter found");
            }
            else {
                setStatus("filter not found")
            }
        }
        else {
            setStatus("no value found");
        }

    }


    if (status === "no value found") {
        return (
            <form>
                <div>
                    <input type='text' onChange={(e) => handleSearch(e)} placeholder='Search' />
                </div>
            </form>
        );
    }
    else if (status === "filter not found") {
        return (
            <form>
                <div>
                    <input type='text' onChange={(e) => handleSearch(e)} placeholder='Search' />
                </div>
                <span> no results found </span>
            </form>
        )
    }
    else {
        return (
            <form>
                <div>
                    <input type='text' onChange={(e) => handleSearch(e)} placeholder='Search' />
                    {filtered.map((l, index) => {
                        return (
                            <p key={index}>{l}</p>
                        )
                    })}
                </div>
            </form>
        );

    }

};

export default Common;