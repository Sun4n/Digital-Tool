import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    console.log(product);
    return (
        
            <div className="card w-[380px] bg-base-100 border border-[#F2F2F2] ">
                <div className="card-body">
                    <div className='border border-[#F6F6F6] rounded-full p-[14px] w-[60px]'>
                        <img src={product.icon} alt="" className='w-[30px] h-[30px] '/>
                    </div>
                    <div className="">
                        <h2 className="text-3xl font-bold text-left">{product.name}</h2>
                        <p className='text-left'>{product.description}</p>
                    </div>
                    <div className='flex justify-start items-center'>
                    <span className='text-left text-black text-[24px] font-bold'>${product.price}/</span><span className='text-left text-[#627382] text-[1rem]'>{product.period}</span>

                    </div>
                    {product.features.map((feature)=>{
                       return( <ul className='text-left'>
                            <li className='flex items-center gap-2 text-green-500'><FaCheck /><p className='text-[#627382] text-[1rem]'>{feature}</p></li>
                        </ul>
                    )})}
                    <div className="mt-6">
                        <button className="btn h-14 bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white rounded-[100px] btn-block">Buy Now</button>
                    </div>
                </div>
            </div>
      
    );
};

export default ProductCard;