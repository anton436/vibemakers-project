import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
    return (
        <Box
            sx={{
                minWidth: 120,
                marginLeft: {
                    xs: '30px',
                    sm: '30px',
                    md: '0',
                    lg: '15px',
                    xl: '0',
                },
            }}
        >
            <FormControl fullWidth>
                <InputLabel
                    variant="standard"
                    htmlFor="uncontrolled-native"
                    sx={{ color: 'black' }}
                >
                    Sort By
                </InputLabel>
                <NativeSelect
                    defaultValue={'1'}
                    inputProps={{
                        name: 'sort',
                    }}
                >
                    <option value={'1'}>Low to High</option>
                    <option value={''}>High to Low</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}
