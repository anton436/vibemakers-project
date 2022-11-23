import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";

const ProductDetails = () => {
    const { getProductDetails, productDetails } = useProduct();
    const { id } = useParams();
    useEffect(() => {
        getProductDetails(id);
    }, []);
    return (
        <div>
            {productDetails.name} {productDetails.price}
        </div>
    );
};

export default ProductDetails;
