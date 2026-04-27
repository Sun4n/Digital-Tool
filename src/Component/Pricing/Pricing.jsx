import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
    return (
        <div className='max-w-[1200px] mx-auto  py-[120px]'>
            <h2 className='font-bold text-black text-[48px] text-center'>Simple, Transparent Pricing</h2>
            <p className='text-[1rem] py-4 text-[#627382] text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='grid grid-cols-3 mt-4'>
                <div className="card w-96  bg-[#F9FAFC] text-white shadow-sm">
                    <div className="card-body rounded-[16px] relative">


                        <div className="">
                            <h2 className="text-3xl font-bold text-black">Starter</h2>
                            <p className='text-[1rem] text-[#627382]'>Perfect for getting started</p>
                            <span className="text-[48px] text-black">$0<span className='text-[20px] py-[24px] text-[#627382]'>/Month</span></span>
                        </div>
                        <ul className='space-y-2 text-[1rem] font-medium'>
                            <li className='flex items-center gap-2 text-[#30B868]'><FaCheck /> <p className='text-[#627382]'> Best for professional tools</p> </li>
                            <li className='flex items-center gap-2 text-[#30B868]'><FaCheck /> <p className='text-[#627382]'>Access to all premium</p></li>
                            <li className='flex items-center gap-2 text-[#30B868]'><FaCheck /> <p className='text-[#627382]'>Unlimited templates</p> </li>
                            <li className='flex items-center gap-2 text-[#30B868]'><FaCheck /> <p className='text-[#627382]'>Cloud sync</p> </li>
                            <li className='flex items-center gap-2 text-[#30B868]'><FaCheck /> <p className='text-[#627382]'>Advanced analytics</p> </li>
                        </ul>
                        <div className="mt-6">
                            <button className="rounded-[100px] px-[102px] py-[15px] text-[1rem] font-bold bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white">Get Started Free</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96  bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white shadow-sm">
                    <div className="card-body rounded-[16px] relative">
                        <span className="bg-[#FEF3C6] text-[#BB4D00] px-[12px] py-[6px] rounded-[1000px] absolute top-[-15px] left-[150px]">Most Popular</span>

                        <div className="">
                            <h2 className="text-3xl font-bold">Pro</h2>
                            <p className='text-[1rem]'>Best for professionals</p>
                            <span className="text-[48px]">$29<span className='text-[20px] py-[24px]'>/Month</span></span>
                        </div>
                        <ul className='space-y-2 text-[1rem] font-medium'>
                            <li className='flex items-center gap-2'><FaCheck /> Best for professionals</li>
                            <li className='flex items-center gap-2'><FaCheck /> Access to all premium tools</li>
                            <li className='flex items-center gap-2'><FaCheck /> Unlimited templates</li>
                            <li className='flex items-center gap-2'><FaCheck /> Cloud sync</li>
                            <li className='flex items-center gap-2'><FaCheck /> Advanced analytics</li>
                        </ul>
                        <div className="mt-6">
                            <button className="rounded-[100px] px-[112px] py-[15px] text-[1rem] font-bold bg-white text-[#4F39F6]">Start Pro Trial</button>
                        </div>
                    </div>
                </div>
                 <div className="card w-96  bg-[#F9FAFC] text-white shadow-sm">
                    <div className="card-body rounded-[16px] relative">


                        <div className="">
                            <h2 className="text-3xl font-bold text-black">Enterprise</h2>
                            <p className='text-[1rem] text-[#627382]'>For teams and businesses</p>
                            <span className="text-[48px] text-black">$99<span className='text-[20px] py-[24px] text-[#627382]'>/Month</span></span>
                        </div>
                        <ul className='space-y-2 text-[1rem] font-medium'>
                            <li className='flex items-center gap-2 text-[#30B868]'><FaCheck /> <p className='text-[#627382]'> Best for professional tools</p> </li>
                            <li className='flex items-center gap-2 text-[#30B868]'><FaCheck /> <p className='text-[#627382]'>Access to all premium</p></li>
                            <li className='flex items-center gap-2 text-[#30B868]'><FaCheck /> <p className='text-[#627382]'>Unlimited templates</p> </li>
                            <li className='flex items-center gap-2 text-[#30B868]'><FaCheck /> <p className='text-[#627382]'>Cloud sync</p> </li>
                            <li className='flex items-center gap-2 text-[#30B868]'><FaCheck /> <p className='text-[#627382]'>Advanced analytics</p> </li>
                        </ul>
                        <div className="mt-6">
                            <button className="rounded-[100px] px-[112px] py-[15px] text-[1rem] font-bold bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;