import React from 'react';
import insta from '../../assets/Instagram.png';
import fb from '../../assets/Facebook.png';
import twit from '../../assets/Twitter.png';
const Footer = () => {
    return (
        <div className='bg-[#101727]  text-white flex justify-evenly items-center px-[200px] py-[120px]'>
            <div>
            <h2 className='text-[48px] font-bold'>DigiTools</h2>
            <p className='w-[350px] opacity-80 pt-4'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>

            </div>
            <div>
                <ul className='space-y-4'>
                    <h4>Product</h4>
                    <li className='opacity-80 text-[1rem]'>Features</li>
                    <li className='opacity-80 text-[1rem]'>Pricing</li>
                    <li className='opacity-80 text-[1rem]'>Templates</li>
                    <li className='opacity-80 text-[1rem]'>Integrations</li>
                </ul>
            </div>
            <div>
                <ul className='space-y-4'>
                    <h4>Company</h4>
                    <li className='opacity-80 text-[1rem]'>About</li>
                    <li className='opacity-80 text-[1rem]'>Blog</li>
                    <li className='opacity-80 text-[1rem]'>Careers</li>
                    <li className='opacity-80 text-[1rem]'>Press</li>
                </ul>
            </div>
             <div>
                <ul className='space-y-4'>
                    <h4>Resources</h4>
                    <li className='opacity-80 text-[1rem]'>Documentation</li>
                    <li className='opacity-80 text-[1rem]'>Help Center</li>
                    <li className='opacity-80 text-[1rem]'>Community</li>
                    <li className='opacity-80 text-[1rem]'>Contact</li>
                </ul>
            </div>
            <div>
                <h3 className='text-[20px] font-medium mb-4'>Social Links</h3>
                <div className='flex gap-4'>
                    <img src={insta} alt="" />
                    <img src={fb} alt="" />
                    <img src={twit} alt="" />
                </div>
            </div>
        
        </div>
    );
};

export default Footer;