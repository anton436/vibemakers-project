import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    return (
        <div>
            {item.name} {item.price}{" "}
            <button onClick={() => navigate(`/products/${item.id}`)}>
                details
            </button>
        </div>
    );
};

export default ProductCard;
