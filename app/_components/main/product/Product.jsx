"use client";

import axios from 'axios';
import React from 'react';
import ProductCard from './card/ProductCard'; // Adjust the path based on your file structure

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT;

const Product = () => {
    const [products, setProducts] = React.useState([]);
    const [visibleCount, setVisibleCount] = React.useState(8);

    const showMore = () => {
        setVisibleCount(visibleCount + 12);
    };


    React.useEffect(() => {
        axios.get(`${apiRoot}/product`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data.product.data.products);
            })
            .catch((error) => console.log('Error in product call', error));
    }, []);

    return (
        <div className='relative top-[-20px]'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.slice(0, visibleCount).map((product) => (
                    <ProductCard key={product.asin} product={product} />
                ))}
            </div>
            {products.length > visibleCount && (
                <div className="mt-4 text-center">
                    <button
                        onClick={showMore}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Product;
