import React from 'react';

const Cart = ({ selectedItem,total }) => {
    // console.log(selectedItem);

  
    return (
        <div className='border border-[#F2F2F2] px-[40px] space-y-4 '>
            <h2 className='text-left pt-10' >Your Cart</h2>
            {selectedItem.map((item,indx) => {
                return (
                    <div className='flex justify-between items-center py-[23px] px-[20px] bg-[#F9FAFC] rounded-[1rem] ' key={indx}>
                        <div className='flex gap-4'>
                            <div className='bg-white rounded-full p-[14px]'>
                                <img src={item.icon} alt="" className='P-[14px] w-[30px] h-[30px]' />
                            </div>
                            <div>
                                <p className='text-left font-bold'>{item.name}</p>
                                <p className='text-left'>${item.price}</p>
                                
                            </div>
                        </div>
                        <p className='text-[#FF3980]'>Remove</p>
                    </div>
                )
            })}
            <div className='flex justify-between items-center '>
                <p className='text-[1rem] text-[#627382]'>Total:</p>
                <p  className='font-bold text-[24px]'>${total}</p>
            </div>
            <button className="btn h-14 bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white rounded-[100px] btn-block">Proceed to Checkout</button>
        </div>
    );
};

export default Cart;