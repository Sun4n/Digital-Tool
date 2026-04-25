import React from 'react';

const Rating = () => {
    return (
        <div className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full my-[100px]'>
            <div className='flex text-center items-center  text-white py-[60px] mx-[200px]'>
                <div>

                <p className='text-[60px] px-[125px]'>50K+</p> <p className='text-[24px] opacity-80'>Active Users</p> 
                </div>
                <div className="divider divider-horizontal divider-start"></div>
                <div>
                <p className='text-[60px] px-[125px]'>200+</p> <p className='text-[24px] opacity-80'>Premium Tools</p>

                </div>
                 <div className="divider divider-horizontal divider-start"></div>
                 <div>

                <p className='text-[60px] px-[125px]'>4.9</p> <p className='text-[24px] opacity-80'>Rating</p>  
                 </div>
            </div>
            
        </div>
    );
};

export default Rating;