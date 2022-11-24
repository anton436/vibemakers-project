import {
    Autocomplete,
    Box,
    Button,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
const category = ["cat1", "cat2", "cat3", "cat4", "cat5"];
const AddProduct = () => {
    const { addProduct } = useProducts();
    const navigate = useNavigate();
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
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 750,
                md: 1024,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    return (
        <div align="center">
            <h1
                style={{
                    fontSize: "30px",
                }}
            >
                ADD PRODUCT PANEL
            </h1>
            <Box
                sx={{
                    width: "60vw",
                    margin: "5vh auto 20vh",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr ",
                    gridGap: "10px",
                    [theme.breakpoints.down("sm")]: {
                        width: "70vw",
                    },
                }}
            >
                <TextField
                    onChange={handleInp}
                    sx={{ borderColor: "black" }}
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="name"
                    size="small"
                />

                <FormControl fullWidth>
                    <InputLabel
                        sx={{ fontSize: "18px" }}
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
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                    />
                </FormControl>
                <TextField
                    onChange={handleInp}
                    sx={{
                        borderColor: "black",
                        gridColumn: "1/3",
                    }}
                    fullWidth
                    label="Description"
                    variant="outlined"
                    name="description"
                    size="small"
                />

                <TextField
                    onChange={handleInp}
                    sx={{ borderColor: "black" }}
                    fullWidth
                    label="Picture"
                    variant="outlined"
                    name="picture"
                    size="small"
                />

                <TextField
                    onChange={handleInp}
                    sx={{ borderColor: "black" }}
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
                        borderColor: "black",
                        backgroundColor: "#0B1F4F",
                        color: "white",
                        transition: "1000s",
                        gridColumn: "1/3",
                    }}
                    variant="outlined"
                    fullWidth
                    size="large"
                >
                    ADD PRODUCT
                </Button>
            </Box>
        </div>
    );
};

export default AddProduct;
