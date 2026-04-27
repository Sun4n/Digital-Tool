import React from 'react';
import userIcon from '../../assets/user.png'
import rocketIcon from '../../assets/rocket.png'
import packageIcon from '../../assets/package.png'

const Step = () => {
    return (
        <div className='bg-[#F9FAFC] h-[767px] mt-[200px]'>
            <div className=' mx-auto max-w-[1200px] pt-[120px] text-center'>
                <h2 className='font-bold text-black text-[48px]'>Get Started in 3 Steps</h2>
                <p className='text-[1rem] mt-4 text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                <div className='grid grid-cols-3 mt-[40px]'>
                    <div className='bg-white w-[380px] h-[380px] rounded-[16px] '>
                        <div className='ml-[320px] pt-[20px]'>
                            <div className='w-[40px] h-[40px] bg-linear-65 from-[#4F39F6] to-[#9514FA] rounded-full '>
                                <p className='text-white text-cente'>1</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center h-[300px] space-y-4 '>
                            <img src={userIcon} alt="" className='text-center inline' />
                            <h2 className='font-bold text-[24px]'>Create Account</h2>
                            <p className='w-[380px] text-[#627382] px-[24px]'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className='bg-white w-[380px] h-[380px] rounded-[16px] '>
                        <div className='ml-[320px] pt-[20px]'>
                            <div className='w-[40px] h-[40px] bg-linear-65 from-[#4F39F6] to-[#9514FA] rounded-full '>
                                <p className='text-white text-center'>2</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center h-[300px] space-y-4 '>
                            <img src={packageIcon} alt="" className='text-center inline' />
                            <h2 className='font-bold text-[24px]'>Create Account</h2>
                            <p className='w-[380px] text-[#627382] px-[24px]'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className='bg-white w-[380px] h-[380px] rounded-[16px] '>
                        <div className='ml-[320px] pt-[20px]'>
                            <div className='w-[40px] h-[40px] bg-linear-65 from-[#4F39F6] to-[#9514FA] rounded-full '>
                                <p className='text-white text-center'>3</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center h-[300px] space-y-4 '>
                            <img src={rocketIcon} alt="" className='text-center inline' />
                            <h2 className='font-bold text-[24px]'>Create Account</h2>
                            <p className='w-[380px] text-[#627382] px-[24px]'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Step;