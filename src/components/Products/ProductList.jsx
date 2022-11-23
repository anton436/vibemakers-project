import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import ProductCard from './ProductCard';

const ProductList = () => {
    const { products, getProducts } = useProducts();
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div>
            <Box>
                <Box className="Ayana"></Box>
                <Box>
                    <Box className="Islam">left</Box>
                    <Box className="Dosya">
                        right
                        {products.map((item) => (
                            <ProductCard item={item} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default ProductList;
