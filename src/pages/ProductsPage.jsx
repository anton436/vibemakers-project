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
                <Box
                    sx={{
                        display: {
                            xs: 'block',
                            sm: 'block',
                            md: 'flex',
                            lg: 'flex',
                            xl: 'flex',
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '100%',
                                md: '35%',
                                lg: '35%',
                                xl: '35%',
                            },
                        }}
                    >
                        <ProductFilter />
                    </Box>
                    <Box
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '100%',
                                md: '65%',
                                lg: '65%',
                                xl: '65%',
                            },
                        }}
                    >
                        <ProductSortPagination />
                        <ProductList />
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default ProductsPage;
