import React from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'

const page = () => {
  return (
    <>
    <div className=" flex sm:flex-col md:flex-row items-center gap-8 justify-center  w-full my-10">
        <div className='w-[50%] '>
            <div className='pr-32'>
            <h2 className='font-medium leading-snug text-slate-800  '>Open your NRO, NRE Bank Account with  </h2>
            <h2  className='font-medium leading-snug text-primary pb-6'>Renowned Indian Banks</h2>
            <p className='font-medium w-auto'>Apply in multiple partner banks to speed-up your NRI bank account opening process. It is now easy, fast and secure for NRIs & OCIs to bank in India with SBNRI.</p>
        </div>
        <ul className='flex flex-col gap-4 pt-4'>
            <li className='flex items-center gap-2 font-medium text-gray-500'><IoIosCheckmarkCircle className='text-primary' />Simplified process as per your country</li>
            <li className='flex items-center gap-2 font-medium text-gray-500'><IoIosCheckmarkCircle className='text-primary' />Dedicated bank RM to help you at each step</li>
            <li className='flex items-center gap-2 font-medium text-gray-500'><IoIosCheckmarkCircle className='text-primary' />Industry high FD & savings rate
</li>
        </ul>
        </div>
	<div className="bg-white border-gray-200 border-2 shadow-md rounded-lg px-8 py-6 sm:full md:w-[28%]">
		<h1 className="text-xl font-medium text-center  ">Apply in 20 seconds</h1>
        <p className="text-gray-400 text-center mb-4 ">50,000+ NRIs applied in last 6 months</p>
		<form action="#">
			<div className="mb-4">
				<label  className="block text-[11px] font-medium ">Name</label>
				<input type="name" id="name" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Full name as per Passport" required />
			</div>
			<div className="mb-4">
				<label  className="block text-[11px] font-medium ">Email</label>
				<input type="Email" id="Email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter email" required />
			</div>
            <div className="mb-4">
				<label  className="block text-[11px] font-medium ">Country</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black focus:ring-blue-50 ">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>			</div>
           

            <div className="mb-4">
				<label  className="block text-[11px] font-medium ">WhatsApp Number</label>
				<input type="WhatsApp Number" id="WhatsApp Number" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter Your Whatsapp number" required />
			</div>
            <div className="mb-4">
				<label  className="block text-[11px] font-medium ">Reasons for account opening(You can select multiple)</label>
				<input type="name" id="name" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Choose Reasons" required />
			</div>
			
			<button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 ">Start Process Now</button>
		</form>
            <ul className='pt-4'>
            <li className='text-gray-300 text-xs font-thin'>I have checked all the details and these details can be used for my bank account opening.</li>
                <li className='text-gray-300 text-xs font-thin'>You will receive call from bank on the entered WhatsApp number.</li>
            </ul>
	</div>
</div>
    </>
  )
}

export default page