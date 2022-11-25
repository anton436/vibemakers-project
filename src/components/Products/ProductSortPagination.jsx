import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ProductSort from './ProductSort';

const ProductSortPagination = () => {
    const [sort, setSort] = React.useState('');

    const handleSort = (event) => {
        setSort(event.target.value);
    };
    return (
        <div>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: '3%',
                }}
            >
                <Box
                    sx={{
                        width: '30%',
                        mb: 2,
                        height: '30px',
                    }}
                >
                    <ProductSort />
                </Box>
                <Stack spacing={2} sx={{ marginRight: 5 }}>
                    <Pagination count={3} color="warning" />
                </Stack>
            </Box>
        </div>
    );
};

export default ProductSortPagination;
