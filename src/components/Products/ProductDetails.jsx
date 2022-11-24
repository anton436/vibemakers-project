import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';

const ProductDetails = () => {
    const { getProductDetails, productDetails, deleteProduct } = useProducts();

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails(id);
    }, []);
    return (
        <div>
            {productDetails.name} {productDetails.price}
            <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
            <button
                onClick={() => {
                    deleteProduct(id);
                    navigate(`/products`);
                }}
            >
                Delete
            </button>
        </div>
    );
};

export default ProductDetails;
