import React from 'react';
import bannerImg from '../../assets/banner.png'
import badge from '../../assets/Group 5.png'
import { FaPlay } from 'react-icons/fa';
const Banner = () => {
    return (
        <div className='max-w-[1100px] mx-auto flex gap-[60px] mt-[177px]'>
            <div className='space-y-4'>
                <p className='bg-[#E1E7FF] w-[300px] h-[40px] rounded-[1000px]'><img src={badge} alt="" className='inline ml-4 mr-1 my-[11px] ' /><span className='text-[#4F39F6]'>New: AI-Powered Tools Available</span></p>
                <p className='text-[#101727] text-[72px] font-extrabold'>Supercharge Your <br /> Digital Workflow</p>
                <p className='text-[1rem] w-[640px] opacity-80'>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />

                    Explore Products
                </p>
                <div className='flex gap-3'>
                    <button className='text-[1rem] font-semibold h-14 bg-linear-65 from-[#4F39F6] to-[#9514FA] rounded-[10000px] px-[16px] py-[12px] text-white'>Explore Products</button>
                    <button className='text-[1rem] font-semibold border border-[#4F39F6] rounded-[10000px] px-[16px] py-[12px] text-[#4F39F6] flex items-center gap-2 hover:bg-[#4F39F6] hover:text-white transition-[1ms]'><FaPlay /><p>Watch Demo</p></button>
                </div>
            </div>
            <div>
                <img src={bannerImg} alt="" className='w-[500px] h-[590px]' />
            </div>
        </div>
    );
};

export default Banner;