import React from 'react'
import ItemCard from './ItemCard';
const ItemList=() =>{
    const items = [
        {
            id: 1,
            image : "https://i.imgur.com/Qpw6j8D.png",
            name : 'Item1',
            price : 25.99,
            rating : 4.5,
        },
        {
            id: 2,
            image : "https://i.imgur.com/Qpw6j8D.png",
            name : 'Item2',
            price : 2.99,
            rating : 5,
        },
        {
            id: 3,
            image : 'https://i.imgur.com/Qpw6j8D.png',
            name : 'Item3',
            price : 5.99,
            rating : 4,
        },
        {
            id : 4,
            image : 'https://i.imgur.com/Qpw6j8D.png',
            name : 'Item4',
            price : 6.66,
            rating : 3,
        }
    ];
    return (
        <div className="container-fluid">
            <div className="container p-5">
                <div className="row">
                    {items.map((item,index)=>(
                        <div key={index} className="col-lg-4 col-md-12 mb-4">
                            <ItemCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
 export default ItemList;