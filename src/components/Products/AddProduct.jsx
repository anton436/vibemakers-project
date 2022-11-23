import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
    const { addProduct } = useProduct();
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
        picture: "",
        type: "",
    });
    const handleInp = (e) => {
        if (e.target.name === "price") {
            let obj = { ...product, [e.target.name]: Number(e.target.value) };
            setProduct(obj);
        } else {
            let obj = { ...product, [e.target.name]: e.target.value };
            setProduct(obj);
        }
    };
    const navigate = useNavigate();
    return (
        <div align="center">
            <h1>ADMIN PANEL</h1>
            <Box sx={{ width: "60vw", margin: "10vh auto" }}>
                <TextField
                    onChange={handleInp}
                    sx={{ marginBottom: "10px", borderColor: "black" }}
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="name"
                    size="small"
                />
                <TextField
                    onChange={handleInp}
                    sx={{ marginBottom: "10px", borderColor: "black" }}
                    fullWidth
                    label="description"
                    variant="outlined"
                    name="description"
                    size="small"
                />
                <TextField
                    onChange={handleInp}
                    sx={{ marginBottom: "10px", borderColor: "black" }}
                    fullWidth
                    label="Price"
                    variant="outlined"
                    name="price"
                    size="small"
                    type="number"
                />
                <TextField
                    onChange={handleInp}
                    sx={{ marginBottom: "10px", borderColor: "black" }}
                    fullWidth
                    label="Picture"
                    variant="outlined"
                    name="picture"
                    size="small"
                />
                <TextField
                    onChange={handleInp}
                    sx={{ marginBottom: "10px", borderColor: "black" }}
                    fullWidth
                    label="Type"
                    variant="outlined"
                    name="type"
                    size="small"
                />
                <Button
                    onClick={() => {
                        addProduct(product);
                        navigate("/products");
                    }}
                    sx={{
                        marginBotttom: "10px",
                        borderColor: "black",
                        backgroundColor: "black",
                        color: "white",
                    }}
                    variant="outlined"
                    fullWidth
                    size="large"
                >
                    add product
                </Button>
            </Box>
        </div>
    );
};

export default AddProduct;
