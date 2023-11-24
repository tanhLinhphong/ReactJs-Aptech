import React from "react";
function ItemCard ({image,name,price,rating}){
    return(
        <div className="text-algin-ceter card shadow-lg">
        <div className="card-body">
            <div className="text-center p-3">
                   <img className="w-100" src={image}/>
                <h4 className="fw-nomarl">{name}</h4>
                <small className="fw-light">${price}</small>
                <h5 className="fw-light">Rate {rating} ⭐️</h5>
                <br></br>
            </div>
        </div>
        
    </div>
    )
}
export default ItemCard;