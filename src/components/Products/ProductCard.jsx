import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    return (
        <div>
<<<<<<< HEAD
            {item.name} {item.price}{" "}
=======
            {item.name} {item.price}
>>>>>>> c4b536b3770ded489d8822014f1a3490af0e202f
            <button onClick={() => navigate(`/products/${item.id}`)}>
                details
            </button>
        </div>
    );
};

export default ProductCard;
