// import { Box, Typography } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import ProductList from '../components/Products/ProductList';
import ProductHeader from '../components/Products/ProductHeader';
import ProductFilter from '../components/Products/ProductFilter';

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
                        <ProductList />
                    </Box>
                </Box>
            </Box>
            <Divider
                sx={{
                    width: '60%',
                    margin: '10px',
                    border: '1px solid',
                    backgroundColor: 'black',
                }}
            ></Divider>

            <Box sx={{ width: '65%' }}>
                <ProductList />
            </Box>
        </div>
    );
};

export default ProductsPage;
