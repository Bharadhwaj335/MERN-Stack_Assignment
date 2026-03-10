import React from "react";

function Product({ product }){
    const { productId, name, price, brand, description, image } = product;

    return (
        <article className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
            <img src={image} alt={name} className="w-full h-44 object-cover" />
            <div className="p-4 flex-1 flex flex-col">
                <div>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="text-xs text-gray-500">{brand}</p>
                </div>
                <p className="mt-2 text-sm text-gray-700 flex-1">{description}</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-indigo-600 font-bold text-lg">${price}</span>
                    <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-indigo-700">Add</button>
                </div>
            </div>
        </article>
    );
}

export default Product;