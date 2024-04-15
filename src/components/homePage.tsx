import React from 'react'
import { TbDeviceMobileDown } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import Image from 'next/image';

const HomePage = () => {
  return (
    <>
{/* sectin 1 */}
    <section className='flex-col px-2 pt-16'>
        <div className='flex justify-center align-middle py-14'>
        <div className='text-center  w-2/3 '>
    <h1 className='text-gray-800 mx-auto text-7xl font-semibold '>
        The easiest and fastest way to <span className='text-primary'>invest</span> in India
    </h1>
</div>
        </div>
        <div className='flex justify-center'>
<p className='w-1/3 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur </p>
</div>
<div className='flex justify-center'>
<div className=' bg-gray-100 rounded-md mt-3 w-1/4 px-2 ' >
<input className='bg-transparent text-black placeholder-black outline-none' type="text" placeholder='Enter your email'/>
    <button className='bg-primary text-white px-4 py-2 rounded-md m-2'> Get Started</button>
</div>
</div>
 </section>
{/* section 2 */}
 <section className='flex px-52 justify-center mt-24'>
    <div className='w-1/2'>
    <h1 className='text-gray-800 mx-auto text-[64px] font-bold '>
        A one-stop <span className='text-primary'>Indian</span> Expacts
    </h1>
    <p className=' text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur </p>
        <div className='flex gap-3 mt-3'>
            <div className='text-primary bg-green-100 rounded-full text-4xl p-4'>
        <TbDeviceMobileDown />
        
        </div>
        <div>
            <h3 className='text-sm font-semibold'>Invest reliably with index funds</h3>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing
elit.Ut mollis aenean sit dictum tincidunt.</p>
        </div>
        </div>
        <div className='flex gap-3 mt-3'>
            <div className='text-primary bg-green-100 rounded-full text-4xl p-4'>
            <FaRegUser />
        
        </div>
        <div>
            <h3 className='text-sm font-semibold'>Earn high returns with India’s growth</h3>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing
elit.Ut mollis aenean sit dictum tincidunt.</p>
        </div>
        </div>

        <div className='flex gap-3 mt-3'>
            <div className='text-primary bg-green-100 rounded-full text-4xl p-4'>
            <RiBankFill />
        
        </div>
        <div>
            <h3 className='text-sm font-semibold'>Faster account opening processes with
trusted banks</h3>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing
elit.Ut mollis aenean sit dictum tincidunt.</p>
        </div>
        </div>

        <div className='flex gap-3 mt-3'>
            <div className='text-primary bg-green-100 rounded-full text-4xl p-4'>
            <PiCurrencyDollarSimpleBold />
        
        </div>
        <div>
            <h3 className='text-sm font-semibold'>Invest reliably with index funds</h3>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing
elit.Ut mollis aenean sit dictum tincidunt.</p>
        </div>
        </div>
        </div>
        <div className='w-1/2 bg-green-100 flex items-center px-4'>
        <Image src="/assets/investcoin.png" alt="Your Image Alt Text" className='rounded-md' width={660} height={604}/>

    </div>
 </section>
{/* section 3 */}
 <section className='flex flex-col justify-center mt-24 px-4'>
<h1 className='text-gray-800 mx-auto text-7xl font-semibold '>Serving <span className='text-primary'>NRI</span> from across countries</h1>
<Image src="/assets/world.png" alt="Your Image Alt Text" className='rounded-md' width={1454} height={604}/>
 
 </section>
 </>
  )
}

export default HomePage