import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';

const AddProduct = () => {
    const { addProduct } = useProducts();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
        picture: '',
        type: '',
    });

    const handleInp = (e) => {
        if (e.target.name === 'price') {
            let obj = { ...product, [e.target.nmae]: Number(e.target.value) };
            setProduct(obj);
        } else {
            let obj = { ...product, [e.target.nmae]: e.target.value };
            setProduct(obj);
        }
    };

    return (
        <>
            <h1>Admin Panel</h1>
            <Box sx={{ width: '60vw', margin: '10vh auto' }}>
                <TextField
                    onChange={handleInp}
                    sx={{ mb: '10px', borderColor: 'black' }}
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="name"
                    size="small"
                />
                <TextField
                    onChange={handleInp}
                    sx={{ mb: '10px', borderColor: 'black' }}
                    fullWidth
                    label="Description"
                    variant="outlined"
                    name="description"
                    size="small"
                />
                <TextField
                    onChange={handleInp}
                    sx={{ mb: '10px', borderColor: 'black' }}
                    fullWidth
                    label="Price"
                    variant="outlined"
                    name="price"
                    size="small"
                    type="number"
                />
                <TextField
                    onChange={handleInp}
                    sx={{ mb: '10px', borderColor: 'black' }}
                    fullWidth
                    label="Picture"
                    variant="outlined"
                    name="picture"
                    size="small"
                />
                <TextField
                    onChange={handleInp}
                    sx={{ mb: '10px', borderColor: 'black' }}
                    fullWidth
                    label="Type"
                    variant="outlined"
                    name="type"
                    size="small"
                />
                <Button
                    variant="outlined"
                    fullWidth
                    size="large"
                    sx={{
                        mb: '10px',
                        borderColor: 'black',
                        backgroundColor: 'black',
                        color: 'white',
                    }}
                    onClick={() => {
                        addProduct(product);
                        navigate('/products');
                    }}
                >
                    Add Product
                </Button>
            </Box>
        </>
    );
};

export default AddProduct;
