import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    return (
        <div>
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: 'white',
                    margin: '10px 20px 30px 20px',
                }}
            >
                <Box
                    sx={{
                        width: '90%',
                        backgroundColor: 'white',
                        position: 'relative',
                    }}
                >
                    <img
                        src={item.picture}
                        alt=""
                        style={{ width: '100%', height: '100%' }}
                    />
                    <button
                        style={{
                            position: 'absolute',
                            top: '75%',
                            left: '48%',
                            transform: 'translate(-50%, -50%)',
                            msTransform: 'translate(-50%, -50%)',
                            backgroundColor: 'white',
                            color: 'black',
                            width: '75%',
                            fontSize: '20px',
                            padding: '12px 24px',
                            border: 'none',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            textAlign: 'center',
                        }}
                        onClick={() => navigate(`/products/${item.id}`)}
                    >
                        QUICKVIEW
                    </button>
                    <Typography
                        sx={{
                            fontWeight: '600',
                            marginTop: '13px',
                            width: '90%',
                        }}
                    >
                        {item.name}
                    </Typography>
                    <Typography sx={{ fontWeight: '600' }}>
                        ${item.price}
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default ProductCard;
