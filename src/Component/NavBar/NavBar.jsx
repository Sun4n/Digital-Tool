import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import DigitalTool from '../../assets/DigiTools.png'

const NavBar = () => {
    return (
        <>
            <div className="flex justify-between items-center bg-base-100 py-4 mx-[200px]">
                <div>
                    <img src={DigitalTool} alt="" />
                </div>
                <div>
                    <ul className='flex gap-4 font-semibold'>
                        <li>Products</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                    <FaCartPlus/>
                    <p className='font-semibold'>Login</p>
                    <button className='text-[1rem] font-semibold h-14 bg-linear-65 from-[#4F39F6] to-[#9514FA] rounded-[10000px] px-[16px] py-[12px] text-white'>Get Started</button>
                </div>
            </div>
            <div className="divider"></div>
        </>
    );
};

export default NavBar;