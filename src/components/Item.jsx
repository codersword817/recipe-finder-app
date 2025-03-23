import React from 'react'

function Item({ itemData }) {
    console.log(itemData);

    return (
        <div className='itemContainer' >
            <img src={itemData.strCategoryThumb} alt="Food Item Image" />
            <div>

                <em>Category: </em><strong>{itemData.strCategory}</strong>
            </div>
            <div>

                {itemData.strCategoryDescription}
            </div>

        </div>
    )
}

export default Item
