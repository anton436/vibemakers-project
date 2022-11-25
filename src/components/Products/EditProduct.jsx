import {
    Box,
    Button,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';

const EditProduct = () => {
    const { productDetails, getProductDetails, saveEditedProduct } =
        useProducts();

    const { id } = useParams();

    useEffect(() => {
        getProductDetails(id);
    }, []);

    useEffect(() => {
        setProduct(productDetails);
    }, [productDetails]);

    const navigate = useNavigate();
    const [product, setProduct] = useState(productDetails);

    const handleInp = (e) => {
        let obj = { ...product, [e.target.name]: e.target.value };
        setProduct(obj);
    };

    return (
        <div align="center">
            <h1>EDIT PRODUCT</h1>
            <Box sx={{ width: '60vw', margin: '10vh auto' }}>
                <TextField
                    onChange={handleInp}
                    sx={{ marginBottom: '10px', borderColor: 'black' }}
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={product.name || ''}
                    size="small"
                />

                <FormControl fullWidth>
                    <InputLabel
                        sx={{ fontSize: '18px' }}
                        htmlFor="outlined-adornment-amount"
                    >
                        price
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        onChange={handleInp}
                        label="Price"
                        variant="outlined"
                        name="price"
                        size="small"
                        type="number"
                        value={product.price || ''}
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                    />
                </FormControl>
                <TextField
                    onChange={handleInp}
                    sx={{
                        borderColor: 'black',
                        gridColumn: '1/3',
                    }}
                    fullWidth
                    label="Description"
                    variant="outlined"
                    name="description"
                    size="small"
                    value={product.description || ''}
                />

                <TextField
                    onChange={handleInp}
                    sx={{ marginBottom: '10px', borderColor: 'black' }}
                    fullWidth
                    label="Price"
                    variant="outlined"
                    name="price"
                    size="small"
                    type="number"
                    value={product.price || ''}
                />

                <TextField
                    onChange={handleInp}
                    sx={{ marginBottom: '10px', borderColor: 'black' }}
                    fullWidth
                    label="Picture"
                    variant="outlined"
                    name="picture"
                    size="small"
                    value={product.picture || ''}
                />

                <TextField
                    onChange={handleInp}
                    sx={{ marginBottom: '10px', borderColor: 'black' }}
                    fullWidth
                    label="Type"
                    variant="outlined"
                    name="type"
                    size="small"
                    value={product.type || ''}
                />

                <Button
                    onClick={() => {
                        saveEditedProduct(product, id);
                        navigate('/products');
                    }}
                    sx={{
                        marginBottom: '10px',
                        borderColor: 'black',
                        backgroundColor: 'black',
                        color: 'white',
                    }}
                    variant="outlined"
                    fullWidth
                    size="large"
                >
                    SAVE CHANGES
                </Button>
            </Box>
        </div>
    );
};

export default EditProduct;
