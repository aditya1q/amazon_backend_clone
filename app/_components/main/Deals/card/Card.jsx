import React from 'react';
import { CiCirclePlus } from "react-icons/ci";

const Card = ({ deals }) => {
    const inStock = deals.stock > 0;

    return (
        <div className='flex flex-col px-4 py-4 rounded-xl bg-white shadow-lg cursor-pointer gap-4 hover:shadow-2xl transition-shadow'>
            <div className="flex justify-between items-start gap-3">
                <div>
                    <h1 className="text-xl font-bold text-gray-800">
                        {deals.brand}
                    </h1>
                    <span className={`px-3 py-1 text-sm rounded-md ${inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                    <p className='mt-2 text-yellow-500'>Rating: {deals.rating.average} ★</p>
                    <p className='text-gray-500'>Reviews: {deals.rating.reviewCount}</p>
                </div>
                <div className='flex flex-col items-end'>
                    <div className="flex items-center gap-2">
                        <h1 className="text-lg font-bold text-gray-800">
                            ₹{deals.price}
                        </h1>
                        <button className="p-1 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition">
                            <CiCirclePlus className='text-lg' />
                        </button>
                    </div>
                    <span className="text-sm line-through text-gray-400 mt-1">
                        ₹{deals.mrp}
                    </span>
                </div>
            </div>
            <div className='flex justify-center items-center w-full h-full'>
                <img
                    src={deals.images[0]}
                    alt={deals.brand}
                    className="w-32 h-40 object-cover rounded-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
                />
            </div>
        </div>
    );
}

export default Card;
