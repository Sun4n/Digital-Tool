import React, { use, useState } from 'react';
import Product from '../ProductCard/Product';
import Cart from '../ProductCard/Cart';


const Premium = ({ productPromise,selectedItem, setSelectedItem, total, setTotal,count,setCount }) => {
    const productsData = use(productPromise)
    // console.log(productData);
    const [isSelected, setIsSelected] = useState(true)
   
   const price = () => {
    const total = selectedItem.reduce((acc, item) => acc + item.price, 0);
    setTotal(total);
};
    return (
        <>
            <div className='max-w-[1200px] mx-auto text-center space-y-[16px]'>
                <h2 className='text-[48px] text-[#101727] font-extrabold'>Premium Digital Tools</h2>
                <p className='text-[1rem] text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='border inline-block border-[#F6F6F6] rounded-[1000px]'>
                    <button onClick={() => setIsSelected(true)} className={`text-[1rem] font-semibold ${isSelected && "h-14 bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white"} text-black rounded-[10000px] px-[16px] py-[12px]`}>Products</button>
                    <button onClick={() => {setIsSelected(false); price()}} className={`px-[16px] py-[12px] ${isSelected || "h-14 bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white"} rounded-[1000px]`}>Cart({selectedItem.length})</button>
                </div>
                {
                    isSelected ? <Product productsData={productsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} count={count} setCount={setCount}></Product> : <Cart selectedItem={selectedItem} setSelectedItem={setSelectedItem} total={total} setTotal = {setTotal} count={count} setCount={setCount}></Cart>
                }

            
            </div>
        </>
    );
};

export default Premium;