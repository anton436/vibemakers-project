import React from 'react';

const ProductSort = () => {
    return (
        <div>
            <select
                className="sort"
                style={{
                    fontSize: '16px',
                    padding: '4% 10% 4% 3%',
                    cursor: 'pointer',
                    fontWeight: '600',
                    border: '1px rgb(206, 206, 206) solid',
                    color: '0b1f3f',
                }}
            >
                <option>Sort By</option>
                <option value="low">Price Low to High</option>
                <option value="high">Price High to Low</option>
            </select>
        </div>
    );
};

export default ProductSort;

// font-size: 16px;
// padding: 4% 10% 4% 3%;
// cursor: pointer;
// font-weight: 600;
// border: 1px rgb(206, 206, 206) solid;
