import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';

const ProductSortPagination = () => {
    const [sort, setSort] = React.useState('');

    const handleSort = (event) => {
        setSort(event.target.value);
    };
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ width: '30%', mb: 2 }}>
                    <FormControl fullWidth>
                        <InputLabel
                            sx={{ '&': { color: '0b1f3f' } }}
                            id="demo-simple-select-label"
                        >
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
            </Box>
        </div>
    );
};

export default ProductSortPagination;
