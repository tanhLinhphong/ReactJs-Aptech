import React from 'react'
import ItemCard from './ItemCard';
const ItemList=() =>{
    const items =[
        {
        id:1,
        image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8d7704ed-3fbc-4cd8-a19c-c7fe3c628371/air-jordan-1-low-se-shoes-nvlTsP.png',
        name: "Item 1",
        price: 500,
        rating:4.5,
        },
        {
            id:2,
            image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8d7704ed-3fbc-4cd8-a19c-c7fe3c628371/air-jordan-1-low-se-shoes-nvlTsP.png',
            name: "Item 2",
            price: 500,
            rating:4.5,
        },
        {
            id:3,
            image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8d7704ed-3fbc-4cd8-a19c-c7fe3c628371/air-jordan-1-low-se-shoes-nvlTsP.png',
            name: "Item 3",
            price: 500,
            rating:4.5,
        },
        {
            id:4,
            image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8d7704ed-3fbc-4cd8-a19c-c7fe3c628371/air-jordan-1-low-se-shoes-nvlTsP.png',
            name: "Item 4",      
            price: 500,
            rating:4.5,
        },

    ];
    return(
        <div className="row">
                {items.map((item,index)=>(
                    <div key={index} className='col-lg-4 col-md-12 mb-4'>
                        <ItemCard {...item}/>
                        </div>
                ))}
        </div>
      );
    };
 export default ItemList;