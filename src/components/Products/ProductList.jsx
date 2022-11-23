import { DisplaySettings } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const { products, getProducts } = useProduct();
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div>
            {products.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ProductList;
