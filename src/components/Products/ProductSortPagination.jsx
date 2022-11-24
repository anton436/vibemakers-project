import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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
                }}
            >
                <Box
                    sx={{
                        width: '30%',
                        mb: 2,
                        height: '30px',
                        paddingBottom: '5%',
                    }}
                >
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel id="demo-simple-select-label">
                            Sort By
                        </InputLabel>
                        <Select
                            sx={{
                                borderRadius: 0,
                                height: '50px',
                            }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sort}
                            label=""
                            onChange={handleSort}
                        >
                            <MenuItem value={''}>Sort By</MenuItem>
                            <MenuItem value={'low'}>Price Low to High</MenuItem>
                            <MenuItem value={'high'}>
                                Price High to Low
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Stack spacing={2} sx={{ marginRight: 5 }}>
                    <Pagination count={3} color="warning" />
                </Stack>
            </Box>
        </div>
    );
};

export default ProductSortPagination;
