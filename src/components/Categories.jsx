import React, { useEffect, useState } from 'react'
import Item from './Item';

function Categories() {
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const fetchData = async () => {
        const dt = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const jsonData = await dt.json();
        console.log(jsonData.categories);

        setData(jsonData.categories);
        setSearchData(jsonData.categories);
    }

    useEffect(() => {
        fetchData();

    }, []);

    const searchItem = (e) => {
        const searchpattern = e.target.value;
        setData(searchData.filter((e) => e.strCategory.includes(searchpattern)));

    }

    return (

        <>

            <h3>Enter the Food-category :</h3>
            <input onChange={searchItem} type="text" id="input-search" placeholder='type your category here!' />

            <div className='categoryContainer' >
                {data.map((e, idx) => {
                    return (<div id={idx} ><Item itemData={e} /> </div>)
                })}
            </div>
        </>

    )
}

export default Categories
