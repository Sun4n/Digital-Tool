import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
const Product = ({productsData,selectedItem,setSelectedItem}) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-[30px]'>
                {productsData.map((product, indx) => <ProductCard key={indx} product={product} selectedItem={selectedItem} setSelectedItem={setSelectedItem}></ProductCard>)}
            </div>
        </div>
    );
};

export default Product;