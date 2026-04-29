import React from 'react';

const Cart = ({ selectedItem, setSelectedItem ,total,setTotal,count,setCount }) => {
    // console.log(selectedItem);

    const handleRemove = (item)=>{
        const filterItem = selectedItem.filter((data)=> data.name !== item.name)
        setSelectedItem(filterItem)   
        setTotal(total-item.price)
        setCount(count-1)
        
    }
    const handleProceed =()=>{
        setSelectedItem([])
        setTotal(0)
        setCount(0)
    }
    return (
        <div>
            {
                selectedItem.length === 0 ? <div className='border border-[#F2F2F2] px-[40px] space-y-4 h-[50vh] '> <h2 className='text-left pt-10' >Your Cart</h2><h2 className='flex justify-center items-center text-2xl font-bold'>No item selectd</h2></div>:
                <div className='border border-[#F2F2F2] px-[40px] space-y-4 '>
            <h2 className='text-left pt-10' >Your Cart</h2>
            {selectedItem.map((item, indx) => {
                return (
                    <div className='flex justify-between items-center py-[23px] px-[20px] bg-[#F9FAFC] rounded-[1rem] ' key={indx}>
                        <div className='flex gap-4'>
                            <div className='bg-white rounded-full p-[14px]'>
                                <img src={item.icon} alt="" className='p-[14px] w-[30px] h-[30px]' />
                            </div>
                            <div>
                                <p className='text-left font-bold'>{item.name}</p>
                                <p className='text-left'>${item.price}</p>

                            </div>
                        </div>
                        <button className='text-[#FF3980]' onClick={()=> handleRemove(item)}>Remove</button>
                       
                    </div>
                )
            })}
            <div className='flex justify-between items-center '>
                <p className='text-[1rem] text-[#627382]'>Total:</p>
                <p className='font-bold text-[24px]'>${total}</p>
            </div>
            <button className="btn h-14 bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white rounded-[100px] btn-block" onClick={handleProceed}>Proceed to Checkout</button>
        </div>
            }
        </div>
    );
};

export default Cart;