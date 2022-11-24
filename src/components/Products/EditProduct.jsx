import { Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';

const AddProduct = () => {
    const {
        productDetails,
        getProductDetails,
        saveEditedProduct,
        deleteProduct,
    } = useProducts();

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
            <h1>ADMIN PANEL</h1>
            <Box sx={{ width: '60vw', margin: '10vh auto' }}>
                <TextField
                    onChange={handleInp}
                    sx={{ marginBottom: '10px', borderColor: 'black' }}
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="name"
                    size="small"
                    value={product.name || ''}
                />

                <TextField
                    onChange={handleInp}
                    sx={{ marginBottom: '10px', borderColor: 'black' }}
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
                    Save changes
                </Button>
            </Box>
        </div>
    );
};

export default AddProduct;
