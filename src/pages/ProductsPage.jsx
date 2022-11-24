// import { Box, Typography } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import ProductList from '../components/Products/ProductList';
import ProductHeader from '../components/Products/ProductHeader';
import ProductFilter from '../components/Products/ProductFilter';
import ProductSortPagination from '../components/Products/ProductSortPagination';

const ProductsPage = () => {
    return (
        <div>
            <ProductHeader />
            <Box sx={{ width: '100%', mt: '80px' }}>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ width: '35%' }}>
                        <ProductFilter />
                    </Box>
                    <Box sx={{ width: '65%' }}>
                        <ProductSortPagination />
                        <ProductList />
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default ProductsPage;
